// import Link from "next/link";
// import {Article} from "@/datas/articles";
// import Image from "next/image";

// interface ArticleCardProps {
//   article: Article;
// }

// export default function ArticleCard({ article }: ArticleCardProps) {
//   return (
//     <Link href={`/articles/${article.id}`} className="group">
//       <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
//         <figure className="h-48 overflow-hidden">
//           <Image
//             src={article.image}
//             alt={article.title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//         </figure>
//         <div className="card-body gap-3">
//           <div className="flex items-center gap-2">
//             <span className="badge badge-primary badge-sm font-medium">
//               {article.category}
//             </span>
//             <span className="text-xs text-base-content/50">
//               {article.readTime} de lecture
//             </span>
//           </div>
//           <h2 className="card-title text-lg leading-snug group-hover:text-primary transition-colors">
//             {article.title}
//           </h2>
//           <p className="text-sm text-base-content/60 leading-relaxed line-clamp-2">
//             {article.excerpt}
//           </p>
//           <div className="flex items-center justify-between mt-2">
//             <span className="text-xs font-medium text-base-content/70">
//               {article.author}
//             </span>
//             <span className="text-xs text-base-content/40">{article.date}</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );import Image from "next/image";
import { Article } from "@/datas/articles";
import Link from "next/link";
import Image from "next/image";
interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="card bg-base-100 shadow-md w-70 h-90 hover:shadow-lg transition-shadow duration-300">
      <figure>
        <Image src={article.cover} alt={article.title} width={200} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p className="text-sm">Auteur : {article.author}</p>
        <div className="badge badge-secondary">{article.category}</div>
        <p className="line-clamp-3">{article.content}</p>
        <div className="card-actions justify-end">
          <Link href={`/Articles/${article.id}`}>
  <button className="btn btn-outline btn-sm">
    Lire plus
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}