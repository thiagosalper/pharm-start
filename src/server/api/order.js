import axios from "axios";
import * as constants from "constants/paths";

export const getOrder = (idBudget) => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.GET_ORDER_PAGE}/${idBudget}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
);

export const updateAddressClient = (data) => (
    new Promise((resolve, reject) => {
        axios.post(`${constants.UPDATE_ADDRESS_CLIENT}`, data)
            .then(_ => resolve(_))
            .catch(err => reject(err))
    })
);

export const closeOrder = (data) => (
    new Promise((resolve, reject) => {
        axios.post(`${constants.POST_ORDER_PAGE}`, data)
            .then(_ => resolve(_))
            .catch(err => reject(err))
    })
)

