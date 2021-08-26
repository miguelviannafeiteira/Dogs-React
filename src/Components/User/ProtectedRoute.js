import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { userContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  const { login } = React.useContext(userContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
