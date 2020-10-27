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

export { setLoggedInUser, getLoggedInUser, getAuthUser, isUserAuthenticated, getHeaders }