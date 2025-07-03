import { render, screen } from "@testing-library/react";
import AuthorPage from "./page";
import { getAuthorBySlug } from "./page";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
}));

jest.mock("./AuthorClient", () => {
  return function DummyAuthorClient({ author }: { author: any }) {
    return <div>Mocked AuthorClient: {author.name}</div>;
  };
});

describe("AuthorPage", () => {
    describe("Page contents", () => {
        it("renders AuthorClient when author found", () => {
            render(<AuthorPage params={{ slug: "jane-doe" }} />);
            expect(screen.getByText(/Mocked AuthorClient: Jane Doe/i)).toBeInTheDocument();
        });

        it("calls notFound when author not found", () => {
            const { notFound } = require("next/navigation");

            render(<AuthorPage params={{ slug: "unknown-slug" }} />);
            expect(notFound).toHaveBeenCalled();
        });
    });
    describe("getAuthorBySlug", () => {
        it("returns author for valid slug", () => {
            const author = getAuthorBySlug("jane-doe");
            expect(author).not.toBeNull();
            expect(author?.name).toBe("Jane Doe");
        });

        it("returns null for invalid slug", () => {
            const author = getAuthorBySlug("unknown-slug");
            expect(author).toBeNull();
        });
    });
});
