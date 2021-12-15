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
            const password = "Abcde123";
            const errorMessage = "";
            const isValid = true;

            // Act
            const output: IOutput = passwordValidation(password, errorMessage);

            // Assert
            expect(output.isValid).toEqual(isValid);
            expect(output.errorMessage).toEqual(errorMessage);
        });
    });

    describe('multiple message error', () => {
        test('it should warn me if password are several problems', async () => {
            // Arrange
            const password = "somepassword";
            const errorMessage = "Password must be at least 8 characters\\nThe password must contain at least 2 numbers";
            const isValid = false;

            // Act
            const output: IOutput = passwordValidation(password, errorMessage);

            // Assert
            expect(output.isValid).toEqual(isValid);
            expect(output.errorMessage).toEqual(errorMessage);
        });
    });

    describe('capital letter', () => {
        test('it should warn me if password does not have capital letter', async () => {
            // Arrange
            const password = "somepassw123456";
            const errorMessage = "password must contain at least one capital letter";
            const isValid = false;

            // Act
            const output: IOutput = passwordValidation(password, errorMessage);

            // Assert
            expect(output.isValid).toEqual(isValid);
            expect(output.errorMessage).toEqual(errorMessage);
        });
    });
});
