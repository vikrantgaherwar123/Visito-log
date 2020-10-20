import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Public from './components/Public';
import Protected from './components/Protected';
import PrivateRoute from './PrivateRoute';

const Router = (props) => (
  
    <Switch>
      <Route exact path='/' component={Public}/>{/* Login Page */}
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>

)




export default Router;