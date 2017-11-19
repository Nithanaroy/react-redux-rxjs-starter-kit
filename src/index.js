import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initialState from "./initialState";
import storeFactory from "./store";
import "./index.less";
import App from "./components/App/App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// import registerServiceWorker from "./registerServiceWorker";

UIkit.use( Icons );

const store = storeFactory( initialState );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById( "root" ) );

// registerServiceWorker();
