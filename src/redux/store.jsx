import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

import { mySaga } from "./sagas/posts-sagas";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([mySaga()]);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
