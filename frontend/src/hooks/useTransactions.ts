import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transactions/transactionSlice.ts";

export const useTransactions = () => {

  const dispatch = useDispatch();
  const transactions = useSelector((state: any) => state.transactions.data);

  useEffect(() => {
    dispatch(fetchTransactions() as any);
  }, []);

  return transactions;
};