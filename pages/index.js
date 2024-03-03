import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz</h1>
        <div className="flex space-x-4">
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
        </div>
      </div>
    </>
  );
}
export default Home;
