"use client";

import Link from "next/link"
import { authors } from "../../../hardcoded-data/authors";
interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  image?: string;
  content: string;
}

interface ArticleClientProps {
  article: Article;
}

export default function ArticleClient({ article }: ArticleClientProps) {
  const author = authors.find((author) => author.name === article.author);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-primary-emerald-green">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By{" "}       
          <Link
            href={author ? `/author/${author.slug}` : "#"}
            className="hover:underline"
          >
            {article.author}
          </Link>
        {" "}· {article.date}
      </p>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-md mb-6"
        />
      )}
      <article className="prose prose-green">
        <p>{article.content}</p>
      </article>
    </main>
  );
}
