"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn("absolute left-8 top-8", pathname === "/" && "hidden")}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium flex flex-row gap-2 items-center",
          "hover:opacity-60"
        )}
        style={{ transition: "all 0.3s ease" }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        Home
      </Link>
    </header>
  );
}
