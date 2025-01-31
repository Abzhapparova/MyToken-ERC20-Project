# 🚀 AstanaITAbzhapparovaGSE2331Token (Part 2)

This project is a modified version of an **ERC-20** token smart contract. The contract has been enhanced to support the `initialSupply` parameter in the constructor, allowing flexible control over the initial token issuance.

## 📁 Project Structure

Part2/
├── contracts/
│   └── AstanaITAbzhapparovaGSE2331Token.sol  # Modified contract
├── test/
│   └── AstanaITAbzhapparovaGSE2331Token.test.js  # Contract tests
└── README.md  # This file

## 🛠️ Installation & Setup

### 1. Install Dependencies

To work with this project, you need to install [Node.js](https://nodejs.org/) and [Hardhat](https://hardhat.org/).

1. Install **Node.js** (if not already installed).  
2. Install **Hardhat** globally:

   ```bash
   npm install -g hardhat
   ```

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository/Part2
```

### 3. Install Project Dependencies

```bash
npm install
```

### 4. Run Tests

```bash
npx hardhat test
```

---

## 📜 Contract Description

**Contract:** `AstanaITAbzhapparovaGSE2331Token.sol`  
This contract implements an **ERC-20** token named **AstanaITAbzhapparovaGSE2331Token** with the symbol **AITAGSE2331**. The constructor accepts an `initialSupply` parameter, which defines the initial token issuance.

### 🔑 Key Functions:

- **`constructor(uint256 initialSupply)`** – Initializes the contract and creates `initialSupply` tokens, sending them to the owner.
- **`getLastTransactionTimestamp()`** – Returns the timestamp of the last transaction.
- **`transfer(address to, uint256 amount)`** – Transfers tokens to the specified address.

---

## 🧪 Testing

Tests are written using **Hardhat** and **Chai**, covering all major contract functionalities.

### 📌 Run Tests:

```bash
npx hardhat test
```

### ✅ Test Cases:

1. **Token Creation:**
   - Ensures that the contract creates 2000 tokens and sends them to the owner.

2. **Token Transfers:**
   - Verifies that tokens can be transferred to another address.

3. **Balance Check:**
   - Ensures that tokens cannot be sent if the balance is insufficient.

4. **Last Transaction Timestamp:**
   - Checks that the `getLastTransactionTimestamp` function returns the correct time.

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🙏 Acknowledgments

- **OpenZeppelin** – for providing **ERC-20** contract templates.
- **Hardhat** – for offering a great smart contract testing environment.

---

## 📧 Contact

For questions or suggestions, feel free to contact me:

- **Email:** 231405@astanait.edu.kz  
- **GitHub:** Abzhapparova 




