import React, { useState } from "react";
import Dice1 from "../../assets/dice_1.svg";
import Dice2 from "../../assets/dice_2.svg";
import Dice3 from "../../assets/dice_3.svg";
import Dice4 from "../../assets/dice_4.svg";
import Dice5 from "../../assets/dice_5.svg";
import Dice6 from "../../assets/dice_6.svg";

type Props = {};

const PlayGame = (props: Props) => {
  const [showRules, setShowRules] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null | undefined>(null);
  const [diceNumber, setDiceNumber] = useState<number>(1);
  const [totalScore, setTotalScore] = useState(0)
  const [error, setError] =useState("")

  const numbers = [1, 2, 3, 4, 5, 6];

  const Text = [
    { label: "Select any number" },
    { label: "Click on dice image" },
    {
      label:
        "after click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted ",
    },
  ];

  const generateRandomNumber =  (min, max) => {
    const random =  Math.floor(Math.random() * (max - min) + min);
    return random
  };


  const handleSelectedNumber = (item: number) => {
    setSelectedNumber(item);
  };

  const validateSelectedNumber = () => {
      if (selectedNumber === null) {
      return false;
    }
    return true;
  };

  const handleDiceRoll = () => {
      if (selectedNumber === null) {
          setError("You have not selected any number")
          return
      }
      setError("")
      
    const isValid = validateSelectedNumber();
    if (isValid) {
     const generated  = generateRandomNumber(1, 7);
     setDiceNumber(generated)
     if (generated === selectedNumber) {
        console.log("true",generated)
         setTotalScore(generated + totalScore)
     }else{
         console.log("false")
        setTotalScore(totalScore - 2)
     }
    }
      setSelectedNumber(null)
   
  };

  const resetScore = () => {
    setSelectedNumber(null)
    setDiceNumber(1)
    setTotalScore(0)
  };

  return (
    <main className={`h-screen ${showRules && "mb-10"}`}>
      <div className="w-11/12 mx-auto ">
        <section className="flex flex-col">
            {
                      error.length > 1 && (
            <h2 className="text-red-600 font-medium text-lg  text-end pt-3 min-h-[5rem]">
                          {error}
            </h2>
                        
                      )
            }
          <ul className="flex gap-8 justify-end pt-4">
            {numbers?.map((item) => (
              <li
                onClick={() => handleSelectedNumber(item)}
                className={`border cursor-pointer ${
                  selectedNumber === item && "bg-black text-white"
                } border-black w-[72px] h-[72px] flex items-center justify-center font-bold text-2xl`}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <div>
                <h1 className={`font-medium text-8xl ${totalScore < 0 && "text-red-300"}`}>{totalScore}</h1>
              <span className="font-medium text-base">Total Score</span>
            </div>
            <h2 className="font-bold text-2xl">Select Number</h2>
          </div>
        </section>

        <section className="flex flex-col items-center gap-4">
          <div onClick={handleDiceRoll}>
            {diceNumber === 1 ? (
              <img src={Dice1} className="w-60 h-60 cursor-pointer" />
            ) : diceNumber === 2 ? (
              <img src={Dice2} className="w-60 h-60 cursor-pointer" />
            ) : diceNumber === 3 ? (
              <img src={Dice3} className="w-60 h-60 cursor-pointer" />
            ) : diceNumber === 4 ? (
              <img src={Dice4} className="w-60 h-60 cursor-pointer" />
            ) : diceNumber === 5 ? (
              <img src={Dice5} className="w-60 h-60 cursor-pointer" />
              ) : diceNumber === 6 ? (
              <img src={Dice6} className="w-60 h-60 cursor-pointer" />
            ) : null}
          </div>

          <p>Click on Dice to roll</p>
          <button
            className="text-black bg- border border-black w-56 h-11 flex justify-center items-center rounded-md"
            onClick={resetScore}
          >
            Reset Score
          </button>
          <button
            className="bg-black text-white w-56 h-11 flex justify-center items-center rounded-md"
            onClick={() => setShowRules(!showRules)}
          >
            Show Rules
          </button>
        </section>

        {showRules && (
          <section className="flex justify-center mt-14  ">
            <div className="w-2/6 h-52 mx-auto bg-[#FBF1F1] px-2 py-3 shadow-lg">
              <h2 className="font-bold text-xl">How to play dice game</h2>

              <ul className="flex flex-col gap-1 mt-3">
                {Text?.map((item) => {
                  return (
                    <li className="font-medium text-base">{item?.label}</li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default PlayGame;
