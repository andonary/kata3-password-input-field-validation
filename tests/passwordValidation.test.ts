import { passwordValidation, ResultExpected } from "../src/passwordValidation";

describe("Password Validation", () => {
  test.each([
    {
      isValid: true,
      errors: "",
      password: "Ab1@2gT8",
    },
    {
      isValid: false,
      errors: "Password must be at least 8 characters",
      password: "Ab1@2gT",
    },
    {
      isValid: false,
      errors: "Password must be at least 8 characters",
      password: "Ab1@2g",
    },
    {
      isValid: false,
      errors: "The password must contain at least 2 numbers",
      password: "AbM@EgTP",
    },
    {
      isValid: false,
      errors: "The password must contain at least 2 numbers",
      password: "Ab5@EgTP",
    },
    {
      isValid: false,
      errors: "Password must be at least 8 characters\\nThe password must contain at least 2 numbers",
      password: "Ab1@RgT",
    },
    {
      isValid: false,
      errors: "password must contain at least one capital letter",
      password: "ab1@2gt8",
    },
    {
      isValid: false,
      errors: "password must contain at least one capital letter",
      password: "ab1@2rt8",
    },
    {
      isValid: false,
      errors: "password must contain at least one special character",
      password: "Ab1A2gT8",
    },
    {
      isValid: true,
      errors: "",
      password: "Ab1_2gT8",
    },
  ])("it should: valid='$isValid', password='$password', errors='$errors'", (expected) => {
    // Arrange
    const { password } = expected;

    // Act
    const result: ResultExpected = passwordValidation(password);

    // Assert
    expect(result.isValid).toEqual(expected.isValid);
    expect(result.errors).toEqual(expected.errors);
  });
});
