"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadCrumbs } from "./BreadCrumbs";
import { DarkModeToggle } from "./DarkModeToggle";
import PagesMenu from "./PagesMenu";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const pathName = usePathname();
  const { theme } = useTheme();

  return (
    <header className="px-2 lg:px-3 h-14 flex items-center border-b-2">
      <nav className="mr-auto flex gap-4 sm:gap-6 items-center">
        <DarkModeToggle />
        {pathName.includes("result") ? <BreadCrumbs /> : <PagesMenu />}
      </nav>
      <Link
        className="flex items-center justify-center"
        href="/"
        prefetch={false}
      >
        <Image
          src={theme === "dark" ? "/SVGs/whiteSheep.svg" : "/SVGs/sheep.svg"}
          alt="sheep header icon"
          width={30}
          height={30}
        />
        <span className="sr-only">Sheep Worth Calculator</span>
      </Link>
    </header>
  );
}
