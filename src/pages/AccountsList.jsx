import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AccountsList() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Testiniai duomenys, backend dar neprijungtas
    setAccounts([
      {
        id: 1,
        firstName: "Jonas",
        lastName: "Jonaitis",
        balance: 120.50,
      },
      {
        id: 2,
        firstName: "Ona",
        lastName: "Onaitė",
        balance: 0,
      },
    ]);
  }, []);

  const handleDelete = (id, balance) => {
    if (balance > 0) {
      alert("Negalima ištrinti sąskaitos su likučiu.");
      return;
    }

    // Pašalinti iš testinio sąrašo
    setAccounts((prev) => prev.filter((acc) => acc.id !== id));
  };

  return (
    <div className="form-wraper">
      <h2>Apžvalga</h2>

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
              <tr key={acc.id}>
                <td>{acc.firstName}</td>
                <td>{acc.lastName}</td>
                <td>{acc.balance.toFixed(2)} €</td>
                <td>
                  <Link
                    to={`/accounts/add/${acc.id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Pridėti lėšų
                  </Link>
                  <Link
                    to={`/accounts/withdraw/${acc.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Nuskaičiuoti
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(acc.id, acc.balance)}
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
