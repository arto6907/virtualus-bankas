import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("/api/auth/login", { email, password });
      console.log("✅ Backend atsakymas:", res.data);

      // Patikrinam ar res.data turi `user` objektą
      const userData = res.data.user || {
        email: res.data.email,
        userId: res.data.userId,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        photo: res.data.photo || null
      };

      const token = res.data.token;

      if (!token || !userData.email || !userData.userId) {
        throw new Error("❌ Trūksta naudotojo duomenų arba tokeno");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);
      navigate("/accounts");
    } catch (err) {
      console.error("❌ Prisijungimo klaida:", err);
      setError("Neteisingi prisijungimo duomenys.");
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Slaptažodis</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary w-100">Prisijungti</button>
      </form>
    </div>
  );
}
