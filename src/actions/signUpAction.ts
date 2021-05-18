export const actionSignUp = (payload : any) => ({
    type: 'HANDLE_SIGNUP',
    payload,
  });
  
  export const signUpSuccess = (payload : any) => ({
    type: 'SIGNUP_SUCCESS',
    payload,
  });
  
  export const signUpFailure = (payload : any) => ({
    type: 'SIGNUP_FAILURE',
    payload,
  });
  
  export default {
    actionSignUp,
    signUpSuccess,
    signUpFailure,
  };