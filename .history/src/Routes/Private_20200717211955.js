import React, { Fragment } from "react";
import { Switch, Route } from "react-router";

import AdminDash from "./overview/Dashboard";
import Profile from "./profile";
import AddBuyer from "./buyer/AddBuyer";
import BuyerList from "./buyer/BuyerList";
import BuyerInner from "./buyer/BuyerInner";
import Transactions from "./buyer/Transaction";
import InvoiceInner from "./buyer/InvoiceInner";

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
