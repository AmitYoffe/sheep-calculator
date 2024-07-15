import Image from "next/image";
import Link from "next/link";
import { BreadCrumbs } from "./BreadCrumbs";
import { DarkModeToggle } from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="px-2 lg:px-3 h-14 flex items-center">
      <nav className="mr-auto flex gap-4 sm:gap-6 items-center">
        <DarkModeToggle />
        <BreadCrumbs />
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
