import type { Metadata } from "next";
import { FavoritesProvider } from '../contexts/FavoritesContext'
import NavBar from "../northern-star/NavBar/NavBar"
import "./globals.css";

export const metadata: Metadata = {
  title: "Northern Star",
  description: "The trusted news source for your city.",
  icons: {
    icon: "/northern_star.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <FavoritesProvider>
        <NavBar />
        {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
