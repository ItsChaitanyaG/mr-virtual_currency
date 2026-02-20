// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Signup from "./(auth)/sign-up/page.jsx";
import Signin from "./(auth)/sign-in/page.jsx";
import VerifyEmail from "./(auth)/verify-email/page.jsx";

import Layout from "./dashboard/layout";
import Dashboard from "./dashboard/page.jsx";
import Earn from "./dashboard/earn/page";
import Withdraw from "./dashboard/withdraw/page";
import Transaction from "./dashboard/transaction/page";
import History from "./dashboard/history/page";
import Profile from "./dashboard/profile/page";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* seprate it and keep every stuff related to wallet only */}
        <Route path="/wallet" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="earn" element={<Earn />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="transaction-history" element={<History />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
