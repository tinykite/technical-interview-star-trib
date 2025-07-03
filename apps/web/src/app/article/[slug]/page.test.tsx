import { render, screen } from "@testing-library/react";
import ArticleClient from "./ArticleClient";

const mockArticle = {
  slug: "tailwind-makes-layouts-fun-again",
  title: "Tailwind Makes Layouts Fun Again",
  author: "Jane Doe",
  date: "2024-06-23",
  image: "https://example.com/image.jpg",
  content: "This is a sample article content.",
};

describe("ArticleClient", () => {
  it("renders the article title and author", () => {
    render(<ArticleClient article={mockArticle} />);
    expect(screen.getByText(/Tailwind Makes Layouts Fun Again/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
  });
});
