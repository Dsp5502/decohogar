import axios from 'axios';
import { login } from '../userSlice';

export const loginAction = (username, password, goHome) => async (dispatch) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const body = new URLSearchParams();
  body.append('username', username);
  body.append('password', password);
  try {
    const { data } = await axios.post(
      'http://206.81.9.7/api/v1/auth',
      body,
      headers
    );
    localStorage.setItem('token', data.access_token);
    goHome();
    // dispatch(login(data));
  } catch (error) {
    console.log(error);
    // throw new Error(error);
  }
};
