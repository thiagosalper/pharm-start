import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store";

import Skeleton from "../skeleton";
import Logon from "../logon";
import Dash from "../dash";
import Config from "../config";
import Attendance from '../attendance';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }
  render() {
    const { auth } = this.state;
    return (
      <Provider store={Store}>
        <BrowserRouter>
          {auth ? (
            <Skeleton>
              <Switch>
                <Route exact path="/" component={Dash} />
                <Route exact path="/config" component={Config} />
                <Route exact path="/attendance" component={Attendance} />
              </Switch>
            </Skeleton>
          ) : (
              // <Logon />
              <Skeleton>
                <Switch>
                  <Route exact path="/" component={Dash} />
                  <Route exact path="/config" component={Config} />
                  <Route exact path="/attendance" component={Attendance} />
                </Switch>
              </Skeleton>
            )}
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
