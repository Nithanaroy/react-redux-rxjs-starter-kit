import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/SearchContainer";
import "./Menu.less";

const Menu = () =>
  <nav className="uk-navbar-container uk-margin" data-uk-navbar>
    <div className="uk-navbar-left">

      <a className="uk-navbar-item uk-logo" href="#">React Redux RxJS Template</a>

      <ul className="uk-navbar-nav">
        <li className="uk-active"><Link to="/home">Home</Link></li>
        <li><Link to="/about">Explore</Link></li>
      </ul>
    </div>
    <Search />
  </nav>;

export default Menu;