import { fork, all, takeLatest, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import signUpSaga from './signUpSaga';

const sagas = function*() {
  yield all([
    takeLatest('HANDLE_LOGIN', loginSaga),
    takeLatest('HANDLE_SIGNUP', signUpSaga)
  ]);
};

export default sagas;