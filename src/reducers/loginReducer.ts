type ActionPayload = {
    type: string;
    payload: any;
}

export type loginState = {
    jwtToken: string;
    isLoading: boolean;
    isLoggedIn: boolean;
    error: string;
}

const initState = {
    jwtToken: '',
    isLoading: false,
    isLoggedIn: false,
    error: '',
};
  
const loginReducer = (state : loginState = initState, { type , payload } : ActionPayload) => {
    console.log(`loginReducer type: ${type} with payload: ${payload}`);
    switch (type) {
      case "HANDLE_LOGIN":
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          jwtToken: payload.jwt_token,
          isLoading: false,
          isLoggedIn: true,
          error: ""
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          isLoading: false,
          error: payload
        };
      case "REMOVE_LOGIN": 
        return {
          ...state,
          isLoading: false
        }
      case "LOGOUT": 
        return {
          ...state, 
          initState
        }
      default:
        return state;
    }
  };

export default loginReducer;