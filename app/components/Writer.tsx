"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { alkatra } from "../fonts";

const Writer = () => {
  return (
    <div className={alkatra.className}>
      <div className="text-[1.4rem] md:text-[1.4rem] xl:text-[1.5rem] text-ctp-text font-bold pl-2 my-4 px-4">
        <Typewriter
          options={{
            strings: [
              "Web Development",
              "Data Analysis",
              "Data Visualization",
              "3D Design & Animation",
              "Game Development",
              "Music Production"

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
