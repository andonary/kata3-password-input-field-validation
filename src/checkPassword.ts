function errorMessage(errorMsg: string, msg: string) {
    if (msg.length) msg += '\n'
    msg += errorMsg
    return msg
}

export function checkPassword(input: string) {
    let msg = ''
    let isValid: boolean

    if (input.length < 8)
        msg = errorMessage('Password must be at least 8 characters', msg)
    if (input.replaceAll(/\D/g, '').length < 2)
        msg = errorMessage('Password must contain at least 2 numbers', msg)
    if (input.replaceAll(/[^A-Z]/g, '').length < 1)
        msg = errorMessage(
            'Password must contain at least one capital' + ' letter',
            msg
        )
    if (input.replaceAll(/\w/g, '').length < 1)
        msg = errorMessage(
            'Password must contain at least one special character',
            msg
        )

    isValid = msg.length === 0
    return {
        isValid,
        msg,
    }
}
