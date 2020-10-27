import { ENTER_EMAIL, ENTER_EMAIL_ERROR, ENTER_EMAIL_SUCCESS, VERIFY_CODE_ERROR, VERIFY_CODE_SUCCESS, CHANGE_PASSWORD, CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_SUCCESS, VERIFY_CODE, GENERAL_ERROR } from './actionTypes';

const initialState = {
    
    error: null, 
    loading: false,
    step: 1,

}

const forgetPass = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_EMAIL:
            state = {
                ...state,
                loading: true,
            }
            break;
        case ENTER_EMAIL_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                step: 2,
            }
            break;
        case ENTER_EMAIL_ERROR:
            state = {
                ...state,
                loading: false,
                message: action.payload ? action.payload : 'Something went wrong'
            }
            break;
        case VERIFY_CODE:
            state = {
                ...state,
                loading: true,
            }
            break;
        case VERIFY_CODE_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
                step: 3,
            }
            break;
        case VERIFY_CODE_ERROR:
            state = {
                ...state,
                loading: false,
                error: action.payload ? action.payload : 'Something went wrong'
            }
            break;
        case CHANGE_PASSWORD:
            state = {
                ...state,
                loading: true,
            }
            break;
        case CHANGE_PASSWORD_SUCCESS:
            state = {
                ...state,
                loading: false,
                error: null,
            }
            break;
        case CHANGE_PASSWORD_ERROR:
            state = {
                ...state,
                loading: false,
                error: action.payload && action.payload.error ? action.payload.error : 'Something went wrong'
            }
            break;
        case GENERAL_ERROR:
            state = {
                ...state,
                loading :false,
                error : action.payload === 'Resend Code' ? null : action.payload,
                step :  action.payload === 'Resend Code' ? 1 : state.step
            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default forgetPass;