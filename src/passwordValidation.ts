function addError(message: string, error: string) {
  if (message.length) message += "\n";
  message += error;
  return message;
}

export function passwordValidation(input: string) {
  let message = "";
  if (input.length < 8) message = addError(message, "Password must be at least 8 characters");
  if (input.replaceAll(/[^0-9]/g, "").length < 2) message = addError(message, "The password must contain at least 2 numbers");
  if (input.replaceAll(/[^A-Z]/g, "") === "") message = addError(message, "password must contain at least one capital letter");
  if (input.replaceAll(/[^\W_]/g, "") === "") message = addError(message, "password must contain at least one special character");
  const isValid = !message.length;
  return { isValid, message };
}
