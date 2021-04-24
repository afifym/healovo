import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ component: Component, redirectURL, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !currentUser?.email === 'admin@healovo.com' ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectURL} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
