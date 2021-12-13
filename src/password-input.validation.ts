import {IValidation} from "./interface.validation";
import {errorMessages} from "./errorMessage/errorMessages.enum";

function makeValidation(errorMessage: string) {
    return {
        isValid: false,
        errorMessage
    };
}

export function passwordInputValidation(password: string): IValidation {
    if (!/\d{2}/g.test(password)) return makeValidation(errorMessages.atLeastTwoNumber);
    if (password.length > 7) return makeValidation("");
    return makeValidation(errorMessages.enoughCharacter);
}
