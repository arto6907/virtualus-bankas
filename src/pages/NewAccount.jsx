import { useState } from "react";

export default function NewAccount() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    idCode: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sukurta sąskaita:", form);
    alert("Sąskaita sukurta (testavimui)");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Naujos sąskaitos kūrimas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Vardas</label>
          <input type="text" className="form-control" name="firstName" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Pavardė</label>
          <input type="text" className="form-control" name="lastName" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Asmens kodas</label>
          <input type="text" className="form-control" name="idCode" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Paso kopija (nuotrauka)</label>
          <input type="file" className="form-control" name="image" accept="image/*" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success w-100">Sukurti sąskaitą</button>
      </form>
    </div>
  );
}
