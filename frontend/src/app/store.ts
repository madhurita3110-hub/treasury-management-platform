import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transactions/transactionSlice.ts";
import paymentReducer from "../features/payments/paymentSlice.ts";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    payments: paymentReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;