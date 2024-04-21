import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
