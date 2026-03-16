import React from "react";
import Layout from "../components/Layout/Layout.tsx";
import TransactionTable from "../components/Transactions/TransactionTable.tsx";
import { useTransactions } from "../hooks/useTransactions.ts";

const TransactionsPage = () => {

  const transactions = useTransactions();

  return (

    <Layout>

      <h2>Transactions</h2>

      <TransactionTable transactions={transactions} />

    </Layout>

  );
};

export default TransactionsPage;