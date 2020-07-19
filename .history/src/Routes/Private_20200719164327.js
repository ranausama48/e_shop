import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import Home from "../Views/Pages/Home";
import About from "../Views/Pages/About";
import Contact from "../Views/Pages/Contact";
import Shop from "../Views/Pages/Shop";
import AdminPanel from "../Views/Pages/AdminPanel";
import Login from "../Views/Pages/Login";
import ProductInner from "../Views/Pages/ProductInner";

const Admin = () => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/`}>
          <Home />
        </Route>

        <Route exact path={`/about`}>
          <About />
        </Route>
        <Route path={`/contact`}>
          <Contact />
        </Route>
        <Route path={`/shop`}>
          <Shop />
        </Route>
        <Route path="/shopInner/:id" component={ProductInner} />
        <Route path={`/login`}>
          <Login />
        </Route>
        {auth ? (
          <Route path={`/admin`}>
            <AdminPanel />
          </Route>
        ) : null}
        <Route path="*" component={() => <h2>404 Not Found</h2>} />
      </Switch>
    </Fragment>
  );
};

export default Admin;
