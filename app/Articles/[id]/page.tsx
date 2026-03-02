import { articles } from "@/datas/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Comments from "@/components/Comments";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const articleId = Number(id);

  const article = articles.find(
    (a) => a.id === articleId
  );

  if (!article) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-6">
        <Link href="/Articles" className="btn btn-ghost btn-sm gap-2">
          ← Retour aux articles
        </Link>
      </div>

      <div className="mb-6 overflow-hidden rounded-xl">
        <Image
          src={article.cover}
          alt={article.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="badge badge-secondary badge-lg">{article.category}</div>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        {article.title}
      </h1>

      <p className="text-sm mb-6 text-gray-500">
        Par <span className="font-semibold">{article.author}</span>
      </p>

      <div className="divider"></div>

      <p className="text-lg leading-relaxed whitespace-pre-line">
        {article.excerpt}
      </p>

      <div className="divider"></div>

      <div className="flex justify-between items-center mt-4">
        <Link href="/Articles" className="btn btn-outline btn-sm">
          ← Voir tous les articles
        </Link>
      </div>

      <Comments articleId={articleId} />
    </div>
  );
}