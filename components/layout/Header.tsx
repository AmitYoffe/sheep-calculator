"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BreadCrumbs } from "./BreadCrumbs";
import { DarkModeToggle } from "./DarkModeToggle";
import PagesMenu from "./PagesMenu";
import { useTheme } from "./ThemeProvider";
import SheepSvg from "./dynamicSvgs/SheepSvg";

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
        <SheepSvg theme={theme} className="size-8" />
        <span className="sr-only">Sheep Worth Calculator</span>
      </Link>
    </header>
  );
}
