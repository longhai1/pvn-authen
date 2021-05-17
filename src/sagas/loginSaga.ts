import { call, put, select } from 'redux-saga/effects';
import { actionLogin } from '../actions/loginAction';
import request from '../services/auth.service';
import { AsyncStorage } from 'react-native';

function* saveTokenToStore(data : any) {
  yield AsyncStorage.multiSet(
    [['JwtToken', data.jwt_token], ['LoginStatus', 'true']],
    err => {
      console.log('ERROR saveTokenToStore: ', err);
    },
  );
}

function* postLoginAction(email : string, password : string) {
    const response = yield call(request.login, email, password);
    console.log(
      `Login Saga - postLoginAction: username: ${email} - password: ${password}`,
    );
  if (response.data.status === 200) {
    yield put({ type: 'LOGIN_SUCCESS', payload: response.data.data });
    yield call(saveTokenToStore, response.data.data.jwt_token);
  } else  {
    yield put({ type: 'LOGIN_FAILURE', payload: response.data.status })
  }
}

export default function*(action : any) {
  console.log('Login Saga - Action', action);
  yield call(postLoginAction, action.payload.email, action.payload.password);
}