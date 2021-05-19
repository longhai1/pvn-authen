type ActionPayload = {
  type: string;
  payload: any;
}

export type signUpState = {
    isLoading: boolean;
    isSignedUp: boolean;
    error: string;
}

const initState = {
    isLoading: false,
    isSignedUp: false,
    error: '',
};
  
const signUpReducer = (state : signUpState = initState, { type, payload } : ActionPayload) => {
  console.log(`signUpReducer type: ${type} with payload: ${payload}`);
    switch (type) {
      case "HANDLE_SIGNUP":
        return {
          ...state,
          isLoading: true
        };
      case "SIGNUP_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isSignedUp: true,
          error: ""
        };
      case "SIGNUP_FAILURE":
        return {
          ...state,
          isLoading: false,
          error: payload
        };
      case "REMOVE_SIGNUP": 
        return {
          ...state,
          isSignedUp: false
        }
      default:
        return state;
    }
  };

export default signUpReducer;