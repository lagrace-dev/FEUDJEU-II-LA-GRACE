"use client";

import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  liked: boolean;
  dislikes: number;
  disliked: boolean;
}

interface CommentsProps {
  articleId: number;
}

export default function Comments({ articleId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState({ author: "", content: "" });

  const avatarColors = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-info",
    "bg-success",
    "bg-warning",
    "bg-error",
  ];

  const getAvatarColor = (name: string) => {
    const index = name.charCodeAt(0) % avatarColors.length;
    return avatarColors[index];
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: Comment = {
      id: Date.now(),
      author: form.author,
      content: form.content,
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      likes: 0,
      liked: false,
      dislikes: 0,
      disliked: false,
    };

    setComments([newComment, ...comments]);
    setForm({ author: "", content: "" });
  };

  const handleLike = (commentId: number) => {
    setComments(
      comments.map((c) =>
        c.id === commentId
          ? {
              ...c,
              likes: c.liked ? c.likes - 1 : c.likes + 1,
              liked: !c.liked,
              // Remove dislike if liking
              dislikes: !c.liked && c.disliked ? c.dislikes - 1 : c.dislikes,
              disliked: !c.liked && c.disliked ? false : c.disliked,
            }
          : c
      )
    );
  };

  const handleDislike = (commentId: number) => {
    setComments(
      comments.map((c) =>
        c.id === commentId
          ? {
              ...c,
              dislikes: c.disliked ? c.dislikes - 1 : c.dislikes + 1,
              disliked: !c.disliked,
              // Remove like if disliking
              likes: !c.disliked && c.liked ? c.likes - 1 : c.likes,
              liked: !c.disliked && c.liked ? false : c.liked,
            }
          : c
      )
    );
  };

  return (
    <div className="mt-10">
      <div className="flex items-center gap-3 mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <h3 className="text-2xl font-bold">
          Commentaires <span className="text-primary">({comments.length})</span>
        </h3>
      </div>

      {/* Formulaire d'ajout */}
      <form
        onSubmit={handleSubmit}
        className="card bg-gradient-to-br from-base-200 to-base-100 border border-base-300 p-6 mb-8 space-y-4 shadow-sm"
      >
        <h4 className="font-semibold text-lg flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Laisser un commentaire
        </h4>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Votre nom *</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              type="text"
              name="author"
              placeholder="Entrez votre nom"
              className="input input-bordered w-full pl-10"
              value={form.author}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Votre commentaire *</span>
          </label>
          <textarea
            name="content"
            placeholder="Partagez votre avis..."
            className="textarea textarea-bordered w-full h-28 resize-none"
            value={form.content}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-sm w-fit gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Publier
        </button>
      </form>

      {/* Liste des commentaires */}
      {comments.length === 0 ? (
        <div className="text-center py-10">
          <div className="text-5xl mb-3">🗨️</div>
          <p className="text-base-content/50">
            Aucun commentaire pour le moment. Soyez le premier !
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-200 p-5"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full ${getAvatarColor(
                      comment.author
                    )} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {getInitials(comment.author)}
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-primary">
                      {comment.author}
                    </span>
                    <span className="text-xs text-base-content/40">•</span>
                    <span className="text-xs text-base-content/40">
                      {comment.date}
                    </span>
                  </div>

                  <p className="text-base-content/80 leading-relaxed mb-3">
                    {comment.content}
                  </p>

                  {/* Boutons Like & Dislike */}
                  <div className="flex items-center gap-2">
                    {/* Like */}
                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`btn btn-ghost btn-xs gap-1 transition-all duration-200 ${
                        comment.liked
                          ? "text-red-500 hover:text-red-600"
                          : "text-base-content/40 hover:text-red-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-200"
                        style={{
                          transform: comment.liked ? "scale(1.2)" : "scale(1)",
                        }}
                        fill={comment.liked ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span className="text-xs font-medium">
                        {comment.likes > 0 ? comment.likes : "J'aime"}
                      </span>
                    </button>

                    {/* Dislike */}
                    <button
                      onClick={() => handleDislike(comment.id)}
                      className={`btn btn-ghost btn-xs gap-1 transition-all duration-200 ${
                        comment.disliked
                          ? "text-blue-500 hover:text-blue-600"
                          : "text-base-content/40 hover:text-blue-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-200"
                        style={{
                          transform: comment.disliked ? "scale(1.2)" : "scale(1)",
                        }}
                        fill={comment.disliked ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                        />
                      </svg>
                      <span className="text-xs font-medium">
                        {comment.dislikes > 0 ? comment.dislikes : "Je n'aime pas"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
