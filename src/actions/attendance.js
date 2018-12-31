import * as AttendanceAPI from '../server/api/attendance';
import * as types from '../constants/apiBase';

export const getServiceCallSummary = () => async dispatch => {
    dispatch({ type: constants.ATTENDANCE_PAGE_REQUEST });
    const farmaciaId = localStorage.getItem("farmaciaId");
    AttendanceAPI.getServiceCallSummary(farmaciaId)
        .then(payload => dispatch({ type: constants.ATTENDANCE_PAGE_SUCCESS, payload }))
        .catch(() => dispatch({ type: constants.ATTENDANCE_PAGE_FAILURE }));
};

export const getStatusList = () => async dispatch => {
    dispatch({ type: types.GET_STATUS_LIST_REQUEST });
    AttendanceAPI.getAllStatus()
        .then(payload => dispatch({ type: types.GET_STATUS_LIST_SUCCESS, payload }))
        .catch(() => dispatch({ type: types.GET_STATUS_LIST_FAILURE }))
};