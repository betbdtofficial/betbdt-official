import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const storage = sessionStorage.getItem("club");
  const getClub = JSON.parse(storage);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        getClub?.club ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;