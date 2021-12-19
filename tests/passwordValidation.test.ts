import { IResult, passwordValidation } from "../src/passwordValidation";

describe("Password Validation", () => {
  test.each([
    {
      condition: "if enough character",
      password: "@B3p5oA",
      isValid: false,
      errorMessages: "Password must be at least 8 characters",
    },
    {
      condition: "if enough character",
      password: "@B3p5oA8",
      isValid: true,
      errorMessages: "",
    },
    {
      condition: "if enough character",
      password: "@B3p5oA89",
      isValid: true,
      errorMessages: "",
    },
    {
      condition: "if enough numbers",
      password: "@BEpSoAB1",
      isValid: false,
      errorMessages: "The password must contain at least 2 numbers",
    },
    {
      condition: "if enough numbers",
      password: "@BEpSoAB2",
      isValid: false,
      errorMessages: "The password must contain at least 2 numbers",
    },
    {
      condition: "if enough numbers",
      password: "@BEpSo5BR",
      isValid: false,
      errorMessages: "The password must contain at least 2 numbers",
    },
    {
      condition: "if enough numbers",
      password: "@BEpRoABR",
      isValid: false,
      errorMessages: "The password must contain at least 2 numbers",
    },
    {
      condition: "if multiple validation errors",
      password: "@BEpSoA",
      isValid: false,
      errorMessages: "Password must be at least 8 characters\\nThe password must contain at least 2 numbers",
    },
    {
      condition: "if enough capital letter",
      password: "@b3p5oa89",
      isValid: false,
      errorMessages: "password must contain at least one capital letter",
    },
    {
      condition: "if enough capital letter",
      password: "@z3p5oa89",
      isValid: false,
      errorMessages: "password must contain at least one capital letter",
    },
    {
      condition: "if enough special character",
      password: "AB3p5oa89",
      isValid: false,
      errorMessages: "password must contain at least one special character",
    },
    {
      condition: "if enough special character",
      password: "GB3p5oa89",
      isValid: false,
      errorMessages: "password must contain at least one special character",
    },
    {
      condition: "if enough special character",
      password: "G!3p5oa89",
      isValid: true,
      errorMessages: "",
    },
    {
      condition: "if enough special character",
      password: "G$3p5oa89",
      isValid: true,
      errorMessages: "",
    },
    {
      condition: "if enough special character",
      password: "G_3p5oa89",
      isValid: true,
      errorMessages: "",
    },
    {
      condition: "if multiple validation errors",
      password: "@bepsoa",
      isValid: false,
      errorMessages:
        "Password must be at least 8 characters\\nThe password must contain at least 2 numbers\\npassword must contain at least one capital letter",
    },
    {
      condition: "if multiple validation errors",
      password: "abepsoa",
      isValid: false,
      errorMessages:
        "Password must be at least 8 characters\\nThe password must contain at least 2 numbers\\npassword must contain at least one capital letter\\npassword must contain at least one special character",
    },
  ])("it should verify $condition: $password -> $isValid : $errorMessages", (cases) => {
    // Arrange
    const { password, isValid, errorMessages } = cases;

    // Act
    const result: IResult = passwordValidation(password);

    // Assert
    expect(result.isValid).toEqual(isValid);
    expect(result.errorMessages).toEqual(errorMessages);
  });
});
