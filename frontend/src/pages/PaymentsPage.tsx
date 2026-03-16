import React, {useEffect,useState} from "react";
import Layout from "../components/Layout/Layout.tsx";
import PaymentTable from "../components/Payments/PaymentTable.tsx";
import { api } from "../services/api.ts";

const PaymentsPage = () => {

  const [payments,setPayments] = useState([]);

  useEffect(()=>{

    api.get("/payments").then(res=>{

      setPayments(res.data);

    });

  },[]);

  return (

    <Layout>

      <h2>Payments</h2>

      <PaymentTable payments={payments} />

    </Layout>

  );
};

export default PaymentsPage;