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

function isPasswordLongEnough(password: string) {
    return password.length > 7;
}

function isPasswordContainEnoughNumbers(password: string) {
    const numberOfNumbers: number = password.split("").reduce((acc, val) => {
        if (isNaN(Number(val))) return acc;
        return acc + Number(val);
    },0);
    return numberOfNumbers > 1;
}

export function passwordValidation(password: string, errorMessage: string): IOutput {
    if (isPasswordLongEnough(password)) {
        if (isPasswordContainEnoughNumbers(password)) return makeResponse(false, errorMessage);
        return makeResponse(true, "");
    }
    return makeResponse(false, errorMessage);
}
