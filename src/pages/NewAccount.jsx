import { useState } from "react";
import axios from "axios";

export default function NewAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    personalId: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("idCode", formData.personalId);

    form.append("photo", formData.photo);

    try {
      const res = await axios.post("/api/accounts", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Sąskaita sukurta sėkmingai!");
      console.log("Serverio atsakymas:", res.data);

      // Išvalyti formą po sėkmės
      setFormData({
        firstName: "",
        lastName: "",
        personalId: "",
        photo: null,
      });
    } catch (err) {
      console.error("❌ Klaida kuriant sąskaitą:", err);
      alert("Klaida! Nepavyko sukurti sąskaitos.");
    }
  };

  return (
    <div className="container mt-4" style={{ paddingBottom: "100px" }}>
      <h2 className="mb-4">Naujos sąskaitos kūrimas</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Vardas</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pavardė</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Asmens kodas</label>
          <input
            type="text"
            name="personalId"
            className="form-control"
            value={formData.personalId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Paso kopija (nuotrauka)</label>
          <input
            type="file"
            name="photo"
            className="form-control"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success mt-3 w-100">
          Sukurti sąskaitą
        </button>
      </form>
    </div>
  );
}
