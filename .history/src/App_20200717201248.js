import React from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Button } from "antd";
import Layout from "./Views/Layout";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Layout>Usma</Layout>
    </Provider>
  );
}

export default App;
