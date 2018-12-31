import * as UserAPI from '../server/api/user';
import * as types from '../constants/apiBase';

export const updateUser = (data = {}) => async dispatch => {
    dispatch({ type: types.UPDATE_USER_REQUEST })
    UserAPI.updateUser(data)
        .then(() => dispatch({ types: types.UPDATE_USER_SUCCESS }))
        .catch(() => dispatch({ types: types.UPDATE_USER_FAILURE }))
};

export const getCurrentUser = () => async dispatch => {
    dispatch({ type: types.GET_CURRENT_USER_REQUEST })
    const data = localStorage.getItem("farmaciaId");
    if (data) {
        dispatch({ type: types.GET_CURRENT_USER_FAILURE })
    } else {
        dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: data })
    }
}

export const createUser = (data) => async dispatch => {
    dispatch({ type: constants.GET_CREATE_USER_REQUEST })
    UserAPI.insertUser(data)
        .then((payload) => dispatch({ type: constants.GET_CREATE_USER_SUCCESS, payload }))
        .catch(err => {
            dispatch({ type: types.GET_CREATE_USER_FAILURE })
            console.warn(err)
        })
}

export const getUsers = () => async dispatch => {
    dispatch({ type: constants.FETCH_USERS_REQUEST });
    const pharmaId = localStorage.getItem("farmaciaId");
    UserAPI.getUsers(pharmaId)
        .then(payload => dispatch({ type: constants.FETCH_USERS_SUCCESS, payload }))
        .catch(err => dispatch({ type: constants.FETCH_USERS_FAILURE, payload: err }))
}