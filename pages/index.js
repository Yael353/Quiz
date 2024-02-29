import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

 function Home() {
  return (
    <>
      <Navbar />
      <Link
        href="/admin"
        className="inline-block bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
      >
        Admin
      </Link>
      <Link
        href="/quiz"
        className="inline-block bg-purple-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
      >
        Guest
      </Link>
    </>
  );
}
export default Home
