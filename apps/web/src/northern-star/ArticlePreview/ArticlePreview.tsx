'use client';

import Link from 'next/link';
import { useFavorites } from '@/contexts/FavoritesContext';
import Pill from '../Pill/Pill';

export type Article = {
  title: string;
  slug: string;
  author: string;
  date: string;
  summary: string;
  image?: string;
};

export default function ArticlePreview({ article }: { article: Article }) {
    const { isFavorite } = useFavorites()
    const favorited = isFavorite(article.author)

  return (
    <Link
      href={`/article/${article.slug}`}
      className="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition relative"
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
        <div className="flex space-x-2">  
        <p>{article.author}</p>
         {favorited && <Pill label="following"/>}
        </div>

        <p className="text-gray-900">{article.summary}</p>

      
      </div>

    
    </Link>
  );
}
