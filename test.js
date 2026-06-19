// ====== IMPORT MODULES ======

import { error } from "console";
import { validateTransaction} from "./src/main.js";
import fs from "fs"; // file syetem module (built in Node.js)


// =========== MANUAL CREATE TRANSACTION ============
const transaction1 = {
  id: 1,
  from: "0x742d35Cc6634C0532925a3b844Bc0e7d21409fde",
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  amount: 10,
  gasPrice: 40
};
const transaction2 = {
  id: 1,
  from: "0x742d35Cc6634C0532925a3b844Bc0e7d21409fde",
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  amount: 0,
  gasPrice: -40
}; 
// Use function:
const result1 = validateTransaction(transaction2)
console.log(formatValidationResult(result1));

// The Output:
// {
//   "transactionId": 1,
//   "isValid": false,
//   "errors": [
//     {
//       "field": "amount",
//       "reason": "Amount be greater than 0"
//     },
//     {
//       "field": "gasPrice",
//       "reason": "Gas price must be at least 1"
//     }
//   ],
//   "summary": "2 validation error(s) found"
// }
// ===== LOAD SAMPLE DATA ======
// Read JSON file (sampleTransactions.json)
// Parse JSON → JavaScript array
const sampleData = JSON.parse(
    fs.readFileSync("./data/sampleTransactions.json","utf-8")
);

// ======= RUN VALIDATION ON ALL TRANSACTION ==========
console.log("TRANSACTION VALIDATION TEST\n");
console.log("=".repeat(80));
// Validate through every transaction
sampleData.forEach((transaction) => {
    // validate 1 transaction
    const result = validateTransaction(transaction);

    // print result
    console.log(`\nTransaction ID ${result.transactionId}`);
    console.log(`\nStatus: ${result.isValid ? "✅ VALID" : "❌ INVALID"}`);
    console.log(`\nSumarry ${result.summary}`);

    // If error, print detail
    if (result.errors.lenght > 0){
        console.log("Errors:");
        result.errors.forEach((error) => {
            console.log(`    - ${error.field}: ${error.reason}`);
        });
    }

    console.log("-".repeat(80));
});

// ====== SUMMARY =========
const allResult = sampleData.map(validateTransaction);
const validCount = allResult.filter((r) => r.isValid).length;
const invalidCount = allResult.filter((r) => !r.isValid).length;

console.log("\n📊 SUMMARY");
console.log(`Total transactions: ${allResult.length}`);
console.log(`Valid: ${validCount}`);
console.log(`Invalid: ${invalidCount}`);