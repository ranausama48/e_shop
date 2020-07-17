import React from "react";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Provider>
  );
}

export default App;
