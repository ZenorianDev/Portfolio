"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md z-50">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
