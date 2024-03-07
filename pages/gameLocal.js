import React from "react";
import Quiz from "./components/localstorage/game_local/Quiz";

function gameLocal() {
  return (
    <div className="max-w-screen items-center flex flex-col mt-10">
      <div className="mx-auto">
        <Quiz />
      </div>
    </div>
  );
}

export default gameLocal;
