import { useState } from "react";

export default function NewAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalid, setPersonalId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nauja sąskaita:", firstName, lastName, personalId);
    // rezervuota serverio daliai('/accounts', { firstName, lastName, personalId })
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Naujos sąskaitos registracija</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Vardas</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Įveskite vardą"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Pavardė</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Įveskite pavardę"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="personalId" className="form-label">Asmens kodas</label>
          <input
            type="text"
            className="form-control"
            id="personalId"
            placeholder="Įveskite asmens kodą"
            value={personalId}
            onChange={(e) => setPersonalId(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Sukurti sąskaitą</button>
      </form>
    </div>
  );
}
