import { articles } from "@/datas/articles";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const articleId = Number(params.id);

  const article = articles.find(
    (a) => a.id === articleId
  );

  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-4">
        {article.title}
      </h1>

      <p className="text-sm mb-2 text-gray-500">
        Auteur : {article.author}
      </p>

      <div className="badge badge-secondary mb-6">
        {article.category}
      </div>

      <div className="mb-6">
        <Image
          src={article.cover}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>

      <p className="text-lg leading-relaxed">
        {article.content}
      </p>

    </div>
  );
}