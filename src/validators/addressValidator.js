import { ERROR_MASSAGE,createValidationResult } from "../utils/errors.js";

/**
 * Validate Ethereum address format
 * 
 * Rules:
 * 1. Must start with "0x"
 * 2. Must be followed by exactly 40 hexadecimal characters (0-9, a-f)
 * 3. Total length: 42 characters
 * 
 * Example valid: 0x742d35Cc6634C0532925a3b844Bc0e7d21409fde
 * Example invalid: 0x123, invalid-address, 742d35Cc...
 */

export function validateAddress(address,transactionId){
    // Check 1: typeof address
  // Check 2: startsWith("0x")
  // Check 3: length === 42
  // Check 4: hexadecimal validation (bisa pakai regex atau manual)
  
  // Return result pake createValidationResult()

//   CHECK TYPOF ADDRESS
    if (typeof address !== 'string'){
        return createValidationResult(
            false,
            transactionId,
            `Address must be a string, got ${typeof address}`
        );
    }

    // CHECK DOES IT START WITH "0x"
    if (!address.startsWith("0x")){
        return createValidationResult(
            false,
            transactionId,
            ERROR_MASSAGE.INVALID_ADDRESS_FORMAT
        );
    }

    // CHECK IS TOTALY LENGTH EXACLY 42
    if (address.length !== 42){
        return createValidationResult(
            false,
            transactionId,
            ERROR_MASSAGE.INVALID_ADDRESS_FORMAT
        );
    }

    // CHECK HEXADECIMAL FORMAT, after "0x" (0-9, a-f)
    const hexPart = address.slice(2);
    const isHexadecimal = /^[0-9a-F{40}$]/.test(hexPart);

    if (!isHexadecimal){
        return createValidationResult(
            false,
            transactionId,
            ERROR_MASSAGE.INVALID_ADDRESS_FORMAT
        );
    }

    // ALL CHECK PART
    return createValidationResult(true,transactionId);
}