import { CHECK_LOGIN, LOGIN_USER_SUCCESSFUL, LOGOUT_USER_SUCCESSFUL, API_FAILED } from './actionTypes';
import * as AuthService from "../../../services/AuthService";
import * as AuthHelpers from "../../../helpers/AuthHelpers";
import jwt from 'jwt-decode';

const checkLogin = (username, password, history) => {
    return {
        type: CHECK_LOGIN,
        payload: { username, password, history }
    }
}

const loginUserSuccessful = (user) => {
    return {
        type: LOGIN_USER_SUCCESSFUL,
        payload: user
    }
}

const logoutUserSuccessful = () => {
    return {
        type: LOGOUT_USER_SUCCESSFUL,
    }
}

const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

const postLogin = (data, history) => async (dispatch) => {
    try {
        console.log("Check", data);
        console.log("Check", data.username, data.password);
        dispatch(checkLogin(data.username, data.password, history));

        const responseData = await AuthService.postLogin(data);

        let token = responseData.headers.authorization.replace("Bearer ","");
        let user = jwt(token)
        user.token = token;
        
        AuthHelpers.setLoggedInUser(user);
        
        console.log("Response after login", user);

        AuthHelpers.setLoggedInUser(user);
        dispatch(loginUserSuccessful(user));
        history.push('/');

    } catch(message) {
        dispatch(apiError(message))
    };
}

export { postLogin };