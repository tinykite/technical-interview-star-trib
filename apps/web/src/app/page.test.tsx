import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "./page";

// Mock articles data
jest.mock("../hardcoded-data/articles", () => ({
  articles: [
    {
      slug: "article-1",
      title: "Sports Article",
      type: ["Sports"],
      author: "Author A",
      date: "2024-01-01",
      content: "Content A",
    },
    {
      slug: "article-2",
      title: "Business Article",
      type: ["Business"],
      author: "Author B",
      date: "2024-02-01",
      content: "Content B",
    },
    {
      slug: "article-3",
      title: "Sports Article 2",
      type: ["Sports"],
      author: "Author C",
      date: "2024-03-01",
      content: "Content C",
    },
  ],
}));

describe("HomePage", () => {
  it("shows articles", () => {
    render(<HomePage />);
    
    // All articles are rendered
    expect(screen.getByText("Sports Article")).toBeInTheDocument();
    expect(screen.getByText("Sports Article 2")).toBeInTheDocument();
    expect(screen.getByText("Business Article")).toBeInTheDocument();
  });
});
