import { ENTER_EMAIL, ENTER_EMAIL_SUCCESS, ENTER_EMAIL_ERROR, VERIFY_CODE, VERIFY_CODE_ERROR, CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR, VERIFY_CODE_SUCCESS, GENERAL_ERROR } from './actionTypes';

export const enterEmail = (email) => {
    return {
        type: ENTER_EMAIL,
        payload: { email }
    }
}

export const enterEmailSuccess = () => {
    return {
        type: ENTER_EMAIL_SUCCESS
    }
}

export const enterEmailError = (error) => {
    return {
        type: ENTER_EMAIL_ERROR,
        payload: error
    }
}


export const verifyCode = (email, code) => {
    return {
        type: VERIFY_CODE,
        payload: { email, code }
    }
}

export const verifyCodeSuccess = () => {
    return {
        type: VERIFY_CODE_SUCCESS
    }
}

export const verifyCodeError = (error) => {
    return {
        type: VERIFY_CODE_ERROR,
        payload: error
    }
}

export const changePassword = (email, code, newPassword, history) => {
    return {
        type: CHANGE_PASSWORD,
        payload: { email, code, newPassword, history }
    }
}

export const changePasswordSuccess = () => {
    return {
        type: CHANGE_PASSWORD_SUCCESS
    }
}

export const changePasswordError = (error) => {
    return {
        type: CHANGE_PASSWORD_ERROR,
        payload: error
    }
}

export const putGeneralError = (message) => {
    return {
        type : GENERAL_ERROR,
        payload: message
    }
}