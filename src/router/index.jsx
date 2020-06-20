import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/login/Login'

export default function Router() {
  return (
    <BrowserRouter>   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/Login' component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}