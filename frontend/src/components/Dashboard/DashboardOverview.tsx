import React from "react";

const DashboardOverview = () => {

  return (
    <div>

      <h2>Treasury Dashboard</h2>

      <div className="cards">

        <div className="card">
          <h4>Total Liquidity</h4>
          <p>$2,500,000</p>
        </div>

        <div className="card">
          <h4>Transactions</h4>
          <p>85</p>
        </div>

        <div className="card">
          <h4>Risk Alerts</h4>
          <p>3</p>
        </div>

      </div>

    </div>
  );
};

export default DashboardOverview;