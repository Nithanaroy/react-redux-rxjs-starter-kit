import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import appReducer from "./reducers";
import { rootEpic } from "./epics";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // TODO: Good to disable in production

const epicMiddleware = createEpicMiddleware( rootEpic );

export default ( initialState = {}) => {
  return createStore( appReducer, initialState, composeEnhancers(
    applyMiddleware( thunk, epicMiddleware )
  ) );
};