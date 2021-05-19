import { call, put } from 'redux-saga/effects';
import request from '../services/auth.service';
import { requestParams } from '../services/auth.type';

function* postSignUpAction(payload: requestParams) {
  const { response, error } = yield call(request.signUp, payload);
  if (response) {
    if (response.data.status === 200) {
      yield put({ type: 'SIGNUP_SUCCESS' });
    }
  } else if (error) {
    yield put({ type: 'SIGNUP_FAILURE', payload: error.response.data.message });
  }
  yield put({ type: 'REMOVE_SIGNUP' });
}

export default function*(action : any) {
  yield call(postSignUpAction, action.payload);
}