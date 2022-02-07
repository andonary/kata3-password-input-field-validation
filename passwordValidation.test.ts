import { Validate } from "./validate";

describe("PasswordValidation", () => {
  it("should validate my password", function () {
    expect(Validate("Ab3q5$s8")).toEqual({ isValid: true, message: "" });
    expect(Validate("Ab3q5$s")).toEqual({ isValid: false, message: "Password must be at least 8 characters" });
    expect(Validate("AbTqC$sH")).toEqual({ isValid: false, message: "The password must contain at least 2 numbers" });
    expect(Validate("Ab3qC$sH")).toEqual({ isValid: false, message: "The password must contain at least 2 numbers" });
    expect(Validate("Ab3q5$sH")).toEqual({ isValid: true, message: "" });
    expect(Validate("Ab34T$sH")).toEqual({ isValid: true, message: "" });
    expect(Validate("Ab3qC$s")).toEqual({
      isValid: false,
      message: "Password must be at least 8 characters\nThe password must contain at least 2 numbers",
    });
    expect(Validate("ab3q5$s8")).toEqual({
      isValid: false,
      message: "password must contain at least one capital letter",
    });
    expect(Validate("Ab3q5ss8")).toEqual({
      isValid: false,
      message: "password must contain at least one special character",
    });
    expect(Validate("Ab3q5_s8")).toEqual({ isValid: true, message: "" });
  });
});
