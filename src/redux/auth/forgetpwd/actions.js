import { ENTER_EMAIL, ENTER_EMAIL_SUCCESS, ENTER_EMAIL_ERROR, VERIFY_CODE, VERIFY_CODE_ERROR, CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR, VERIFY_CODE_SUCCESS, GENERAL_ERROR } from './actionTypes';
import * as AuthService from "../../../services/AuthService";

const enterEmail = (email) => {
    return {
        type: ENTER_EMAIL,
        payload: { email }
    }
}

const enterEmailSuccess = () => {
    return {
        type: ENTER_EMAIL_SUCCESS
    }
}

const enterEmailError = (error) => {
    return {
        type: ENTER_EMAIL_ERROR,
        payload: error
    }
}


const verifyCode = (email, code) => {
    return {
        type: VERIFY_CODE,
        payload: { email, code }
    }
}

const verifyCodeSuccess = () => {
    return {
        type: VERIFY_CODE_SUCCESS
    }
}

const verifyCodeError = (error) => {
    return {
        type: VERIFY_CODE_ERROR,
        payload: error
    }
}

const changePassword = (email, code, newPassword, history) => {
    return {
        type: CHANGE_PASSWORD,
        payload: { email, code, newPassword, history }
    }
}

const changePasswordSuccess = () => {
    return {
        type: CHANGE_PASSWORD_SUCCESS
    }
}

const changePasswordError = (error) => {
    return {
        type: CHANGE_PASSWORD_ERROR,
        payload: error
    }
}

const putGeneralError = (message) => {
    return {
        type : GENERAL_ERROR,
        payload: message
    }
}

export const forgetPwd = (data) => async (dispatch) => {
    try {
        console.log("Check Actions", data);
        dispatch(enterEmail(data.email));
        const responseData = await AuthService.postForgetPwd(data);

        console.log("Response after login", responseData.status);

        dispatch(enterEmailSuccess());
    } catch(message) {
        dispatch(enterEmailError(message))
    };
}