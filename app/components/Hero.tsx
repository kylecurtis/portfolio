"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Writer from "./Writer";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWindows,
  FaSoundcloud,
  FaAngleDown,
} from "react-icons/fa";

import { alkatra, rubik } from "../fonts";

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
  const codeString = `struct About {
    system: Vec<&'static str>,
    skills: Vec<&'static str>,
    stack: Vec<&'static str>,
    learning: Vec<&'static str>,
}

impl About {
    fn new() -> Self {
        About {
            system: vec!["Linux", "Windows"],
            skills: vec!["Git", "ReactJS"],
            stack: vec!["Bash", "Jupyter", "Python", "Rust", "TypeScript"],
            learning: vec!["Numpy", "Pandas", "Plotly", "PyTorch"],
        }
    }
}`;

  return (
    <div className="h-screen w-screen flex items-center text-ctp-text">
      <div className="flex flex-col items-center xl:flex-row justify-center md:justify-between px-[40px] xl:px-[80px] 2xl:px-[150px] max-w-[1800px] w-full text-center xl:text-left m-auto ">
        {/* FIRST DIV */}
        <div className="flex-1 md:items-start w-full md:mx-[50px] p-4 rounded-xl">
          <p className="text-[1.4rem] md:text-[1.5rem] font-semibold mt-10">
            Hi, my name is
          </p>
          <h1
            className={`text-[3.0rem] md:text-[3.0rem] xl:text-[4.5rem] mt-4 font-bold ${alkatra.className}`}
          >
            Kyle Curtis
          </h1>
          <Writer />
        </div>

        {/* SECOND DIV */}
        <div className="w-full xl:w-1/2 md:mx-4 p-4 rounded-xl text-xl bg-ctp-base border-2 border-ctp-surface0">
          <SyntaxHighlighter language="rust" style={vscDarkPlus}>
            {codeString}
          </SyntaxHighlighter>

          <div className="mt-4 float-right">
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
