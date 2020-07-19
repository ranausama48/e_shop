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
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState("");
  const uploadImageFun = async (e) => {
    const files = e.target.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "shoesimages");
    setLoading(false);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/osamaasif/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setImage(file.secure_url);
    setLoading(false);
  };
  return (
    <div>
      <input type="file" name="file" onChange={uploadImageFun} />
      {loading ? image : null}
    </div>
    // <Provider store={store}>
    //   <Router>
    //     <Switch>
    //       <PrivateRoute to="/">
    //         <Layout>
    //           <Private />
    //         </Layout>
    //       </PrivateRoute>
    //     </Switch>
    //   </Router>
    // </Provider>
  );
}

export default App;
