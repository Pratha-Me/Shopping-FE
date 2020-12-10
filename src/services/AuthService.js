import Axios from 'axios';
import AxiosService from '../api/AxiosService';

// Login Method
const postLogin = (data) => {
    return AxiosService.login.post('/user/login', data).catch(err => {
        let message;
        if (err.response && err.response.status) {
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

const postForgetPwd= (data) => {
    // TODO change the url
    return AxiosService.login.post('/dummy', data).catch(err => {
        let message;
        if (err.response && err.response.status) {
            switch (err.response.status) {
                case 404: message = "Sorry! the page you are looking for could not be found"; break;
                case 500: message = "Sorry! something went wrong, please contact our support team"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    })
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

// const postVerifyCode = (url, data) => {
//     return axios.post(url, data).then(response => {
//         if (response.status >= 200 || response.status <= 299)
//             return response.data;
//         throw response.data;
//     }).catch(err => {
//         console.log(err);
//         let message;
//         if (err.response && err.response.status ) {
//             console.log(err.response.status);
//             switch (err.response.status) {
//                 case 400: message = "Code doesn't match"; break;
//                 default: message = err[1]; break;
//             }
//         }
//         throw message;
//     });
// }

// const postChangePassword = (url, data) => {
//     return axios.post(url, data).then(response => {
//         if (response.status >= 200 || response.status <= 299)
//             return response.data;
//         throw response.data;
//     }).catch(err => {
//         let message;
//         if (err.response && err.response.status ) {
//             switch (err.response.status) {
//                 case 404: message = "Sorry! the page you are looking for could not be found"; break;
//                 case 500: message = "Sorry! something went wrong, please contact our support team"; break;
//                 case 401: message = "Username or Password is incorrect"; break;
//                 default: message = err[1]; break;
//             }
//         }
//         throw message;
//     });
// }


export { postLogin, postForgetPwd, postRegister }