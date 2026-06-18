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

