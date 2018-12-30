import * as constants from "constants/paths";
import axios from 'axios';

export const getUf = () => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.GET_UF}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err));
    })
);

export const getCities = (idUf) => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.GET_CITIES}/${idUf}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
);

export const getAddressByCep = cep => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.GET_ADDRESS_BY_CEP_URL}/${cep}`)
            .then(response => resolve(response))
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.headers);
                }
                else if (error.request) {
                    console.log(error.request);
                }
                else {
                    console.log(error.message);
                }
                console.log(error.config);
                reject(error)
            });
    })
)