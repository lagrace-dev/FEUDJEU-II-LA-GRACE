"use client";

import { useState } from "react";
import Image from "next/image";

export default function Creer() {
  const [formData, setFormData] = useState({
    titre: "",
    categorie: "Shonen",
    contenu: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const categories = ["Shonen", "Seinen", "Shojo", "Isekai"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const articleData = {
      ...formData,
      image: imageName || "Aucune image",
    };

    alert(
      "Article créé avec succès !\n\n" + JSON.stringify(articleData, null, 2)
    );
    console.log("Article créé :", JSON.stringify(articleData, null, 2));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card w-full max-w-lg bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="card-title text-2xl justify-center mb-2">
              Article publié !
            </h2>
            <p className="text-base-content/60 mb-4">
              Votre article &quot;{formData.titre}&quot; a été créé avec succès.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ titre: "", categorie: "Shonen", contenu: "" });
                  setImagePreview(null);
                  setImageName("");
                }}
              >
                Créer un autre article
              </button>
              <a href="/Articles" className="btn btn-outline">
                Voir les articles
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold mb-6">
              ✍️ Créer un nouvel article
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Titre */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Titre de l&apos;article *</span>
                </label>
                <input
                  type="text"
                  name="titre"
                  placeholder="Entrez le titre de votre article"
                  className="input input-bordered w-full"
                  value={formData.titre}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Catégorie */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Catégorie *</span>
                </label>
                <select
                  name="categorie"
                  className="select select-bordered w-full"
                  value={formData.categorie}
                  onChange={handleChange}
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Image de couverture</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <Image
                      src={imagePreview}
                      alt="Aperçu"
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Contenu de l&apos;article *</span>
                </label>
                <textarea
                  name="contenu"
                  placeholder="Écrivez votre article ici..."
                  className="textarea textarea-bordered w-full h-64 text-base"
                  value={formData.contenu}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Bouton de soumission */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full text-lg">
                  Publier l&apos;article
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}