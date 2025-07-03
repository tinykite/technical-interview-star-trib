import { notFound } from "next/navigation";
import { authors } from "../../../hardcoded-data/authors";
import AuthorClient from "./AuthorClient";

interface Props {
  params: { slug: string };
}

export function getAuthorBySlug(slug: string) {
  const author = authors.find((a) => a.slug === slug);
  return author || null;
}

export default function AuthorPage({ params }: Props) {
  const author = getAuthorBySlug(params.slug);

  if (!author) {
    notFound();
    return;
  }

  return <AuthorClient author={author} />;
}
