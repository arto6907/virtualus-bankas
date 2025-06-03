import { Routes, Route, useLocation } from "react-router-dom";
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
  const [user, setUser] = useState(null);
  const location = useLocation();

  // Uždėti scroll tik tituliniame puslapyje
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("home-page");
    } else {
      document.body.classList.remove("home-page");
    }
  }, [location]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/accounts" element={<AccountsList />} />
            <Route path="/accounts/new" element={<NewAccount />} />
            <Route path="/accounts/add/:id" element={<AddFunds />} />
            <Route path="/accounts/withdraw/:id" element={<WithdrawFunds />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
