import { REGISTER_USER, REGISTER_USER_SUCCESSFUL, API_FAILED, EMPTY_ERROR,CONFIRM_MAIL,CONFIRM_SUCCESS,CONFIRM_ERROR } from './actionTypes';

export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        payload: { user }
    }
}

export const registerUserSuccessful = (user) => {
    return {
        type: REGISTER_USER_SUCCESSFUL,
        payload: user
    }
}

export const apiError = (error) => {
    return {
        type: API_FAILED,
        payload: error
    }
}

export const emptyError = () => {
    return {
        type: EMPTY_ERROR
    }
}

export const confirmMail = (token,userId) => {
    return {
        type: CONFIRM_MAIL,
        payload: { userId,token }
    }
}

export const confirmSuccess = (user) => {
    return {
        type: CONFIRM_SUCCESS,
        payload: { user }
    }
}

export const confirmError = (error) => {
    return {
        type: CONFIRM_ERROR,
        payload: error
    }
}

const postRegister = (data, history) => async (dispatch) => {
    try {
        console.log("Check", data);
        console.log("Check", data.name, data.password);
        dispatch(registerUser(data.name, data.email, data.password, data.phone, history));

        // const responseData = await AuthService.postLogin(data);

        // let token = responseData.headers.authorization.replace("Bearer ","");
        // let user = jwt(token)
        // user.token = token;
        
        // AuthHelpers.setLoggedInUser(user);
        
        // console.log("Response after login", user);

        // AuthHelpers.setLoggedInUser(user);
        // dispatch(loginUserSuccessful(user));
        // history.push('/');

    } catch(message) {
        dispatch(apiError(message))
    };
}

export { postRegister };