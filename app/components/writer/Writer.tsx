"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { Alkatra } from "next/font/google";

const alkatra = Alkatra({
  subsets: ["latin"],
});

const Writer = () => {
  return (
    <div className={alkatra.className}>
      <div className="text-lg md:text-2xl xl:text-[40px] text-ctp-text font-bold pl-2 my-4 px-4">
        <Typewriter
          options={{
            strings: [
              "Web Designer",
              "React Developer",
              "Linux Enthusiast",
              "Lifelong Student" 
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Writer;
