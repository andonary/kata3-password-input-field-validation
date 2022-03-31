import { checkPassword } from "../src/checkPassword";

describe("Password Validation", () => {
  test("it should throw an error", async () => {
    expect(() => checkPassword("")).toThrow("Password must be at least 8 characters");
  });
});
