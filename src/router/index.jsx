import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../components/Login/Login'
import Settings from '../components/Settings/Settings'
import Category from '../components/Category/Category'
import Navegation from '../components/Navegation/Navegation'    
import Grid from  '@material-ui/core/Grid';

export default function Router() {

  return (
  <BrowserRouter>
    <Grid container>
        <Grid>
            <Navegation/>
        </Grid>
        <Grid>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Category" component={Category} />
              <Route exact path='/Settings' component={Settings}/>
            </Switch>
        </Grid>
    </Grid>
  </BrowserRouter>
  );
}