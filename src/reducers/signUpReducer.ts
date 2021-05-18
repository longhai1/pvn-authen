export type signUpState = {
    isLoading: boolean;
    isLoggedIn: boolean;
    error: string;
}

const initState = {
    isLoading: false,
    isLoggedIn: false,
    error: '',
};
  
const signUpReducer = (state : signUpState = initState, type : string) => {
    console.log(`signUpReducer type: ${type}`);
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
          isLoggedIn: true,
          error: ""
        };
      case "SIGNUP_FAILURE":
        return {
          ...state,
          isLoading: false,
          error: "Sign up fail"
        };
      default:
        return state;
    }
  };

export default signUpReducer;