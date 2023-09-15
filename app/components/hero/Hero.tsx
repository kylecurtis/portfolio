"use client";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWindows,
  FaSoundcloud,
  FaAngleDown,
} from "react-icons/fa";

import { Alkatra } from "next/font/google";
import { Rubik } from "next/font/google";
import Writer from "../writer/Writer";

const alkatra = Alkatra({
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
});

interface Social {
  title: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

const socials: Social[] = [
  {
    title: "Github",
    icon: FaGithub,
    url: "https://www.github.com",
    color: "text-[]",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com",
    color: "text-[#0077B5]",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    url: "https://www.twitter.com",
    color: "text-[#1DA1F2]",
  },
  {
    title: "Soundcloud",
    icon: FaSoundcloud,
    url: "https://www.soundcloud.com",
    color: "text-[#F26F23]",
  },
];

const Hero = () => {
  const codeString = `const About = {
    skills: ['React', 'Node', 'Git'],
    stack: ['TypeScript', 'Python', 'Rust', 'Bash'],
    system: ['Windows', 'Linux'],
    hardWorker: true,
    problemSolver: true,
    hirable: true,
}`;

  return (
    <div className="h-screen w-screen flex items-center text-ctp-text">
      <div className="flex flex-col items-center xl:flex-row justify-center md:justify-between px-[40px] xl:px-[80px] 2xl:px-[150px] max-w-[2000px] w-full text-center xl:text-left m-auto ">
        {/* FIRST DIV */}
        <div className="flex-1 md:items-start w-full  md:mx-4 p-4 rounded-xl">
          <p className="text-xl md:text-2xl font-semibold">Hi, my name is</p>
          <h1
            className={`text-5xl md:text-6xl xl:text-8xl mt-4 font-bold ${alkatra.className}`}
          >
            Kyle Curtis
          </h1>
          <Writer />
        </div>

        {/* SECOND DIV */}
        <div className="w-full xl:w-1/2 md:mx-4 p-4 rounded-xl text-xl bg-ctp-base border-2 border-ctp-surface0">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {codeString}
          </SyntaxHighlighter>

          <div className="mt-4">
            {socials.map((social) => (
              <a
                key={social.title}
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
              >
                <button
                  className={`hover:underline bg-ctp-crust ${social.color} font-bold border-2 border-ctp-surface1 rounded-2xl p-3 md:p-4 xl:p-4 mr-4`}
                >
                  <social.icon size={20} />
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
