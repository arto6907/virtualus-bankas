import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthContext from "./context/AuthContext";

import Header from "./components/header/Header";
import Footer from "./footer/Footer";
import './styles/mobile.css';

import AccountDetails from "./pages/AccountDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AccountsList from "./pages/AccountsList";
import NewAccount from "./pages/NewAccount";
import AddFunds from "./pages/AddFunds";
import WithdrawFunds from "./pages/WithdrawFunds";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch (err) {
      console.error("❌ Nepavyko nuskaityti 'user' iš localStorage:", err);
      return null;
    }
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }
  }, [location]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="app-wrapper d-flex flex-column min-vh-100">
        <Header />
        <main className="main-content flex-grow-1 py-4 px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/accounts"
              element={
                <ProtectedRoute>
                  <AccountsList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/accounts/new"
              element={
                <ProtectedRoute>
                  <NewAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="/accounts/add/:id"
              element={
                <ProtectedRoute>
                  <AddFunds />
                </ProtectedRoute>
              }
            />
            <Route
              path="/accounts/withdraw/:id"
              element={
                <ProtectedRoute>
                  <WithdrawFunds />
                </ProtectedRoute>
              }
            />
            <Route
              path="/accounts/:id"
              element={
                <ProtectedRoute>
                  <AccountDetails />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
