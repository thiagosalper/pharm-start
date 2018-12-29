import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Link } from "react-router-dom";


import Grid from '@material-ui/core/Grid';


import Login from "./components/login";
import Register from "./components/register";
import Reset from "./components/reset";

import style from "./style.css";

class Logon extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item sm={12} md={6} lg={8}>
            Ola
            <Link to="/">Login</Link> | 
            <Link to="/register">Register</Link> | 
            <Link to="/reset">Reset</Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <div className={style.baseContainer}>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/reset" component={Reset} />
              </Switch>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Logon;
