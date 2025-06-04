import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AddFunds() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  // Gauti sąskaitos duomenis
  useEffect(() => {
    axios
      .get(`/api/accounts/${id}`)
      .then((res) => setAccount(res.data))
      .catch(() => setError("Nepavyko gauti sąskaitos duomenų."));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");

    const numericAmount = parseFloat(amount);

    if (!account || numericAmount <= 0) {
      setError("Suma turi būti didesnė už 0.");
      return;
    }

    try {
      const res = await axios.patch(`/api/accounts/add/${id}`, {
        amount: numericAmount,
      });

      setAccount(res.data); // Naujas balansas
      setAmount("");
      setMessage("✅ Lėšos pridėtos sėkmingai.");
    } catch (err) {
      console.error("Klaida pridedant lėšas:", err);
      setError("Nepavyko pridėti lėšų. Bandykite vėliau.");
    }
  };

  if (error) return <p className="text-danger mt-4">{error}</p>;
  if (!account) return <p className="mt-4">Kraunama...</p>;

  return (
    <div className="container mt-4">
      <h2>Pridėti lėšų</h2>
      <p>
        <strong>{account.firstName} {account.lastName}</strong><br />
        IBAN: {account.iban}<br />
        Asmens kodas: {account.idCode}<br />
        Likutis: <strong>{account.balance.toFixed(2)} €</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Suma (EUR):</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Pridėti</button>
      </form>

      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}
