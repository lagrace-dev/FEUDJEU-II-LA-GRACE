"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConnexionPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Afficher l'alerte avec les données JSON
    alert("Connexion réussie !\n\n" + JSON.stringify(formData, null, 2));
    console.log("Données du formulaire :", JSON.stringify(formData, null, 2));

    // Rediriger vers la page de création
    router.push("/Creer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-2">
            Connexion Auteur
          </h2>
          <p className="text-center text-base-content/60 mb-6">
            Connectez-vous pour créer un article
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nom */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Nom *</span>
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                className="input input-bordered w-full"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>

            {/* Prénom */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Prénom *</span>
              </label>
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                className="input input-bordered w-full"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email *</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="votre@email.com"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Bouton de connexion */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
