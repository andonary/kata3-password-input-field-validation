import {IValidation} from "./interface.validation";
import {errorMessages} from "./errorMessage/errorMessages.enum";

function makeValidation(errorMessage: string) {
    return {
        isValid: false,
        errorMessage
    };
}

function hasAtLeastTwoNumbers(password: string) {
    return !/\d{2}/g.test(password);
}

export function passwordInputValidation(password: string): IValidation {
    if (hasAtLeastTwoNumbers(password)) return makeValidation(errorMessages.atLeastTwoNumber);
    if (password.length > 7) return makeValidation("");
    return makeValidation(errorMessages.enoughCharacter);
}
