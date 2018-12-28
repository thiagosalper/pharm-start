import 'regenerator-runtime/runtime';
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

// REDUCERS
import logon from "../logon/redux/logonReducer";
import dash from "../dash/redux/dashReducer";

const Store = createStore(
  combineReducers({
    logon,
    dash
  }),
  applyMiddleware(thunk)
);

window.store = Store;

export default Store;