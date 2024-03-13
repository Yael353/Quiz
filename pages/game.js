import React from "react";
import TheGame from "./components/game/TheGame";

function game() {
  return (
    <div className="max-w-screen items-center mt-10 flex flex-col" style={{height: 'calc(100vh - 80px'}}>
      <div className="mx-auto">
        <TheGame />
      </div>
    
    </div>
  );
}

export default game;
