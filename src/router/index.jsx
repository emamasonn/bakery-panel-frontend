import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Settings from "../components/Settings/Settings";
import Account from "../components/account/Account";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/Account" component={Account} />
      </Switch>
    </BrowserRouter>
  );
}
