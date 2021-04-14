import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Context } from "../../../App";

function PrivateRoute(children, ...rest){
    const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
    const [loginUser, setLoginUser] = useContext(Context)
    return(
        <Route
      {...rest}
      render={({ location }) =>
      loginUser.user || getUser.user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
    )

}
export default PrivateRoute;