import { api } from "../../services/api";

export const getTransactions = async () => {

  const res = await api.get("/transactions");

  return res.data;

};