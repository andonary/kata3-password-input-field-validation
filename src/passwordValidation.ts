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

function hasEnoughNumbers(password: string) {
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

function hasCapitalLetter(password: string) {
    const numberOfCapital: number = password.split("").reduce((acc, val) => {
        if (!/[A-Z]/.test(val)) return acc;
        return acc + 1;
    },0);
    return numberOfCapital > 0;
}

function notContainingCapitalLetter() {
    return "password must contain at least one capital letter";
}

function hasSpecialCharacter(password: string) {
    const numberOfSpecial: number = password.split("").reduce((acc, val) => {
        if (/[A-Z0-9]/i.test(val)) return acc;
        return acc + 1;
    },0);
    return numberOfSpecial > 0;
}

function notContainingSpecial() {
    return "password must contain at least one special character";
}

export function passwordValidation(password: string): IOutput {
    if (isLongEnough(password)) {
        if (hasEnoughNumbers(password)) {
            if (!hasCapitalLetter(password)) {
                if (!hasSpecialCharacter(password)) {
                    return makeResponse(false, notContainingSpecial())
                }
                return makeResponse(false, notContainingCapitalLetter())
            }
            return makeResponse(true, "");
        }
        return makeResponse(false, notContainingEnoughNumbersAndNotLongEnough());
    }
    return makeResponse(false, passwordNotLongEnough());
}
