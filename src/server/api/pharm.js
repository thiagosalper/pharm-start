import * as constants from "constants/paths";
import axios from 'axios';

export const getPharma = (idFarmacia) => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.GET_PHARM}/${idFarmacia}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
)

export const updatePharma = (data) => (
    new Promise((resolve, reject) => {
        axios.put(`${constants.GET_PHARM}/`, data)
            .then(_ => resolve(_))
            .catch(err => reject(err))
    })
);