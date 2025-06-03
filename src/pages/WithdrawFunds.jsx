import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WithdrawFunds() {
  const { id } = useParams(); // Gaunam sąskaitos ID iš URL
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState("");

  // Paimsim duomenis iš serverio (simuliuosim kol kas)
  useEffect(() => {
    // Vėliau čia bus axios GET užklausa pagal ID
    setAccount({
      id,
      firstName: "Jonas",
      lastName: "Jonaitis",
      balance: 130.5,
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (numericAmount <= 0 || numericAmount > account.balance) {
      alert("Neteisinga suma.");
      return;
    }

    // Čia vėliau bus axios PUT/POST užklausa
    alert(`Nuskaičiuota ${numericAmount} EUR`);
  };

  if (!account) return <p>Kraunama...</p>;

  return (
    <div className="container mt-4">
      <h2>Nuskaičiuoti lėšas</h2>
      <p>
        {account.firstName} {account.lastName} – Likutis: {account.balance} €
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Suma (EUR):
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Nuskaičiuoti
        </button>
      </form>
    </div>
  );
}
