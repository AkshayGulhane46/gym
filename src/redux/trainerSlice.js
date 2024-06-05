import { createSlice } from "@reduxjs/toolkit";

const trainerSlice = createSlice({
    name : 'trainer',
    initialState :{
        list:[{
            name : 'Tony',
            mobileNumber : '123123',
            address : "Test address",
            salary : 30000,
            clients : [
                "Tony","Mony"
            ],
            inTime: '20-10',
            outTime : "21-10"
        }]
    },
    reducers:{
        addTrainer : (state,action) => {
            state.list.push(action.payload);
        }
    }
})

export const {addTrainer} = createSlice.actions;
export const selectTrainer = (state) => state.trainer.list;
export default trainerSlice.reducer;