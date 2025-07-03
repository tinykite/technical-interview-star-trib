"use client";

import ArticlePreview from "../ArticlePreview/ArticlePreview";
import type { Article } from "../ArticlePreview/ArticlePreview";

type ArticleListProps = {
  articles: Article[];
  title?: string;
  noArticlesMessage?: string;
};

function sortArticlesByImage(articlesList: Article[]) {
  const withImages = articlesList.filter((a) => a.image);
  const withoutImages = articlesList.filter((a) => !a.image);
  return [...withImages, ...withoutImages];
}

export default function ArticleList({
  articles,
  title,
  noArticlesMessage = "No articles found.",
}: ArticleListProps) {
  const sortedArticles = sortArticlesByImage(articles);

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
