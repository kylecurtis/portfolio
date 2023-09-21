"use client";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

const current: Technology[] = [
  {
    name: "HTML5 ",
    icon: SiHtml5,
    color: "text-[#e34c26]",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "text-[#2965f1]",
  },
  {
    name: "SASS",
    icon: SiSass,
    color: "text-[#CD6799]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#f7df1e]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178c6]",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#38bdf8]",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-[#7cc5d9]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-ctp-text",
  },
];


const TechGrid = () => {
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
                <Icon size={75} />
                <p className="mt-2 font-bold text-center">{tech.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechGrid;
