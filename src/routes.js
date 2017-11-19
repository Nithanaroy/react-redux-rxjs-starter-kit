import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/404";
import Errors from "./components/Errors/ErrorsContainer";
import Home from "./components/Home/HomeContainer";

const routes = <Router>
  <div>
    <Header />
    <div className="app-body uk-container">
      <Errors />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </div>
</Router>;

export default routes;