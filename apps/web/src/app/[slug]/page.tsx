"use client"
import { useParams } from "next/navigation";
import ArticleList from "../../northern-star/ArticleList/ArticleList";
import { articles } from "../../hardcoded-data/articles";

const validCategories = [
  "news-and-politics",
  "sports",
  "food-and-culture",
  "business",
  "outdoors",
  "opinion",
  "things-to-do",
  "obituaries",
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug?.toLowerCase();

  if (!slug || !validCategories.includes(slug)) {
    return (
      <>
        <main className="min-h-screen flex items-center justify-center">
          <p className="text-gray-700 text-xl">Page not found</p>
        </main>
      </>
    );
  }

  // Map slug to display name to match article.type entries
  const slugToCategoryMap: Record<string, string> = {
    "news-and-politics": "News & Politics",
    sports: "Sports",
    "food-and-culture": "Food & Culture",
    business: "Business",
    outdoors: "Outdoors",
    opinion: "Opinion",
    "things-to-do": "Things To Do",
    obituaries: "Obituaries",
  };

  const category = slugToCategoryMap[slug];

  // Filter articles that include this category
  const filteredArticles = articles.filter((article) =>
    article.type.includes(category)
  );

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {filteredArticles.length > 0 ? (
          <ArticleList articles={filteredArticles} title={category} />
        ) : (
          <p className="text-gray-700">No articles found in this category.</p>
        )}
      </div>
    </main>
  );
}
