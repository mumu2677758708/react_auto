import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/fund_sup_new";
import rootSaga from "../sagas/fund_sup_new";

const sagaMiddleware = createSagaMiddleware();
const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
let store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
store.runSagaTask = () => {
  store.sagaTask = sagaMiddleware.run(rootSaga);
};
store.runSagaTask();

export default store;
