import { ERROR_MASSAGE,createValidationResult } from "../utils/errors.js";


/**
 * Validate transaction amount
 * 
 * Rules:
 * 1. Must be a number
 * 2. Must be positive (> 0)
 * 3. Cannot be Infinity or NaN
 * 
 * Example valid: 1.5, 100, 0.001
 * Example invalid: -5, 0, "100", Infinity
 */

export function validateAmount(amount,transactionId){

    if (typeof amount !== 'number'){
        return(
            false,
            transactionId,
            `Amount must be a number, got ${typeof amount}`
        );
    }

}

console.log(validateAmount("jjuwdwv"))