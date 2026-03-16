import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage.tsx";
import TransactionsPage from "./pages/TransactionsPage.tsx";
import PaymentsPage from "./pages/PaymentsPage.tsx";
import AIInsightsPage from "./pages/AIInsightsPage.tsx";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<DashboardPage />} />

        <Route path="/transactions" element={<TransactionsPage />} />

        <Route path="/payments" element={<PaymentsPage />} />

        <Route path="/ai" element={<AIInsightsPage />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;