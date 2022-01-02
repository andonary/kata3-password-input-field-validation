import {passwordValidation} from "../src/passwordValidation";

describe('Password Validation', () => {
    test.each([
        {
            password: "Ab3#5op8",
            isValid: true,
            error: ""
        },
        {
            password: "Ab3#5op",
            isValid: false,
            error: "Password must be at least 8 characters"
        },
        {
            password: "AbE#SopB",
            isValid: false,
            error: "The password must contain at least 2 numbers"
        },
        {
            password: "Ab3#SopB",
            isValid: false,
            error: "The password must contain at least 2 numbers"
        },
        {
            password: "Ab3#Sop",
            isValid: false,
            error: "Password must be at least 8 characters\\nThe password must contain at least 2 numbers"
        },
        {
            password: "ab3#5op8",
            isValid: false,
            error: "password must contain at least one capital letter"
        },
        {
            password: "Ab3D5op8",
            isValid: false,
            error: "password must contain at least one special character"
        },
        {
            password: "Ab3_5op8",
            isValid: true,
            error: ""
        }
    ])('with "$password" it should be $isValid with message: "$error"', async (cases) => {
        // Arrange
        const {password, isValid, error} = cases;

        // Act
        const result = passwordValidation(password);

        // Assert
        expect(result).toEqual({isValid, error});
    });
});
