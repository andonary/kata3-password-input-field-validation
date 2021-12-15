export interface IOutput {
    isValid: boolean;
    errorMessage: string;
}

function makeResponse(isValid: boolean, errorMessage: string) {
    return {
        isValid,
        errorMessage
    };
}

function isLongEnough(password: string) {
    return password.length > 7;
}

function isContainEnoughNumbers(password: string) {
    const numberOfNumbers: number = password.split("").reduce((acc, val) => {
        if (isNaN(Number(val))) return acc;
        return acc + 1;
    },0);
    return numberOfNumbers > 1;
}

function passwordNotLongEnough() {
    return "Password must be at least 8 characters";
}

function notContainingEnoughNumbersAndNotLongEnough() {
    return "Password must be at least 8 characters\\nThe password must contain at least 2 numbers";
}

export function passwordValidation(password: string, errorMessage: string): IOutput {
    if (isLongEnough(password)) {
        if (isContainEnoughNumbers(password)) return makeResponse(true, "");
        return makeResponse(false, notContainingEnoughNumbersAndNotLongEnough());
    }
    return makeResponse(false, passwordNotLongEnough());
}
