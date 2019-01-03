import axios from "axios";
import * as constants from "constants/paths";

export const getOrcamentosChamado = idChamado =>
  new Promise((resolve, reject) => {
    axios
      .get(`${constants.BUDGET_PAGE}/${idChamado}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  });

export const confirmOrcamento = (idOrcamento, clientEmail) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${constants.BUDGET_EMAIL}/${idOrcamento}/${clientEmail}`)
      .then(({ data }) => resolve(data))
      .reject(err => reject(err));
  });

export const getOrcamentoBudget = idChamado =>
  new Promise((resolve, reject) => {
    axios
      .get(`${constants.REQUEST_BUDGET}/${idChamado}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err));
  });

export const createBudget = data => {
  new Promise((resolve, reject) => {
    axios
      .post(`${constants.CREATE_BUDGET}`, data)
      .then(_ => resolve(_))
      .reject(err => reject(err));
  });
};

export const removeBudget = (idBudget = '') => {
  new Promise((resolve, reject) => {
    axios
      .delete(`${constants.REMOVE_BUDGET}/${idBudget}`)
      .then(({ data }) => resolve(data))
      .reject(err => reject(err));
  });
};
