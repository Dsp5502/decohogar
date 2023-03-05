import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { decodeToken } from '../helpers/decodeToken';

export const PrivateRoute = ({ children }) => {
  const { token, expirationDate } = decodeToken();

  return !token || expirationDate <= new Date() ? (
    <Navigate to='/login' />
  ) : (
    children
  );
};
