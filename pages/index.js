import React from "react";
import Link from "next/link";

export default function Home() {
  /**<li>
            <Link href="/gameLocal">Game Local</Link>
          </li>
          <li>
            <Link href="/adminLocal">Admin Local</Link>
          </li> */
  return (
    <>
      <div
        className="flex flex-col items-center justify-center max-w-screen"
        style={{ height: "calc(100vh - 80px" }}
      >
        <h1 className=" text-2xl sm:text-4xl font-bold mb-6">
          Welcome to the Quiz
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/admin"
            className="inline-block w-[80px] text-center bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Admin
          </Link>
          <Link
            href="/quizPage"
            className="inline-block w-[80px] text-center bg-purple-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Guest
          </Link>
        </div>
        <div className="flex flex-col w-full items-center mt-6">
          <p className="w-full font-semibold pb-2 text-center text-xl">
            Create with local storage
          </p>
          <div className="flex space-x-4">
            <Link
              href="/adminLocal"
              className="w-[80px] text-center bg-pink-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Create
            </Link>
            <Link
              href="/gameLocal"
              className="w-[80px] text-center bg-blue-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Play
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
