import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Context } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedIn, setLoggedIn] = useContext(Context);
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedIn.user ? (
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