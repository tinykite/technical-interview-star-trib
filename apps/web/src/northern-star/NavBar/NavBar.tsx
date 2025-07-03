import Link from "next/link";
import Image from "next/image";

const sections = [
  "News & Politics",
  "Sports",
  "Food & Culture",
  "Business",
  "Outdoors",
  "Opinion",
  "Things To Do",
  "Obituaries",
];

export default function NavBar() {
    function toSlug(str: string) {
        return str
            .toLowerCase()
            .replace(/&/g, "and")         // Replace & with "and"
            .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumerics with dash
            .replace(/^-+|-+$/g, "");    // Trim starting/ending dashes
    }

    return (
        <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo and name */}
            <Link href={`/`}>
                <div className="flex items-center space-x-2">
                    <Image
                        src="/northern_star.svg"
                        alt="Northern Star Logo"
                        width={32}
                        height={32}
                    />
                    <span className="text-xl font-bold text-primary-emerald-green">
                        Northern Star
                    </span>
                </div>
            </Link>

            {/* Nav links */}
            <nav className="hidden md:flex space-x-4">
            {sections.map((section) => (
                <Link
                key={section}
                href={`/${toSlug(section)}`}
                className="text-sm text-gray-700 hover:text-primary-emerald-green transition"
                >
                    {section}
                </Link>
            ))}
            </nav>
        </div>
        </header>
    );
}
