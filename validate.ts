function invalidate(message: string, error: string) {
  if (message.length) message += "\n";
  message += error;
  return message;
}

export function Validate(password: string) {
  let message = "";
  if (!/.{8,}/.test(password)) message = invalidate(message, "Password must be at least 8 characters");
  if (!/[\d].*[\d]/.test(password)) message = invalidate(message, "The password must contain at least 2 numbers");
  if (!/[A-Z]+/.test(password)) message = invalidate(message, "password must contain at least one capital letter");
  if (!/[_\W]+/.test(password)) message = invalidate(message, "password must contain at least one special character");
  return { isValid: !message.length, message };
}
