require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20", // Основная версия (например, для нового контракта)
      },
      {
        version: "0.8.28", // Версия для контракта Lock.sol
      },
    ],
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
