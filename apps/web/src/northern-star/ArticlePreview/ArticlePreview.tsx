'use client';

import Link from 'next/link';

export type Article = {
  title: string;
  slug: string;
  author: string;
  date: string;
  summary: string;
  image?: string;
};

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p className="text-gray-700">{article.summary}</p>
      </div>
    </Link>
  );
}
