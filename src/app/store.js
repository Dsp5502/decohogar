import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '../features/clients/clientSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    user: userReducer,
  },
});
