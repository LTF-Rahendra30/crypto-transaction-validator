import { validateAddress } from "./validators/addressValidator.js";
import { validateAmount } from "./validators/amountValidator.js";
import { validateGassPrice } from "./validators/gasValidator.js";

/**
 * Main orchestrator: Validate single transaction
 * 
 * Runs all validators (address, amount, gas price)
 * Collects errors from each
 * Returns unified validation result
 * 
 * @param {Object} transaction - { id, from, to, amount, gasPrice }
 * @returns {Object} - { transactionId, isValid, errors: [...] }
 */

export function validateTransaction(transaction){
    // Initialize results array
    const errors = [];

    // Validate "from" addres
    const fromValidation = validateAddress(transaction.from,transaction.id);
    if (!fromValidation.isValid){
        errors.push({
            field: "from",
            reason: fromValidation.reason,
        });
    }
    
    // Validate "to" address 
    const toValidation = validateAddress(transaction.to,transaction.id);
    if (!toValidation.isValid){
        errors.push({
            field: "to",
            reason: toValidation.reason,
        });
    }

    // Validation amount
    const amountValidation = validateAmount(transaction.amount,transaction.id);
    if (!amountValidation.isValid){
        errors.push({
            field: "amount",
            reason: amountValidation.reason,
        });
    }

    // Validation gas
    const gasValidation = validateGassPrice(transaction.gasPrice,transaction.id);
    if (!gasValidation.isValid){
        errors.push({
            field: "gasPrice",
            reason: gasValidation.reason,
        });
    }

    // Determine: Will valid when array empty
    const isValid = errors.length === 0;
    // errors = []      → length = 0  → isValid = true
    // errors = [...]   → length > 0  → isValid = false

    // Return stcture

    return {
        transactionId: transaction.id,
        isValid,
        errors,
        summary: isValid
            ? "Transaction is valid ✓" 
            : `${errors.length} validation error(s) found`,
    };
}

// const transaction1 = {
//   id: 1,
//   from: "0x742d35Cc6634C0532925a3b844Bc0e7d21409fde",
//   to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
//   amount: 10,
//   gasPrice: 40
// };
// const transaction2 = {
//   id: 1,
//   from: "0x742d35Cc6634C0532925a3b844Bc0e7d21409fde",
//   to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
//   amount: 0,
//   gasPrice: -40
// };

// // Use function:
// const result = [validateTransaction(transaction2),validateTransaction(transaction1)]
// console.log(result);