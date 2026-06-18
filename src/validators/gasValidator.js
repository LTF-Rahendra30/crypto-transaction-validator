import { ERROR_MASSAGE,createValidationResult } from "../utils/errors.js";

/**
 * Validate gas price (transaction fee)
 * 
 * Rules:
 * 1. Must be a number
 * 2. Must be finite (not Infinity, not NaN)
 * 3. Must be >= 1 (minimum fee)
 * 4. Must be <= 1000 (reasonable limit)
 * 
 * Example valid: 1, 50, 100, 500
 * Example invalid: 0, -10, 1500, Infinity
 */

export function validateGassPrice(gasPrice,transactionId){

    // TYPE IS NUMBER 
    if (typeof gasPrice !== 'number'){
        return createValidationResult(
            false,
            transactionId,
            `Gas Price must be a number, got ${typeof gasPrice}`
        );
    }

    // CHECK INFINITY OR NaN 
    if (!isFinite(gasPrice)){
        return createValidationResult(
            false,
            transactionId,
            `Gas price must be a finite number, got ${gasPrice}`
        );
    }

    // CHECK MINIMUM FEE
    if (gasPrice < 1){
        return createValidationResult(
            false,
            transactionId,
            ERROR_MASSAGE.INVALID_GAS_PRICE_LOW
        );
    }

    // CHECK MAXIMUM FEE
    if (gasPrice > 1000){
        return createValidationResult(
            false,
            transactionId,
            ERROR_MASSAGE.INVALID_GAS_PRICE_HIGH
        );
    }

    return createValidationResult(true,transactionId);
}