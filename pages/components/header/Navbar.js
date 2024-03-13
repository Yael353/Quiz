import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="max-w-screen h-10 bg-black/95 text-white shadow-xl">
      <div className="flex items-center h-full flex-row px-4 sm:px-6">
        <ul className="flex flex-row w-full justify-center gap-4 sm:gap-8 md:gap-10 items-center">
          <li>
            <Link href="/" className="font-semibold sm:tracking-wider text-sm sm:text-[16px] md:text-[18px] tracking-wider hover:underline">Start</Link>
          </li>
          <li>
            <Link href="/game" className="font-semibold sm:tracking-wider text-sm sm:text-[16px] md:text-[18px] tracking-wider hover:underline">Game Context</Link>
          </li>
          <li>
            <Link href="/adminCont" className="font-semibold sm:tracking-wider text-sm sm:text-[16px] md:text-[18px] tracking-wider hover:underline">Admin Context</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
