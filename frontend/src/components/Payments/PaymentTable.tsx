import React from "react";

const PaymentTable = ({payments}:any) => {

  return (

    <table border={1} cellPadding={10}>

      <thead>

        <tr>
          <th>ID</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        {payments.map((p:any)=>(
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.from_account}</td>
            <td>{p.to_account}</td>
            <td>{p.amount}</td>
            <td>{p.status}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
};

export default PaymentTable;