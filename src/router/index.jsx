import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Settings from "../components/Settings/Settings";
import Products from "../components/Products/Products";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Settings" component={Settings} />
        <Route exact path="/Products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
