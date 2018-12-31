import axios from 'axios';
import * as constants from 'constants/paths';

export const getUsers = (pharmaId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${constants.FETCH_USERS}/${pharmaId}`)
        .then(({data}) => resolve(data))
        .catch(err => reject(err))
    })
};

export const getUser = () => (
    new Promise((resolve, reject) => {
        axios.get(constants.FETCH_USERS)
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
);

export const insertUser = (data) => (
    new Promise((resolve, reject) => {
        axios.post(constants.CREATE_AND_UPDATE_USER, data)
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
);

export const updateUser = (data) => (
    new Promise((resolve, reject) => {
        axios.put(constants.CREATE_AND_UPDATE_USER, data)
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
);

export const deleteUser = () => (
    new Promise((resolve, reject) => {
        axios.get(constants.DELETE_USER)
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
);



