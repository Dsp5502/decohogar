import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clients: [],
};

export const clientSlice = createSlice({
  name: 'clients',
  initialState,

  reducers: {
    addClient: (state, action) => {
      state.clients.push(action.payload);
    },
  },
});

export const { addClient } = clientSlice.actions;

export default clientSlice.reducer;
