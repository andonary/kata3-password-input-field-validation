export interface ResultExpected {
  isValid: boolean;
  errors: string;
}

class Password {
  constructor(private password: string) {}

  isNotLongEnough() {
    return this.password.length < 8;
  }

  hasNotEnoughNumbers() {
    return !/.*\d.*\d.*/.test(this.password);
  }

  hasNotCapitalLetters() {
    return !/.*[A-Z]+.*/.test(this.password);
  }

  hasNotSpecialCharacter() {
    return !/.*[\W_].*/.test(this.password);
  }
}

class Result {
  private errors: string = "";
  private isValid: boolean = true;

  generate(): ResultExpected {
    return { isValid: this.isValid, errors: this.errors };
  }

  invalidatesWith(error: string) {
    this.isValid = false;
    if (this.errors.length) this.errors += "\\n";
    this.errors += error;
  }
}

export function passwordValidation(input: string): ResultExpected {
  const password: Password = new Password(input);
  const result: Result = new Result();
  if (password.isNotLongEnough()) result.invalidatesWith("Password must be at least 8 characters");
  if (password.hasNotEnoughNumbers()) result.invalidatesWith("The password must contain at least 2 numbers");
  if (password.hasNotCapitalLetters()) result.invalidatesWith("password must contain at least one capital letter");
  if (password.hasNotSpecialCharacter()) result.invalidatesWith("password must contain at least one special character");
  return result.generate();
}
