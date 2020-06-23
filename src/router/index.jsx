import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../Components/Login/Login'
import Settings from '../Components/Settings/Settings'

export default function Router() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path='/Settings' component={Settings}/>
      </Switch>
    </BrowserRouter>
  );
}