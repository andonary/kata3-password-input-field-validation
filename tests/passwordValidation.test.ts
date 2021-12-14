import {IOutput, passwordValidation} from "../src/passwordValidation";

describe('TU password validation', () => {
    test('it should not allow an empty password', async () => {
        // Arrange
        const password = "";
        const errorMessage = "Password must be at least 8 characters";
        const isValid = false;

        // Act
        const output: IOutput = passwordValidation(password, errorMessage);

        // Assert
        expect(output.isValid).toEqual(isValid);
        expect(output.errorMessage).toEqual(errorMessage);
    });

    describe('enough length', () => {
        test('it should allow a password long enough', async () => {
            // Arrange
            const password = "abcdefgh";
            const errorMessage = "";
            const isValid = true;

            // Act
            const output: IOutput = passwordValidation(password, errorMessage);

            // Assert
            expect(output.isValid).toEqual(isValid);
            expect(output.errorMessage).toEqual(errorMessage);
        });
    });

    describe('enough number', () => {
        test('it should allow a password with enough number inside', async () => {
            // Arrange
            const password = "abcdefg3";
            const errorMessage = "The password must contain at least 2 numbers";
            const isValid = false;

            // Act
            const output: IOutput = passwordValidation(password, errorMessage);

            // Assert
            expect(output.isValid).toEqual(isValid);
            expect(output.errorMessage).toEqual(errorMessage);
        });
    });
});
