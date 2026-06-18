import { ERROR_MASSAGE,createValidationResult } from "../utils/errors.js";

export function validateAmount(amount){

    if (typeof amount !== 'number'){
        return(
            false,
            `Amount must be a number, got ${typeof amount}`
        );
    }

}

console.log(validateAmount("jjuwdwv"))