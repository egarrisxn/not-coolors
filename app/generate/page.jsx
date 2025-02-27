"use client";
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

const colorFacts = [
  "Colors can affect appetite; red and yellow are thought to stimulate hunger.",
  "The color purple was historically associated with royalty due to the rarity and cost of purple dye.",
  "Yellow is the most visible color in the dark, which is why many road signs are yellow.",
  "The color green is known to have a calming effect and is often used in hospitals and waiting rooms.",
  "Some species of octopuses can change their skin color to blend in with their surroundings.",
  "The color orange was named after the fruit, which was named after the Sanskrit word for the color.",
  "Studies have shown that people are more productive in blue-colored environments.",
  "In some cultures, the color white represents mourning, while in others it symbolizes purity and peace.",
  "Red is often used in advertising to grab attention and evoke a sense of urgency.",
  "In the natural world, some animals, like chameleons, use color changes for communication and to attract mates.",
];

const Generate = () => {
  const router = useRouter();
  const [randomFunFact, setRandomFunFact] = useState("..........");
  const generateRandomColorString = () => {
    let s = "";
    for (let i = 0; i < 5; i++) {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      randomColor = randomColor.padStart(6, "0");
      s += randomColor + "-";
    }
    s = s.substring(0, s.length - 1);
    router.push(`/palette/${s}`);
  };

  useEffect(() => {
    document.title = "Generating...";
    setRandomFunFact(colorFacts[Math.floor(Math.random() * colorFacts.length)]);
    generateRandomColorString();
    return () => {
      document.title = "Generating...";
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen p-5">
        <div className="flex justify-center items-center flex-col h-full">
          <div className="relative flex justify-center items-center">
            <AiFillHeart className="h-16 w-16 text-red-600 absolute animate-ping" />
            <AiFillHeart className="h-20 w-20 text-red-600" />
          </div>
          <p className="text-center font-bold mt-10 text-xl">
            Generating Colors.....
          </p>
          <p className="text-center font-semibold text-lg">
            Fun Fact : {randomFunFact}
          </p>
        </div>
      </div>
    </>
  );
};

export default Generate;
