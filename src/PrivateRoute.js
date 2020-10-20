import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './Auth';

//this file is handling routes through search bar
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
      render={props =>
        Auth.getAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );

  export default PrivateRoute;