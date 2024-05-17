import React, { useState } from "react";
import Dice1 from "../../assets/dices1.svg";
import PlayGame from "../PlayGame/PlayGame";

const StartGame = () => {
  const [play, setPlay] = useState(false);
  return (
    <>
      {!play && (
        <main className="h-screen flex justify-center items-center">
          <div className="w-5/6 mx-auto flex items-center gap-10">
            <div>
              <img src={Dice1} />
            </div>

            <div className="flex flex-col items-end gap-2">
              <h2 className="uppercase font-bold text-8xl">Dice game</h2>
              <button
                className="bg-black text-white rounded-md w-56 h-10"
                onClick={() => setPlay(true)}
              >
                Play Now
              </button>
            </div>
          </div>
        </main>
      )}
      {play && <PlayGame />}
    </>
  );
};

export default StartGame;
