import { combineReducers  } from 'redux';

// Authentication Module
import Account from './auth/register/reducer';
import Login from './auth/login/reducer';
import Forget from './auth/forgetpwd/reducer';

const rootReducer = combineReducers({

    // Authentication
    Account,
    Login,
    Forget

});

export default rootReducer;