import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signUp: signUpReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;