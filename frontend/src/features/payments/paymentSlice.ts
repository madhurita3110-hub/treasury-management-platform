import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({

  name:"payments",

  initialState:{
    data:[]
  },

  reducers:{

    setPayments:(state,action)=>{

      state.data = action.payload;

    }

  }

});

export const {setPayments} = paymentSlice.actions;

export default paymentSlice.reducer;