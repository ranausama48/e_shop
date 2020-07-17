import React from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Layout from "./Views/Layout";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./Routes/Auth";
import Private from "./Routes/Private";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute to="/">
            <Layout>
              <Private />
            </Layout>
          </PrivateRoute>
        </Switch>
      </Router>
      <Layout>Usma</Layout>
    </Provider>
  );
}

export default App;
