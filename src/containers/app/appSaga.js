import {call,put,takeEvery,takeLatest,fork} from "redux-saga/effects";

// import the redux/sagas

export default function* appSaga(){
  yield [
    // functions middleware saga 
    //fork(takeLatest, "EXAMPLE_ACTION", actionSagaExample),
  ];
}