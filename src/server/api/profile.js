import * as constants from "constants/paths";
import axios from 'axios';

export const getProfileById = (idProfile) => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.USER_PROFILE}/${idProfile}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
)

export const updateUserProfile = (data) => (
    new Promise((resolve, reject) => {
        axios.put(`${constants.PUT_USER_PROFILE}`, data)
            .then(_ => resolve(_))
            .catch(err => reject(err))
    })
)