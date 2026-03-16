import React from "react";

const TransactionTable = ({transactions}:any) => {

  return (

    <table border={1} cellPadding={10}>

      <thead>
        <tr>
          <th>ID</th>
          <th>Account</th>
          <th>Amount</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>

        {transactions.map((t:any)=>(
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.account_id}</td>
            <td>{t.amount}</td>
            <td>{t.type}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
};

export default TransactionTable;