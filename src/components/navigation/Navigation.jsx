import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Navigation() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav>
      <NavLink to="/" style={{ margin: "0 10px", color: "white" }}>Titulinis</NavLink>
      {!user && (
        <NavLink to="/login" style={{ margin: "0 10px", color: "white" }}>Prisijungti</NavLink>
      )}
      {user && (
        <>
          <NavLink to="/accounts" style={{ margin: "0 10px", color: "white" }}>Sąskaitos</NavLink>
          <NavLink to="/accounts/new" style={{ margin: "0 10px", color: "white" }}>Nauja sąskaita</NavLink>
          <button onClick={handleLogout} style={{ margin: "0 10px", background: "transparent", border: "none", color: "white", cursor: "pointer" }}>
            Atsijungti
          </button>
        </>
      )}
    </nav>
  );
}
