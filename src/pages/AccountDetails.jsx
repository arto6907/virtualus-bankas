import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AccountDetails() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`/api/accounts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAccount(res.data))
      .catch((err) => {
        console.error("❌ Klaida gaunant sąskaitos informaciją:", err);
        setError("Nepavyko gauti sąskaitos duomenų.");
      });
  }, [id]);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!account) return <div>Kraunama...</div>;

  return (
    <div className="container mt-4">
      <h3>Sąskaitos detalės</h3>
      <p><strong>Vardas:</strong> {account.firstName}</p>
      <p><strong>Pavardė:</strong> {account.lastName}</p>
      <p><strong>Asmens kodas:</strong> {account.idCode}</p>
      <p><strong>Likutis:</strong> {account.balance.toFixed(2)} €</p>
      {account.photo && (
        <img
          src={`/uploads/${account.photo}`}
          alt="Nuotrauka"
          style={{ maxWidth: "200px", marginTop: "10px" }}
        />
      )}
    </div>
  );
}
