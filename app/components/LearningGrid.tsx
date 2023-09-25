"use client";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import {
  SiPython,
  SiRust,
  SiCodewars,
  SiLeetcode
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const current: Technology[] = [
  {
    name: "Python ",
    icon: SiPython,
    color: "text-[#FFD343]",
  },
  {
    name: "Rust",
    icon: SiRust,
    color: "text-[#D7611B]",
  },
  {
    name: "CodeWars",
    icon: SiCodewars,
    color: "text-[#F05656]",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "text-[#F89F1B]",
  },
];


const LearningGrid = () => {
  return (
    <>
      <div className="my-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {current.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className={`${tech.color} flex flex-col items-center justify-center bg-ctp-base p-10 rounded-xl tech-card border-2 border-ctp-surface0`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={60} />
                <p className="mt-2 font-bold text-center text-[1.0rem]">{tech.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LearningGrid;
