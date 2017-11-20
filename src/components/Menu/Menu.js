import React from "react";
import { Link } from "react-router-dom";
import "./Menu.less";

const Menu = () =>
  <nav className="uk-navbar-container uk-margin" data-uk-navbar>
    <div className="uk-navbar-left">

      <a className="uk-navbar-item uk-logo" href="#">React Redux RxJS Template</a>

      <ul className="uk-navbar-nav">
        <li className="uk-active"><Link to="/home">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>;

export default Menu;