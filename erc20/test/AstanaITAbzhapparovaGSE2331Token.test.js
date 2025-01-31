const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AstanaITAbzhapparovaGSE2331Token", function () {
    let token, owner, addr1;

    beforeEach(async () => {
        [owner, addr1] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("AstanaITAbzhapparovaGSE2331Token");
        token = await Token.deploy(2000); // Передаем 2000, а не ethers.parseUnits("2000", 18)
        await token.waitForDeployment();
    });

    it("Должен создать 2000 токенов и отправить владельцу", async () => {
        const ownerBalance = await token.balanceOf(owner.address);
        expect(await token.totalSupply()).to.equal(ethers.parseUnits("2000", 18)); // Ожидаем 2000 * 10^18
        expect(ownerBalance).to.equal(ethers.parseUnits("2000", 18)); // Ожидаем 2000 * 10^18
    });

    it("Должен передавать токены", async () => {
        await token.transfer(addr1.address, ethers.parseUnits("500", 18));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.parseUnits("500", 18));
    });

    it("Не должен позволять отправлять больше, чем есть на балансе", async () => {
        // Убедимся, что у addr1 нет токенов
        const addr1Balance = await token.balanceOf(addr1.address);
        expect(addr1Balance).to.equal(0);
    
        // Попытка отправить токены, которых нет
        await expect(
            token.connect(addr1).transfer(owner.address, ethers.parseUnits("1000", 18))
        ).to.be.revertedWithCustomError(token, "ERC20InsufficientBalance"); // Используем кастомную ошибку
    });
    it("Должен возвращать время последней транзакции", async () => {
        const timestamp = await token.getLastTransactionTimestamp();
        expect(timestamp).to.be.a("bigint");
    });

    it("Должен возвращать корректное время последней транзакции", async () => {
        const block = await ethers.provider.getBlock("latest");
        const timestamp = await token.getLastTransactionTimestamp();
        expect(timestamp).to.be.closeTo(BigInt(block.timestamp), BigInt(5));
    });
});