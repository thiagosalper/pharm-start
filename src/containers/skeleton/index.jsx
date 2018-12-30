import React from "react";
import PropTypes from "prop-types";

import Grid from '@material-ui/core/Grid';

import Menu from "./components/menu";

import style from "./style.css";

class Skeleton extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <Grid container>
          <Grid item sm={2} md={3} lg={2}>
            <Menu />
          </Grid>
          <Grid item sm={10} md={9} lg={10}>
            <div className={style.baseContainer}>
              {children}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Skeleton;
