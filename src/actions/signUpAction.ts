import { requestParams } from '../services/auth.type';

export const actionSignUp = (payload : requestParams) => ({
  type: 'HANDLE_SIGNUP',
  payload,
});
  
export const signUpSuccess = (payload : requestParams) => ({
  type: 'SIGNUP_SUCCESS',
  payload,
});
  
export const signUpFailure = (payload : requestParams) => ({
  type: 'SIGNUP_FAILURE',
  payload,
});
  
export default {
  actionSignUp,
  signUpSuccess,
  signUpFailure,
};