import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../components/login/Login'
import Settings from '../components/Settings/Settings'
import Category from '../components/Category/Category'
import Navegation from '../components/navegation/Navegation'    
import Grid from  '@material-ui/core/Grid';
import ListLink from  '../components/navegation/ListLink';
import Hidden from '@material-ui/core/Hidden';
import Orders from '../components/orders/Orders';
import Images from '../components/images/Images';
import Account from '../components/account/Account';
import OrderNew from '../components/orders/OrderNew'
import OrderEdit from '../components/orders/OrderEdit'
import Products from "../components/Products/Products";
import ProductNew from "../components/Products/ProductNew";
import ProductEdit from "../components/Products/ProductEdit";
import Messages from "../components/messages/Messages";

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
        <Grid item xs={12} sm={12} md={10} xl={10} lg={10}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Count" component={Account} />
              <Route exact path="/Category" component={Category} />
              <Route exact path='/Settings' component={Settings}/>
              <Route exact path='/Images' component={Images}/>
              <Route exact path='/Orders' component={Orders}/>
              <Route exact path='/OrderNew' component={OrderNew}/>
              <Route exact path='/OrderEdit' component={OrderEdit}/>
              <Route exact path="/Products" component={Products} />
              <Route exact path='/ProductNew' component={ProductNew}/>
              <Route exact path='/ProductEdit' component={ProductEdit}/>
              <Route exact path='/Messages' component={Messages}/>
            </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}
