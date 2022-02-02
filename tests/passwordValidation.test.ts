import { passwordValidation } from "../src/passwordValidation";

describe("password validation", () => {
  test("it should valid my password", async () => {
    expect(passwordValidation("A2c4çs78")).toEqual({ isValid: true, message: "" });
    expect(passwordValidation("A2c4çs7")).toEqual({
      isValid: false,
      message: "Password must be at least 8 characters",
    });
    expect(passwordValidation("AdcqçsSH")).toEqual({
      isValid: false,
      message: "The password must contain at least 2 numbers",
    });
    expect(passwordValidation("A2cqçsSH")).toEqual({
      isValid: false,
      message: "The password must contain at least 2 numbers",
    });
    expect(passwordValidation("A2c4çsSH")).toEqual({
      isValid: true,
      message: "",
    });
    expect(passwordValidation("A2cQçsS")).toEqual({
      isValid: false,
      message: "Password must be at least 8 characters\nThe password must contain at least 2 numbers",
    });
    expect(passwordValidation("a2c4çs78")).toEqual({
      isValid: false,
      message: "password must contain at least one capital letter",
    });
    expect(passwordValidation("A2c4cs78")).toEqual({
      isValid: false,
      message: "password must contain at least one special character",
    });
    expect(passwordValidation("A2c4_s78")).toEqual({
      isValid: true,
      message: "",
    });
  });
});
