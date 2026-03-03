"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Inscription() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    téléphone: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Afficher l'alerte avec les données JSON
    alert("Inscription réussie !\n\n" + JSON.stringify(formData, null, 2));
    console.log("Données du formulaire :", JSON.stringify(formData, null, 2));

    // Rediriger vers la page de création
    router.push("/Creer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4 mt-16">
      <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-lg bg-gradient-to-r from-blue-100 to-pink-150">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-2">
            Nouvel Auteur
          </h2>
          <p className="text-center text-base-content/60 mb-6">
            Inscrivez vous pour ajouter un article
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
                className="input input-bordered w-full rounded-full"
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
                className="input input-bordered w-full rounded-full"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>

            {/* Téléphone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Tel *</span>
              </label>
              <input
                type="tel"
                name="téléphone"
                placeholder="Votre numéro de téléphone"
                className="input input-bordered w-full rounded-full"
                value={formData.téléphone}
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
                placeholder="Votre adresse email"
                className="input input-bordered w-full rounded-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mot de passe */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Mot de passe *</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Votre mot de passe"
                className="input input-bordered w-full rounded-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Bouton de connexion */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full bg-blue-400 hover:bg-blue-800 rounded-lg">
                inscription
              </button>
            </div>
            <Link href="/Connexion" className="text-center text-blue-500 hover:underline mt-2">
              Déjà inscrit ? Connectez-vous
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
