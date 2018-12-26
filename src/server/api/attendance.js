import * as constants from "constants/paths";
import axios from 'axios';

export const getResumoChamadoFarmacia = (idFarmacia = '') => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.ATTENDANCE_PAGE}/${idFarmacia}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
);

export const getDetalhesChamado = (idChamado = '') => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.ATTENDANCE_DETAILS}/${idChamado}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
);

export const getAllStatus = () => (
    new Promise((resolve, reject) => {
        axios.get(`${constants.STATUS_LIST}`)
            .then(({ data }) => resolve(data))
            .catch(err => reject(err))
    })
);


