"use client";

import FavoriteToggle from "@/northern-star/FavoriteToggle/FavoriteToggle";

export interface Author {
  name: string;
  slug: string;
  bio: string;
  headshot: string;
}

interface AuthorClientProps {
  author: Author;
}

export default function AuthorClient({ author }: AuthorClientProps) {
    return (
        <main className="max-w-4xl mx-auto p-6">
            {/* Headshot + info row */}
            <div className="flex items-start space-x-6">
                {author.headshot && (
                    <img
                        src={author.headshot}
                        alt={author.name}
                        className="w-24 h-24 rounded-full"
                    />
                )}

                {/* Name + Bio stacked vertically */}
                <div className="mb-2">
                    <div className="flex space-x-1 items-center">
                     <FavoriteToggle id={author.name} />
                    <h1 className="text-4xl font-bold text-primary-emerald-green">
                        {author.name}
                    </h1>

                    </div>
              
                    <article className="prose prose-green">
                        <p>{author.bio}</p>
                    </article>
                </div>
            </div>
        </main>
    );
}
