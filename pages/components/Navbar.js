import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-screen h-10 bg-slate-100 shadow-xl">
      <div className="flex flex-row justify-between px-4 sm:px-6">
        <ul className="flex flex-row w-full justify-between items-center">
          <li>
            <Link href="/">Start</Link>
          </li>
          <li>
            <Link href="/admin">Admin </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
