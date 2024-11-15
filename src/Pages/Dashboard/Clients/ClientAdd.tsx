// components/AddClientForm.tsx
import React, { useState } from "react";

export function AddClientForm({
  onClientAdded,
}: {
  onClientAdded: () => void;
}) {
  const [formData, setFormData] = useState({
    nom_client: "",
    prenom_client: "",
    telephone_client: "",
    num_cni_client: "",
    date_nais: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        onClientAdded(); // Notify parent to refresh the client list
        alert("Client added successfully!");
      } else {
        alert("Error adding client: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding client");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nom_client">First Name</label>
        <input
          type="text"
          id="nom_client"
          name="nom_client"
          value={formData.nom_client}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="prenom_client">Last Name</label>
        <input
          type="text"
          id="prenom_client"
          name="prenom_client"
          value={formData.prenom_client}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="telephone_client">Phone</label>
        <input
          type="text"
          id="telephone_client"
          name="telephone_client"
          value={formData.telephone_client}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="num_cni_client">CNI Number</label>
        <input
          type="text"
          id="num_cni_client"
          name="num_cni_client"
          value={formData.num_cni_client}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="date_nais">Date of Birth</label>
        <input
          type="date"
          id="date_nais"
          name="date_nais"
          value={formData.date_nais}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Client
      </button>
    </form>
  );
}
