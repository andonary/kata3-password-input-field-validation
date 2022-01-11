export interface Result {
    isValid: boolean,
    error: string
}

function makeInvalid(result: Result, error: string) {
    result.isValid = false;
    if (result.error) result.error += "\n";
    result.error += error;
}

function isTooShort(password: string): boolean {
    return password.length < 8;
}

function hasNotEnoughNumbers(password: string): boolean {
    return !/^.*\d+.*\d+.*$/.test(password);
}

function hasNotEnoughCapital(password: string) {
    return !/^.*[A-Z]+.*$/.test(password);
}

function hasNotEnoughSpecial(password: string) {
    return !/^.*[\W_]+.*$/.test(password);
}

export function passwordValidation(password: string): Result {
    const result: Result = {
        isValid: true,
        error: ""
    };
    if (isTooShort(password)) makeInvalid(result, "Password must be at least 8 characters");
    if (hasNotEnoughNumbers(password)) makeInvalid(result, "The password must contain at least 2 numbers");
    if (hasNotEnoughCapital(password)) makeInvalid(result, "password must contain at least one capital letter");
    if (hasNotEnoughSpecial(password)) makeInvalid(result, "password must contain at least one special character");
    return result;
}
