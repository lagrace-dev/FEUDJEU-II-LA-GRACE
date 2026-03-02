import react from 'react'
import ArticleCard from '@/components/ArticleCard'
import { articles} from '@/datas/articles'
export default function ArticlesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}