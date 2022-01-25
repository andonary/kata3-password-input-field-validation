function invalidPassword(validation: any, message: string) {
  validation.isValid = false;
  if (validation.message) validation.message += "\n";
  validation.message += message;
}

export function passwordValidation(input: string) {
  let validation = {
    isValid: true,
    message: "",
  };
  if (input.length < 8) invalidPassword(validation, "Password must be at least 8 characters");
  if (input.replaceAll(/\D/g, "").length < 2) invalidPassword(validation, "The password must contain at least 2 numbers");
  if (input.replaceAll(/[^A-Z]/g, "") === "") invalidPassword(validation, "password must contain at least one capital letter");
  if (input.replaceAll(/[-a-zA-Z0-9]/g, "") === "") invalidPassword(validation, "password must contain at least one special character");
  return validation;
}
