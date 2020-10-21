import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserLoginRegistration from './components/LoginAndRegistratons/UserLoginRegistration';
import UserDashboard from './components/dashboards/UserDashboard';
import NotFoundComponent from './components/NotFoundComponent';
import PrivateRoute from './PrivateRoute';

const Router = (props) => (
  
    <Switch>
      <Route exact path='/' component={UserLoginRegistration}/>{/* Login Page */}{/* We can directly use Link Tag to route to public pages. Use useHistory for protected routes*/}
      <PrivateRoute path="/userdashboard" component={UserDashboard} />
      <Route path='*' exact component={NotFoundComponent} />
    </Switch>

)




export default Router;