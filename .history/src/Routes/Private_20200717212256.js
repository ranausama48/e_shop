import React, { Fragment } from "react";
import { Switch, Route } from "react-router";
import Home from "../Views/Pages/Home";
import About from "../Views/Pages/About";

import Contact from "../Views/Pages/Contact";

import Shop from "../Views/Pages/Shop";

const Admin = () => {
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
      </Switch>
    </Fragment>
  );
};

export default Admin;
