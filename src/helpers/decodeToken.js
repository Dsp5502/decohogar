import jwt_decode from 'jwt-decode';

export const decodeToken = () => {
  const token = localStorage.getItem('token');
  let expirationDate = new Date();

  if (token) {
    const decoded = jwt_decode(token);
    expirationDate = new Date(decoded.exp * 1000);
  }
  return { token, expirationDate };
};
