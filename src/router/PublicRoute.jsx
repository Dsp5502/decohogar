import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';
import { decodeToken } from '../helpers/decodeToken';

export const PublicRoute = ({ children }) => {
  const { token, expirationDate } = decodeToken();

  return !token || expirationDate <= new Date() ? (
    children
  ) : (
    <Navigate to='/Home' />
  );
};
