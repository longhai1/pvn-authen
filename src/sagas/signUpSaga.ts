import { call, put } from 'redux-saga/effects';
import request from '../services/auth.service';
import { requestParams } from '../services/auth.type';

function* postSignUpAction(payload: requestParams) {
  const { response, error } = yield call(request.signUp, payload);
  console.log(
    `Sign Up Saga - postSignUpAction: ${payload}`,
  );
  if (response) {
    console.log(response)
    yield put({ type: 'SIGNUP_SUCCESS' });
  } else  {
    console.log(error);
    yield put({ type: 'SIGNUP_FAILURE' });
  }
  yield put({ type: 'REMOVE_SIGNUP' });
}

export default function*(action : any) {
  console.log('Sign Up Saga - Action', action);
  yield call(postSignUpAction, action.payload);
}