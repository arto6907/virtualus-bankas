import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import AuthContext from "./context/AuthContext";
import Header from "./components/header/Header";
import Footer from "./footer/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AccountsList from "./pages/AccountsList";
import NewAccount from "./pages/NewAccount";
import AddFunds from "./pages/AddFunds";
import WithdrawFunds from "./pages/WithdrawFunds";

function App() {
  // 👉 Pradinis user būsenos nustatymas iš localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const location = useLocation();

  // Scroll efektas tik Home puslapyje (fone)
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
            <Route path="/accounts" element={user ? <AccountsList /> : <Navigate to="/login" />} />
            <Route path="/accounts/new" element={user ? <NewAccount /> : <Navigate to="/login" />} />
            <Route path="/accounts/add/:id" element={user ? <AddFunds /> : <Navigate to="/login" />} />
            <Route path="/accounts/withdraw/:id" element={user ? <WithdrawFunds /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
