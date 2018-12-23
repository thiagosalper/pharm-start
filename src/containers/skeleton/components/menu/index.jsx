import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./style.css";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.baseMenu}>
        <h1>MENU</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/config">Config</Link></li>
        </ul>
        
        
      </div>
    );
  }
}

export default Menu;
