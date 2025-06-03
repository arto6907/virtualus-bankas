import { useParams } from "react-router-dom";
import { useState } from "react";

export default function AddFunds() {
  const { id } = useParams(); // sąskaitos ID
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Pridedama ${amount} EUR sąskaitai ID: ${id}`);
    // Vėliau: axios PATCH
  };

  return (
    <div className="container mt-5">
      <h2>Pridėti lėšų</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Suma (€)</label>
          <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <button className="btn btn-primary">Pridėti</button>
      </form>
    </div>
  );
}
