import {passwordValidation, Result} from "../src/passwordValidation";

describe('Password Validation', () => {
    test.each([
        {
            password: "A1@4cf78",
            isValid: true,
            error: ""
        },
        {
            password: "A1@4cf7",
            isValid: false,
            error: "Password must be at least 8 characters"
        },
        {
            password: "AU@QcfSH",
            isValid: false,
            error: "The password must contain at least 2 numbers"
        },
        {
            password: "A1@QcfSH",
            isValid: false,
            error: "The password must contain at least 2 numbers"
        },
        {
            password: "A1@QcfS",
            isValid: false,
            error: "Password must be at least 8 characters\nThe password must contain at least 2 numbers"
        },
        {
            password: "a1@4cf78",
            isValid: false,
            error: "password must contain at least one capital letter"
        },
        {
            password: "A1a4cf78",
            isValid: false,
            error: "password must contain at least one special character"
        },
        {
            password: "A1a4_f78",
            isValid: true,
            error: ""
        }
    ])('it should check password $password : $isValid "$error"', (cases) => {
        // Arrange
        const {password, isValid, error} = cases;
        const expectedResult: Result = {
            isValid,
            error
        };

        // Act
        const result: Result = passwordValidation(password);

        // Assert
        expect(result).toEqual(expectedResult);
    });
});
