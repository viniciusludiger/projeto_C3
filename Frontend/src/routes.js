import React from 'react';

import Signin from './components/Signin';
import Register from './components/Register';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard'
import PageNotFound from './components/PageNotFound';
import CheckoutUnidade from './components/CheckoutUnidade';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const Routes = () => {
    return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Signin}/>
        <Route path='/register' component={Register}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/registrarunidade' component={CheckoutUnidade}/>
        <Route path='/*' component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
    )
}

export default Routes;