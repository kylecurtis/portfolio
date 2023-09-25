/* Package Imports */
import Image from "next/image";

/* Component Imports */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import Title from "./components/Title";
import EducationDiv from "./components/EducationDiv";
import CertificationDiv from "./components/CertificationDiv";
import StackDiv from "./components/StackDiv";
import LearningDiv from "./components/LearningDiv";

/* Assets */
import Bg from "/public/grid.svg";

/* Font Imports */
import { inter } from "./fonts";

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <div className="relative w-screen h-screen">
        <div className="absolute inset-0 md:flex items-center justify-center z-[-1] ">
          <Image
            className="!fixed z-[-1]"
            src={Bg}
            alt="test"
            fill
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <Hero />
      </div>

      <div className="m-[100px]"></div>
      <div className="max-w-5xl mx-auto px-[40px]">
        <span id="education"></span>
        <Title title="🎓 Education" />
        <EducationDiv />

        <Divider />

        <span id="certifications" ></span>
        <Title title="🤝 Certifications" />
        <CertificationDiv />

        <Divider />

        <span id="using"></span>
        <Title title="💻 What I'm Using" />
        <StackDiv />

        <Divider />

        <span id="learning"></span>
        <Title title="📖 What I'm Learning" />
        <LearningDiv />

        <Divider />

        <div className="m-[100px]"></div>
      </div>
    </main>
  );
}
