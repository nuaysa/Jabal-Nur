"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="text-white w-[98.9vw]">
        <nav className="flex items-center ">
            <Link href="/" className="flex items-center">
              <Image alt="brand" src="/logo.png" width={100} height={100} />
              <p className="font-extrabold max-text-[25px] absolute left-24">Jabal Nur</p>
            </Link>
          <div className="block mt-2 absolute right-8">
            <button aria-label="navbar" onClick={toggleMenu} 
            onMouseLeave={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" 
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`bg-orange-500 lg:hidden ${isOpen ? "flex" : "hidden"} mt-[80px] w-screen flex flex-col gap-3 mr-40 text-center  items-center overflow-hidden rounded-b-lg py-2`}>
          <Link href="/" className="text-white hover:text-neutral-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-neutral-300">
            About
          </Link>
          <Link href="/service" className="text-white hover:text-neutral-300">
            Service
          </Link>
        </div>
      </nav>
    </div>
  );
};
