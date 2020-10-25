import { CHECK_LOGIN, LOGIN_USER_SUCCESSFUL, LOGOUT_USER_SUCCESSFUL, API_FAILED } from './actionTypes';
import * as AuthUtils from '../../../services/api/AuthUtils'
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

const postLogin = (data, history) => (dispatch) => {
    console.log("Check", data);
    console.log("Check", data.username, data.password);

    dispatch(checkLogin(data.username, data.password, history));
    AuthUtils.postLogin(data).then(response => {
        if (!response.headers.authorization) {
            throw 'No Authorization Header Found';
        }
        let token = response.headers.authorization.replace("Bearer ", "");
        let user = jwt(token)
        user.token = token;

        console.log("Response after login", user);

        AuthUtils.setLoggedInUser(user);
        dispatch(loginUserSuccessful(user));
        history.push('/');

    }).catch(err => {
        let message;
        if (err.response && err.response.status) {
            switch (err.response.status) {
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 401: message = "Username or Password is incorrect"; break;
                default: message = err[1]; break;
            }
        }
        dispatch(apiError(err))
        throw message;
    });
}

export { postLogin };