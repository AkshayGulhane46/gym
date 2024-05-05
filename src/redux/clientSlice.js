// clientsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    list: [],
  },
  reducers: {
    addClient: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addClient } = clientsSlice.actions;
export const selectClients = (state) => state.clients.list;
export default clientsSlice.reducer;
