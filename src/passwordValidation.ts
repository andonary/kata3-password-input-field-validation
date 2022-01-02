function invalidate(result: { isValid: boolean; error: string }, error: string) {
    result.isValid = false;
    if (result.error) result.error += "\\n";
    result.error += error;
}

type methodCheck = 'check' | 'error';
type methods = Record<methodCheck, any>
const checkers: Record<string, methods> = {
    longEnough: {
        check: (password: string) => password.length < 8,
        error: "Password must be at least 8 characters"
    },
    enoughNumbers: {
        check: (password: string) => !/.*\d+.*\d+.*/.test(password),
        error: "The password must contain at least 2 numbers"
    },
    enoughCapital: {
        check: (password: string) => !/.*[A-Z]+.*/.test(password),
        error: "password must contain at least one capital letter"
    },
    enoughSpecial: {
        check: (password: string) => !/.*[\W_]+.*/.test(password),
        error: "password must contain at least one special character"
    }
}

function passwordChecker(password: string, result: { isValid: boolean; error: string }) {
    for (const value of Object.values(checkers)) {
        if (value.check(password)) invalidate(result, value.error);
    }
}

export function passwordValidation(password: string) {
    const result = {isValid: true, error: ""}
    passwordChecker(password, result);
    return result;
}
