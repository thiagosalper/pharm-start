import 'regenerator-runtime/runtime';
import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

import appSaga from "./appSaga";

import dash from "../dash/redux/dashReducer";

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  combineReducers({
    dash
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(appSaga);

window.store = Store;

export default Store;