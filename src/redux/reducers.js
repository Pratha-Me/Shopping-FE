import { combineReducers  } from 'redux';

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import Forget from './auth/forgetpwd/reducer';
import Shopping from './shopping/reducer'

const rootReducer = combineReducers({

    // Authentication
    Account,
    Login,
    Forget,

    // Cart
    Shopping


});

export default rootReducer;