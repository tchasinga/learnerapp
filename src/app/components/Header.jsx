import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      {/* I'll be adding logo */}
      <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 drop-shadow-md group-hover:from-blue-700 group-hover:to-blue-500">
          Leaner
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-md group-hover:from-yellow-600 group-hover:to-orange-400">
          App
        </span>
      </Link>
    </header>
  );
}
