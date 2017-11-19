/* eslint "react/prop-types": 0 */

import React from "react";
import routes from "../../routes";
import "./App.less";

export const App = () =>
  <div className="app">
    {routes}
  </div>;

export default App;
