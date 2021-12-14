import {passwordInputValidation} from "../src/password-input.validation";
import {IValidation} from "../src/interface.validation";
import {errorMessages} from "../src/errorMessage/errorMessages.enum";

describe('TU password validation', () => {
    test('it should warn me if the password is 7 long', async () => {
        // Arrange
        const password = "1234567";

        // Act
        const validation: IValidation = passwordInputValidation(password);

        // Assert
        expect(validation.errorMessage).toEqual(errorMessages.enoughCharacter);
    });

    test('it should not warn me if the password is 8 long', async () => {
        // Arrange
        const password = "12345678";

        // Act
        const validation: IValidation = passwordInputValidation(password);

        // Assert
        expect(validation.errorMessage).toEqual("");
    });

    test('it should warn me if the password does not contain number', async () => {
        // Arrange
        const password = "abcdefgh";

        // Act
        const validation: IValidation = passwordInputValidation(password);

        // Assert
        expect(validation.errorMessage).toEqual("The password must contain at least 2 numbers");
    });


    test('it should warn me if the password does not contain number', async () => {
        // Arrange
        const password = "abcdefgh2";

        // Act
        const validation: IValidation = passwordInputValidation(password);

        // Assert
        expect(validation.errorMessage).toEqual("The password must contain at least 2 numbers");
    });
});
