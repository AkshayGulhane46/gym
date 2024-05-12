// clientsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    list: [{
      name: 'Akshay',
      mobileNumber: '1242314',
      address: 'Test Address',
      feesPaid: 200,
      balanceAmount: 100,
      disability: false,
      hasTrainer: false,
      isOldClient: false,
      gymStartDate: "",
      months: '1',
    }],
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
