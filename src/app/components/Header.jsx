import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-blue-700 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
          {/* I'll be adding logo */}
        <Link href="/" className="text-2xl font-extrabold group cursor-pointer">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-800 drop-shadow-md group-hover:from-blue-700 group-hover:to-blue-500">
            Leaner
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-md group-hover:from-yellow-600 group-hover:to-orange-400">
            App
          </span>
        </Link>
        <nav>
            <ul className="flex items-center space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/sign-in">Sign in</Link>
            </ul>
        </nav>
      </div>
    </header>
  );
}
