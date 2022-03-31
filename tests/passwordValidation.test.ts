import { checkPassword } from '../src/checkPassword'

describe('Password Validation', () => {
    test('it should verify my password', () => {
        expect(checkPassword('A2t4$s7')).toEqual({
            isValid: false,
            msg: 'Password must be at least 8 characters',
        })

        expect(checkPassword('A2t4$s78')).toEqual({
            isValid: true,
            msg: '',
        })

        expect(checkPassword('Adtq$sSH')).toEqual({
            isValid: false,
            msg: 'Password must contain at least 2 numbers',
        })
        expect(checkPassword('A2tq$sSH')).toEqual({
            isValid: false,
            msg: 'Password must contain at least 2 numbers',
        })
        expect(checkPassword('A2tq$s7H')).toEqual({
            isValid: true,
            msg: '',
        })

        expect(checkPassword('A2tq$sS')).toEqual({
            isValid: false,
            msg: 'Password must be at least 8 characters\nPassword must contain at least 2 numbers',
        })

        expect(checkPassword('a2tq$s7h')).toEqual({
            isValid: false,
            msg: 'Password must contain at least one capital letter',
        })

        expect(checkPassword('A2tqSs7h')).toEqual({
            isValid: false,
            msg: 'Password must contain at least one special character',
        })
    })
})
