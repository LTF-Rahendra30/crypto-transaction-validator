// Error massage that reusale for all validators

export const ERROR_MASSAGE = {
    INVALID_ADDRESS_FORMAT: "Invalid address format. Must be 0x followed by 40 hexadecimal characters",
    INVALID_AMOUNT_ZERO: "Amount be greater than 0",
    INVALID_AMOUNT_NEGATIF: "Amount cant be negative",
    INVALID_GAS_PRICE_LOW: "Gas price must be at least 1",
    INVALID_GAS_PRICE_HIGH: "Gas price is to high (> 1000)",
};

// Helper function for format validation result

export function createValidationResult(isValid,transactionId,reason = null){
    return{
        transactionId,
        isValid,
        reason: reason || "Transaction is Valid"
    }
}
