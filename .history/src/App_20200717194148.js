import React from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Hello World</div>;
    </Provider>
  );
}

export default App;
