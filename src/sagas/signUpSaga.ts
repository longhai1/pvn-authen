import { call, put } from 'redux-saga/effects';
import request from '../services/auth.service';
import { AsyncStorage } from 'react-native';

function* saveStatusToStore() {
  yield AsyncStorage.multiSet(
    [['LoginStatus', 'true']],
    err => {
      console.log('ERROR saving status: ', err);
    },
  );
}

function* postSignUpAction(payload: any) {
    const response = yield call(request.signUp, payload);
    console.log(
      `Sign Up Saga - postSignUpAction: ${payload}`,
    );
  if (response.data.status === 200) {
    yield put({ type: 'SIGNUP_SUCCESS' });
    yield call(saveStatusToStore);
  } else  {
    yield put({ type: 'SIGNUP_FAILURE' })
  }
}

export default function*(action : any) {
  console.log('Sign Up Saga - Action', action);
  yield call(postSignUpAction, action.payload);
}