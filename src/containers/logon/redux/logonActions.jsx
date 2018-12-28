import axios from "axios";
import * as api from "../../../constants/apiBase";

const token = localStorage.getItem("token");

const saveSession = (response) => {
  localStorage.setItem("token", response.accessToken);
  localStorage.setItem("user", response.login);
  localStorage.setItem("farmaciaId", response.farmaciaId);
  localStorage.setItem("perfilId", response.perfilId);
  setAuthToken(response.accessToken);
}

const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

if(token){
  setAuthToken(token);
}

export const loginAction = (user, pass) => async dispatch => {
  dispatch({ type: "SET_LOADING_LOGIN", loading:true});

  axios.post(`${api.SIGNIN_USERS}`, {Login: user, Senha: pass}).then(response => {
      const {emailConfirmado} = response.data;

      saveSession(response.data);

      if(emailConfirmado){
        dispatch({type:"SUCCESS_LOGIN"});
      }
    }).catch(() => {
      dispatch({type:"ERROR_LOGIN"});
    });
};

export const logoutAction = () => async dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("farmaciaId");
  localStorage.removeItem("perfilId");

  setAuthToken(null);

  dispatch({type:"SUCCESS_LOGOUT"});
}

export const registerAction = (payload) => async dispatch => {
  dispatch({ type: "SET_LOADING_REGISTER", loading:true});

  // 
}