import { takeEvery, fork, put, all, call, take } from 'redux-saga/effects';

// Login Redux States
import { ENTER_EMAIL,FORGET_USER,CHANGE_PASSWORD, VERIFY_CODE, GENERAL_ERROR } from './actionTypes';

// AUTH related methods
import { postForgetPwd, postVerifyCode, postChangePassword } from '../../../helpers/authUtils';
import { enterEmailError, verifyCodeError, changePasswordError, verifyCodeSuccess, enterEmailSuccess, changePasswordSuccess, checkLogin } from '../../actions';
import { putGeneralError } from './actions';

//If user is login then dispatch redux action's are directly from here.
function* enterEmail({ payload: { email } }) {
        try {
            yield call(postForgetPwd, 'http://localhost:8080/auth/forget-password', {email: email});
            yield put(enterEmailSuccess());
        } catch (error) {
            yield put(enterEmailError(error));
        }
}

function* verifyCode({ payload: { email, code } }) {
    try {
        yield call(postVerifyCode, 'http://localhost:8080/auth/forget-password/verify', {email: email, code: code});
        yield put(verifyCodeSuccess());
    } catch (error) {
        yield put(verifyCodeError(error));
    }
}

function* changePassword({ payload: { email: email, code:code, newPassword:newPassword, history: history} }) {
    try {
        yield call(postChangePassword, 'http://localhost:8080/auth/forget-password/change', {email: email, code: code, newPassword: newPassword});
        yield put(changePasswordSuccess());
        yield put(checkLogin(email, newPassword, history));
    } catch (error) {
        yield put(changePasswordError(error));
    }
}

function* generalError({payload: {message: message}}) {
    yield setTimeout(put(putGeneralError(message)),100);
}

export function* watchEnterEmail() {
    yield takeEvery(ENTER_EMAIL, enterEmail);
}

export function* watchVerifyCode() {
    yield takeEvery(VERIFY_CODE, verifyCode);
}

export function* watchChangePassword() {
    yield takeEvery(CHANGE_PASSWORD, changePassword);
}

export function* watchGeneralError() {
    yield takeEvery(GENERAL_ERROR, generalError);
}

export default function* forgetPassSaga() {
    yield all([fork(watchEnterEmail),fork(watchVerifyCode), fork(watchChangePassword), fork(watchGeneralError)]);
}
