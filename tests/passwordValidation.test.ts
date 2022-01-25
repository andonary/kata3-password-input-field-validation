import { passwordValidation } from "../src/passwordValidation";

describe("Password validation", () => {
  it("should valid password", async () => {
    expect(passwordValidation("1De4çs7H")).toEqual({
      isValid: true,
      message: "",
    });
    expect(passwordValidation("1De4çs7")).toEqual({
      isValid: false,
      message: "Password must be at least 8 characters",
    });
    expect(passwordValidation("UDeQçsSH")).toEqual({
      isValid: false,
      message: "The password must contain at least 2 numbers",
    });
    expect(passwordValidation("1DeQçsSH")).toEqual({
      isValid: false,
      message: "The password must contain at least 2 numbers",
    });
    expect(passwordValidation("1DeQçsS")).toEqual({
      isValid: false,
      message: "Password must be at least 8 characters\nThe password must contain at least 2 numbers",
    });
    expect(passwordValidation("ude4çs7h")).toEqual({
      isValid: false,
      message: "password must contain at least one capital letter",
    });
    expect(passwordValidation("1De4cs7H")).toEqual({
      isValid: false,
      message: "password must contain at least one special character",
    });
    expect(passwordValidation("1De4_s7H")).toEqual({
      isValid: true,
      message: "",
    });
  });
});
