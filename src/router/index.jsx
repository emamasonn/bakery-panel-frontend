import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Settings from "../components/Settings/Settings";
import Category from "../components/Category/Category";
import Navegation from "../components/Navegation/Navegation";
import Grid from "@material-ui/core/Grid";
import ListLink from "../components/Navegation/ListLink";
import Hidden from "@material-ui/core/Hidden";
import Account from "../components/Account/Account";

export default function Router() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid item md={12} xl={12} lg={12}>
          <Navegation />
        </Grid>
        <Hidden smDown>
          <Grid item md={2} xl={2} lg={2}>
            <ListLink />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={10} md={10} xl={10} lg={10}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Category" component={Category} />
            <Route exact path="/Settings" component={Settings} />
            <Route exact path="/Account" component={Account} />
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}
