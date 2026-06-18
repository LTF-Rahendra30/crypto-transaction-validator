# A Simple Crypto Transaction Validator by JavaCript

## 📖 Overview
Modular validation system for Ethereum transactions. Like:
- Validate address format
- Validate amount
- Validate gass price

## 🚀 Quick Start
```bash
node test.js
```
## 🔍 Features
### 1. addressValidator.js
Validate Ethereum address format (0x + 40 hex)

### 2. amountValidator.js
Validate transaction amount (positive, finite)

### 3. gasValidator.js
Validate gas price (1-1000 range)

### 4. errors.js
Collect multiple errors massage with field names

### 5. main.js
Entry poin and Batch validate multiple transactions

## 📦 Project Structure
```text
transaction-validator/
│
├── src/                          # Source code folder
│   ├── validators/               # Validation logic (modular)
│   │   ├── addressValidator.js   # Validate wallet addresses
│   │   ├── amountValidator.js    # Validate transaction amount
│   │   └── gasValidator.js       # Validate gas price
│   │
│   ├── utils/                    # Helper functions
│   │   └── errors.js             # Error messages (reusable)
│   │
│   └── main.js                   # Entry point (orchestrate)
│
├── data/                         # Sample data
│   └── sampleTransactions.json   # Test data
│
├── test.js                       # Testing/validation output
├── package.json                  # Project metadata
├── README.md                     # Documentation
└── .gitignore                    # Git config
```


## 💡 How to Use
```javascript
import { validateTransaction } from "./src/main.js";

const tx = {
  id: 1,
  from: "0x...",
  to: "0x...",
  amount: 1.5,
  gasPrice: 50
};

const result = validateTransaction(tx);
console.log(result);
```

## 📊 Output Example
```javascript
{
  transactionId: 1,
  isValid: true,
  errors: [],
  summary: "Transaction is valid ✓"
}
```
## 🎓 Learning Points
- Modular function architecture
- Error handling patterns
- Pure functions
- Data validation logic
- (Applicable to Web3 development)
- Business logic

## 📝 Notes
- Only validates basic format
- Does NOT check blockchain state
- Does NOT process transactions