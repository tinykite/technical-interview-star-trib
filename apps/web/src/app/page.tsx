"use client";

import ArticleList from "../northern-star/ArticleList/ArticleList";
import { articles } from "../hardcoded-data/articles";

export default function HomePage() {
  // Group articles by first category type
  const articlesByCategory = articles.reduce<Record<string, typeof articles>>(
    (acc, article) => {
      const category = article.type[0] || "Uncategorized";
      if (!acc[category]) acc[category] = [];
      acc[category].push(article);
      return acc;
    },
    {}
  );

  // Sorted categories
  const categories = Object.keys(articlesByCategory).sort();

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {categories.map((category) => (
          <ArticleList
            key={category}
            title={category}
            articles={articlesByCategory[category]}
          />
        ))}
      </div>
    </main>
  );
}
