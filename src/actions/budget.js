import * as BudgetAPI from '../server/api/budget';
import * as types from '../constants/apiBase/apiBase';

export const getBudgetSummaryByServiceCallId = (serviceCallId = '') => async dispatch => {
    dispatch({ type: types.BUDGET_PAGE_REQUEST });
    BudgetAPI.getOrcamentosChamado(serviceCallId)
        .then(payload => dispatch({ type: types.BUDGET_PAGE_SUCCESS, payload }))
        .catch(() => dispatch({ type: types.BUDGET_PAGE_FAILURE }))
}

export const sendConfirmationEmail = (orcamentoId = '', clientEmail = '') => async dispatch => {
    dispatch({ type: types.BUDGET_EMAIL_REQUEST })
    BudgetAPI.confirmOrcamento(orcamentoId, clientEmail)
        .then(payload => dispatch({ type: types.BUDGET_EMAIL_SUCCESS, payload }))
        .catch(err => dispatch({ type: types.BUDGET_EMAIL_FAILURE }));
};

export const createBudget = (data = {}) => {
    dispatch({ type: types.BUDGET_CREATE_REQUEST })
    BudgetAPI.createBudget(data)
        .then(() => dispatch({ type: types.BUDGET_CREATE_SUCCESS }))
        .catch(() => dispatch({ type: types.BUDGET_CREATE_FAILURE }))
}

export const removeBudget = (idServiceCall = '', idBudget = '') => async dispatch => {
    dispatch({ type: types.REMOVE_BUDGET_REQUEST })
    BudgetAPI.removeBudget(idServiceCall, idBudget)
        .then(() => {
            dispatch({ type: types.REMOVE_BUDGET_SUCCESS })
            dispatch(getBudgetSummaryByServiceCallId(idServiceCall))
        })
        .catch(() => dispatch({ type: REMOVE_BUDGET_FAILURE }))
}