import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Testavimui – vėliau čia bus axios POST į serverį
    setUser({ email }); // Paprastai saugomas email arba ID
    navigate("/accounts"); // Po prisijungimo
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Prisijungimas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">El. paštas</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Įveskite el. paštą"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="password" className="form-label">Slaptažodis</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Įveskite slaptažodį"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Prisijungti</button>
      </form>
    </div>
  );
}
