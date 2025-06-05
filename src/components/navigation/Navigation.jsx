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
    <nav className="d-flex align-items-center gap-2">
      <NavLink to="/" className="btn btn-sm btn-outline-light">Titulinis</NavLink>

      {!user && (
        <NavLink to="/login" className="btn btn-sm btn-outline-light">Prisijungti</NavLink>
      )}

      {user && (
        <>
          <NavLink to="/accounts" className="btn btn-sm btn-outline-light">Sąskaitos</NavLink>
          <NavLink to="/accounts/new" className="btn btn-sm btn-outline-light">Nauja sąskaita</NavLink>
          <button onClick={handleLogout} className="btn btn-sm btn-outline-light">
            Atsijungti
          </button>
        </>
      )}
    </nav>
  );
}
