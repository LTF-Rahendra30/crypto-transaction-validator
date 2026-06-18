// ====== IMPORT MODULES ======

import { error } from "console";
import { validateTransaction } from "./src/main.js";
import fs from "fs"; // file syetem module (built in Node.js)

// ===== LOAD SAMPLE DATA ======
// Read JSON file (sampleTransactions.json)
// Parse JSON → JavaScript array
const sampleData = JSON.parse(
    fs.readFileSync("./data/sampleTransaction.json","utf-8")
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
    console.log(`\nStatus: ${result.isValid ? "VALID" : "INVALID"}`);
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
const validCount = allResult.filter((r) => r.isValid).lenght;
const invalidCount = allResult.forEach((r) => !r.isValid).lenght;

console.log("\n📊 SUMMARY");
console.log(`Total transactions: ${allResults.length}`);
console.log(`Valid: ${validCount}`);
console.log(`Invalid: ${invalidCount}`);