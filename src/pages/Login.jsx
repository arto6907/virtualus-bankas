import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Prisijungimo bandymas su:", email, password);
    // Vėliau čia bus axios POST į serverį
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Prisijungimas</h2>
      <form onSubmit={handleLogin}>
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
        <div className="mb-3">
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
