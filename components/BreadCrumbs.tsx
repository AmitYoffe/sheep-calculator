"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function BreadCrumbs() {
  const pathName = usePathname();

  return pathName.includes("result") ? (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="cursor-default">Result</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ) : (
    <>sheep sheep sheep!</>
  );
}
