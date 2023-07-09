"use client";

import { usePathname } from "next/navigation";
import { House, MagnifyingGlass } from "../icons";
import Link from "next/link";

export default function TopBar() {
  const pathname = usePathname();

  return (
    <div className="bg-[#121212] rounded-lg flex flex-col py-2 px-3 text-neutral-400">
      <Link
        className={`my-1 px-3 hover:text-neutral-100 flex items-center gap-5 h-10 ${
          pathname == "/" ? "text-white" : ""
        }`}
        href="/"
      >
        <House size={24} weight={pathname == "/" ? "fill" : "bold"} />
        <span className="font-bold">Home</span>
      </Link>

      <Link
        className={`my-1 px-3 hover:text-neutral-100 flex items-center gap-5 h-10 ${
          pathname == "/search" ? "text-white" : ""
        }`}
        href="/search"
      >
        <MagnifyingGlass
          size={24}
          weight={pathname == "/search" ? "fill" : "bold"}
        />
        <span className="font-bold">Search</span>
      </Link>
    </div>
  );
}
