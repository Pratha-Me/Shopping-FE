import axios from 'axios';
import AxiosService from './AxiosService';
import jwt from 'jwt-decode';

//Set the logged in user data in local session 
const setLoggedInUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

// Gets the logged in user data from local session 
const getLoggedInUser = () => {
    const user = localStorage.getItem('user');
    if (user)
        return JSON.parse(user);
    return null;
}

const getAuthUser = () => {
    let user = localStorage.getItem('user');
    if (user){
        user = JSON.parse(user);
        user = jwt(user.token);
        return user;
    }
    return null;
}

//is user is logged in
const isUserAuthenticated = () => {
    let user = getLoggedInUser();
    if(!user || !user.token)
        return false;

    user = jwt(user.token);

    if(user && user.exp){
        if (Date.now() >= user.exp * 1000) {
            return false;
        }
        return true;
    }
    return false;
}

const getHeaders = ()=>{
    const user = getLoggedInUser();
    let headers = {};
    if(user && user.token){
        headers.Authorization = 'Bearer '+ user.token
    }
    return headers;
}

// Register Method
const postRegister = (data) => {
    return AxiosService.login.post('/auth/register', data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        let message;
        if (err.response && err.response.status ) {
            switch (err.response.status) {
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 401: message = "Invalid credentials"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });

}

// Login Method
const postLogin = (data) => {
    return AxiosService.login.post('/user/login', data).then(response => {
        if(!response.headers.authorization){
            throw 'No Authorization Header Found';
        }
        let token = response.headers.authorization.replace("Bearer ","");
        let user = jwt(token)
        user.token = token;
        return user;

    }).catch(err => {
        let message;
        if (err.response && err.response.status ) {
            switch (err.response.status) {
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 401: message = "Username or Password is incorrect"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });
}

// postForgetPwd 
const postForgetPwd = (data) => {
    return axios.post('Look at the postman or the backend code and put an url here', data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        let message;
        if (err.response && err.response.status ) {
            switch (err.response.status) {
                case 400: message = "Unable to send verification code in that email"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });
}

/*
const postVerifyCode = (url, data) => {
    return axios.post(url, data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        console.log(err);
        let message;
        if (err.response && err.response.status ) {
            console.log(err.response.status);
            switch (err.response.status) {
                case 400: message = "Code doesn't match"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });
}

const postChangePassword = (url, data) => {
    return axios.post(url, data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        let message;
        if (err.response && err.response.status ) {
            switch (err.response.status) {
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                case 401: message = "Username or Password is incorrect"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });
}
*/

export { setLoggedInUser, getLoggedInUser, getAuthUser, isUserAuthenticated, getHeaders, postRegister, postLogin, postForgetPwd }