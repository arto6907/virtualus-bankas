import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    localStorage.removeItem("user"); // 👈 ištrinti vartotojo info iš localStorage
    navigate("/");
  }, [setUser, navigate]);

  return null;
}
