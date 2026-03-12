import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchTransactions = createAsyncThunk(
 "transactions/fetch",
 async () => {

  const res = await api.get("/transactions");

  return res.data;
 }
);

const transactionSlice = createSlice({

 name: "transactions",

 initialState: {
  list: [],
  loading: false
 },

 reducers: {},

 extraReducers: (builder) => {

  builder.addCase(fetchTransactions.pending,(state)=>{
   state.loading = true;
  });

  builder.addCase(fetchTransactions.fulfilled,(state,action)=>{
   state.list = action.payload;
   state.loading = false;
  });

 }

});

export default transactionSlice.reducer;