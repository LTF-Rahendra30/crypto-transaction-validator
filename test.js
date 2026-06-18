// ====== IMPORT MODULES ======

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
}


)