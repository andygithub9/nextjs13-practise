import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex p-5 bg-blue-500 space-x-2">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        todos
      </Link>
      <Link
        href="/search"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        search
      </Link>
      <Link
        href="/dashboard"
        className="!ml-auto px-2 py-1 bg-white text-red-500 rounded-lg"
      >
        dashboard
      </Link>
      <Link
        href="/developer"
        className="px-2 py-1 bg-white text-red-500 rounded-lg"
      >
        developer
      </Link>
    </header>
  );
}

export default Header;
