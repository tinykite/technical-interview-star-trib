"use client";

import ArticlePreview from "../ArticlePreview/ArticlePreview";
import type { Article } from "../ArticlePreview/ArticlePreview";
import { useFavorites } from "@/contexts/FavoritesContext";

type ArticleListProps = {
  articles: Article[];
  title?: string;
  noArticlesMessage?: string;
};

type sortArticlesProps = {
  articles: Article[];
  favorites: string[]
}

function sortArticles({articles, favorites}: sortArticlesProps) {
  const favoriteSet = new Set(favorites);
  
  const getPriority = (article: Article) => {
    let priority = 0;
    
    if (favoriteSet.has(article.author)) priority += 10;
    if (article.image) priority += 1;
    
    return priority;
  };
  
  return articles.sort((a, b) => getPriority(b) - getPriority(a));
}

export default function ArticleList({
  articles,
  title,
  noArticlesMessage = "No articles found.",
}: ArticleListProps) {
  const { favorites } = useFavorites()
  const sortedArticles = sortArticles({articles, favorites});

  return (
    <section className="mb-12">
      {title && (
        <h2 className="text-2xl font-semibold mb-4 text-emerald-700">{title}</h2>
      )}
      {sortedArticles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {sortedArticles.map((article) => (
            <ArticlePreview article={article} key={article.slug} />
          ))}
        </div>
      ) : (
        <p className="text-gray-700">{noArticlesMessage}</p>
      )}
    </section>
  );
}
