import { call, put, select } from 'redux-saga/effects';
import { actionLogin } from '../actions/loginAction';
import request from '../services/auth.service';
import { AsyncStorage } from 'react-native';

function* saveTokenToStore(data : any) {
  yield AsyncStorage.multiSet(
    [['LoginStatus', 'true']],
    err => {
      console.log('ERROR saveTokenToStore: ', err);
    },
  );
}

function* postLoginAction(email : string, password : string) {
  const {response, error} = yield call(request.login, email, password);
  if (response) {
    if (response.data.status === 200) {
      yield put({ type: 'LOGIN_SUCCESS', payload: response.data.data });
      yield call(saveTokenToStore, response.data.data.jwt_token);
    }
  } else if (error) {
    yield put({ type: 'LOGIN_FAILURE', payload: error.response.data.message })
  }
  yield put({ type: 'REMOVE_LOGIN'});
}

export default function*(action : any) {
  yield call(postLoginAction, action.payload.email, action.payload.password);
}