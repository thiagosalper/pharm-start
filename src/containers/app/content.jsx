import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

// COMPONENTS
import Skeleton from "../skeleton";
import Logon from "../logon";
import Dash from "../dash";
import Config from "../config";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { authorized } = this.props;
    return (
      <React.Fragment>
        <BrowserRouter>
          {authorized ? (
            <Skeleton>
              <Switch>
                <Route exact path="/" component={Dash} />
                <Route path="/config" component={Config} />
                <Route component={Dash} />
              </Switch>
            </Skeleton>
          ) : (
            <Logon />
          )}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    authorized: store.logon.authorized
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
