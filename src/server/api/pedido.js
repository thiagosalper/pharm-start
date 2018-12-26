import axios from "axios";
import * as constants from "constants/paths";

export const getPedidos = (idFarmacia) => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.GET_PEDIDOS}/${idFarmacia}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
);

export const getApiStatusList = () => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.STATUS_LIST_PEDIDO}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
);
