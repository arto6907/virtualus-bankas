import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WithdrawFunds() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  // Gauti sąskaitos duomenis su token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Vartotojas neprisijungęs");
      return;
    }

    axios
      .get(`/api/accounts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAccount(res.data))
      .catch((err) => {
        console.error("❌ Klaida gaunant sąskaitos info:", err);
        setError("Nepavyko gauti sąskaitos duomenų.");
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");

    const numericAmount = parseFloat(amount);
    if (!account || numericAmount <= 0 || numericAmount > account.balance) {
      setError("Neteisinga suma.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Prisijungimas reikalingas.");
      return;
    }

    try {
      const res = await axios.post(
        `/api/accounts/withdraw/${id}`,
        { amount: numericAmount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAccount(res.data.account);
      setAmount("");
      setMessage("✅ Lėšos sėkmingai nurašytos.");
    } catch (err) {
      console.error("❌ Klaida nurašant lėšas:", err);
      setError(
        err.response?.data?.error || "Nepavyko nurašyti lėšų. Bandykite vėliau."
      );
    }
  };

  if (error) return <p className="text-danger mt-4">{error}</p>;
  if (!account) return <p className="mt-4">Kraunama...</p>;

  return (
    <div className="container mt-4">
      <h5>Nuskaičiuoti lėšas</h5>
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
            className="form-control form-control-sm"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-danger btn-sm"
          style={{ marginTop: "0.3rem" }}
        >
          Nuskaičiuoti
        </button>
      </form>

      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}
