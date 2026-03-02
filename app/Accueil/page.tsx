import Hero from '@/components/Hero'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/datas/articles'

export default function AccueilPage() {
  return (
    <div>
      <Hero />
      <span className="p-10 block text-xl font-semibold">
        Les plus populaires...
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
