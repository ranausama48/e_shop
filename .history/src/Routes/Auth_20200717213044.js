import React from "react";
import { Route } from "react-router";
import { useSelector } from "react-redux";
// import Login from "../../components/Registration/login";
import Public from "../Routes/Public";

export function PrivateRoute({ children, ...rest }) {
  const account = useSelector((state) => state.auth);

  return (
    // <Route {...rest} render={() => (account.token ? children : <Login />)} />
    <Route {...rest}>{account.user ? children : <Public />}</Route>
  );
}
