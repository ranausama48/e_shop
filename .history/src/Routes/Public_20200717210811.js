import React, { Fragment } from "react";
import { Switch, Route } from "react-router";
// import Login from "./Login";
// import SignUp from "./SignUp";
const UserRoute = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`/`}>
          {/* <Login /> */}
          <div>login</div>
        </Route>
        <Route exact path={`/registration`}>
          {/* <SignUp /> */}
          <div>signup</div>
        </Route>
      </Switch>
    </Fragment>
  );
};

export default UserRoute;
