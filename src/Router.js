import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserLoginRegistration from './components/LoginAndRegistrations/Login';
import Registration from './components/LoginAndRegistrations/Registration';
import UserDashboard from './components/dashboards/UserDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import SuperAdminDashboard from './components/dashboards/SuperAdminDashboard';
import PageNotFoundComponent from './components/PageNotFoundComponent';
import PrivateRoute from './PrivateRoute';

const Router = (props) => (
  
    <Switch>
      <Route exact path='/' component={UserLoginRegistration}/>{/* Login Page */}{/* We can directly use Link Tag to route to public pages. Use useHistory for protected routes*/}
      <Route path="/register" component={Registration} />
      <PrivateRoute path="/userdashboard" component={UserDashboard} />
      <PrivateRoute path="/admindashboard" component={AdminDashboard} />
      <PrivateRoute path="/superadmindashboard" component={SuperAdminDashboard} />
      <Route path='*' exact component={PageNotFoundComponent} />
    </Switch>

)




export default Router;