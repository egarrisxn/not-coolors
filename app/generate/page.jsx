"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SiMedibangpaint } from "react-icons/si";
import { randomFacts } from "@/utils/data";

export default function GeneratePage() {
  const router = useRouter();
  const [randomFact, setRandomFact] = useState("..........");
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
    setRandomFact(randomFacts[Math.floor(Math.random() * randomFacts.length)]);
    generateRandomColorString();
    return () => {
      document.title = "Generating...";
    };
  }, []);

  return (
    <>
      <div className="h-screen w-screen p-5">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <SiMedibangpaint className="absolute size-16 animate-ping text-pink-400" />
            <SiMedibangpaint className="size-20 text-pink-400" />
          </div>
          <p className="mt-10 text-center text-xl font-bold">
            Generating Colors.....
          </p>
          <p className="text-center text-lg font-semibold">
            Random Fact : {randomFact}
          </p>
        </div>
      </div>
    </>
  );
}
