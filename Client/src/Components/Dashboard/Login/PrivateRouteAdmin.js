import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const adminStorage = sessionStorage.getItem("admin");
  const getAdmin = JSON.parse(adminStorage);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        getAdmin?.admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/adminlogin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;