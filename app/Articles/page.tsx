import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/datas/articles'
import Link from 'next/link'

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ArticlesPage({ searchParams }: PageProps) {
  const { category } = await searchParams;

  const filteredArticles = category
    ? articles.filter(
        (a) => a.category.toLowerCase() === category.toLowerCase()
      )
    : articles;

  const categories = ["Tous", "Shonen", "Seinen", "Shojo", "Isekai", "hentai"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-primary mt-14">Tout Voir et Tout Savoir sur vos Animés et Mangas du moment</h1>

      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => {
          const isActive =
            cat === "Tous" ? !category : category?.toLowerCase() === cat.toLowerCase();
          return (
            <Link
              key={cat}
              href={cat === "Tous" ? "/Articles" : `/Articles?category=${cat}`}
              className={`btn btn-sm ${
                isActive ? "btn-primary" : "btn-outline"
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-base-content/60">
            Aucun article trouvé pour la catégorie &quot;{category}&quot;
          </p>
          <Link href="/Articles" className="btn btn-primary mt-4">
            Voir tous les articles
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}