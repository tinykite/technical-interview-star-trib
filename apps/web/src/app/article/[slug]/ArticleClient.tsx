"use client";

import Link from "next/link"
import Pill from "@/northern-star/Pill/Pill";
import { useFavorites } from "@/contexts/FavoritesContext";
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
    const { isFavorite } = useFavorites()
    const favorited = isFavorite(article.author)

  return (
    <main className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-4 text-primary-emerald-green">{article.title}</h1>
    <div className="flex space-x-2">
    <p>By {author ? <Link className="hover:underline" href={`/author/${author.slug}`}>{article.author}</Link> : 'Staff'}</p>
      
    {favorited && <Pill label="following"/>}

    </div>

    <p className="mb-2">Published {article.date}</p>
      
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
