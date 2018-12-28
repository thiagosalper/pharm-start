import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// REDUX 
import {Provider} from 'react-redux';
import Store from "./store";

// COMPONENTS
import Content from "./content";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Content />
      </Provider>
    );
  }
}

export default App;