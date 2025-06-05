import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AccountsList() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/accounts")
      .then((res) => setAccounts(res.data))
      .catch((err) => console.error("Klaida gaunant sąskaitas:", err));
  }, []);

  const handleDelete = async (id, balance) => {
    if (balance > 0) {
      alert("Negalima ištrinti sąskaitos su likučiu.");
      return;
    }

    try {
      await axios.delete(`/api/accounts/${id}`);
      setAccounts((prev) => prev.filter((acc) => acc._id !== id));
    } catch (error) {
      console.error("Klaida šalinant sąskaitą:", error);
    }
  };

  return (
    <div className="form-wraper">
      <h3>Apžvalga</h3>

      <Link to="/accounts/new" className="btn btn-success mb-3">
        Nauja sąskaita
      </Link>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>Likutis</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {accounts
            .sort((a, b) => a.lastName.localeCompare(b.lastName))
            .map((acc) => (
              <tr key={acc._id}>
                <td>{acc.firstName}</td>
                <td>{acc.lastName}</td>
                <td>{acc.balance.toFixed(2)} €</td>
                <td>
                  <Link
                    to={`/accounts/add/${acc._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Pridėti lėšų
                  </Link>
                  <Link
                    to={`/accounts/withdraw/${acc._id}`}
                    className="btn btn-warning btn-sm"
                  >
                    Nuskaičiuoti
                  </Link>
                  <button
                    className="btn btn-danger btn sm"
                    onClick={() => handleDelete(acc._id, acc.balance)}
                  >
                    Ištrinti
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
