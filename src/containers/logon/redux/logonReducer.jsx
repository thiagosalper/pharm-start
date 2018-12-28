const initialState = {
  authorized: false, 
  loadingLogin: false, 
  loadingRegister:false, 
  loadingReset:false,

  errorLogin: false
};

const logon = (state = initialState, action) => {
  switch(action.type){
    case "SET_LOADING_LOGIN":
      return {
        ...state, 
        loadingLogin: action.loading
      };
    case "SET_LOADING_REGISTER":
      return {
        ...state, 
        loadingRegister: action.loading
      };
    case "SET_LOADING_RESET":
      return {
        ...state, 
        loadingReset: action.loading
      };
    case "ERROR_LOGIN":
      return {
        ...state,
        loadingLogin: false,
        errorLogin: true
      }
    case "SUCCESS_LOGIN":
      return {
        ...state, 
        authorized:true, 
        loadingLogin:false,
        errorLogin:false
      }
    case "SUCCESS_LOGOUT":
      return {
        ...state, 
        authorized:false
      }

    default: {
      return {
        ...state
      };
    }
  }
};

export default logon;