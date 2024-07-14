import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <nav className="mr-auto flex gap-4 sm:gap-6">
        {/* <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Calculator
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link> */}
        BreadCrumbs?
      </nav>
      <Link
        className="flex items-center justify-center"
        href="/"
        prefetch={false}
      >
        <Image
          src={"../SVGs/sheep.svg"}
          alt="sheep header icon"
          width={30}
          height={30}
        />
        <span className="sr-only">Sheep Worth Calculator</span>
      </Link>
    </header>
  );
}
