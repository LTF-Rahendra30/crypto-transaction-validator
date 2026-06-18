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
    if (!fromValidation){
        errors.push({
            field: "from",
            reason: fromValidation,
        });
    }

}