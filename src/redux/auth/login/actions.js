import { CHECK_LOGIN, LOGIN_USER_SUCCESSFUL, LOGOUT_USER_SUCCESSFUL, API_FAILED } from './actionTypes';
<<<<<<< Updated upstream:src/store/auth/login/actions.js
import * as AuthUtils from '../../../services/api/AuthUtils'
=======
import * as AuthHelpers from '../../../helpers/AuthHelpers'
import * as AuthService from '../../../services/AuthService'
import jwt from 'jwt-decode';
import { error } from 'jquery';
>>>>>>> Stashed changes:src/redux/auth/login/actions.js

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
    try {
        console.log("Check", data);
        console.log("Check", data.username, data.password);
        dispatch(checkLogin(data.username, data.password, history));

        const responseData = AuthUtils.postLogin(data);
        AuthUtils.setLoggedInUser(responseData);
        
        console.log("Response after login", responseData);

        dispatch(loginUserSuccessful(responseData));
        history.push('/');
<<<<<<< Updated upstream:src/store/auth/login/actions.js
    } catch (error) {
        dispatch(apiError(error))
        console.log(error);
    }
=======

    }).catch(err => {
        dispatch(apiError(err))
        console.log("I am here", err);
    });
>>>>>>> Stashed changes:src/redux/auth/login/actions.js
}

export {postLogin};