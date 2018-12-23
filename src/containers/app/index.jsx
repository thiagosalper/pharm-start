import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom"; 
import {Provider} from "react-redux";
import Store from "./store";

import Skeleton from "../skeleton";
import Dash from "../dash";
import Config from "../config";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Skeleton>
            <Switch>
              <Route exact path="/" component={Dash} />
              <Route path="/config" component={Config} />
            </Switch>
          </Skeleton>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;