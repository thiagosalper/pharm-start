import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// REDUX 
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {logoutAction} from '../../../logon/redux/logonActions';

// UTILS
import i18n from "../../../../utils/i18n";

import style from "./style.css";

class Menu extends React.Component {
  render() {
    const {logoutAction} = this.props;
    return (
      <div className={style.baseMenu}>
        <h1>{i18n.t("WELCOME")}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/config">Config</Link></li>
          <li><a onClick={()=>logoutAction()}>Logout</a></li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logoutAction
  }, 
  dispatch
)

export default connect(
  null, 
  mapDispatchToProps
)(Menu);