import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (

    <div style={{width:"200px",background:"#f1f5f9",padding:"20px"}}>

      <ul style={{listStyle:"none",padding:0}}>

        <li><Link to="/">Dashboard</Link></li>

        <li><Link to="/transactions">Transactions</Link></li>

        <li><Link to="/payments">Payments</Link></li>

        <li><Link to="/ai">AI Insights</Link></li>

      </ul>

    </div>
  );
};

export default Sidebar;