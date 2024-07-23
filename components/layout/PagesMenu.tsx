import Link from "next/link";

export default function PagesMenu() {
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        href="/"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        Home
      </Link>
      <Link
        href="/explanation"
        className="text-sm font-medium hover:underline underline-offset-4"
        prefetch={false}
      >
        Our Methods
      </Link>
    </nav>
  );
}
