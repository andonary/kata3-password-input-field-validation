class Validator {
  private errorMessages = "";

  private addLine() {
    if (this.errorMessages.length) this.errorMessages += "\\n";
  }

  notEnoughCharacters() {
    this.errorMessages += "Password must be at least 8 characters";
  }

  notEnoughNumbers() {
    this.addLine();
    this.errorMessages += "The password must contain at least 2 numbers";
  }

  notEnoughCapitals() {
    this.addLine();
    this.errorMessages += "password must contain at least one capital letter";
  }

  notEnoughSpecials() {
    this.addLine();
    this.errorMessages += "password must contain at least one special character";
  }

  send(): IResult {
    return {
      isValid: this.errorMessages.length === 0,
      errorMessages: this.errorMessages,
    };
  }
}

class Password {
  constructor(private password: string) {}

  hasEnoughCharacters() {
    return this.password.length > 7;
  }

  hasEnoughNumbers() {
    return /.*\d+.*\d+.*/.test(this.password);
  }

  hasEnoughCapitals() {
    return /.*[A-Z]+.*/.test(this.password);
  }

  hasEnoughSpecials() {
    return /.*\W|_.*/.test(this.password);
  }
}

export function passwordValidation(passToCheck: string): IResult {
  const validator: Validator = new Validator();
  const password: Password = new Password(passToCheck);
  if (!password.hasEnoughCharacters()) validator.notEnoughCharacters();
  if (!password.hasEnoughNumbers()) validator.notEnoughNumbers();
  if (!password.hasEnoughCapitals()) validator.notEnoughCapitals();
  if (!password.hasEnoughSpecials()) validator.notEnoughSpecials();
  return validator.send();
}

export interface IResult {
  isValid: boolean;
  errorMessages: string;
}
