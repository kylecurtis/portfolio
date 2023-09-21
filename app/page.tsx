"use client";

/* Package Imports */
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Bg from "/public/grid.svg";

/* Component Imports */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Divider from "./components/Divider";
import Title from "./components/Title";
import CertGrid from "./components/CertGrid";
import TechGrid from "./components/TechGrid";
import LearningGrid from "./components/LearningGrid";

/* Font Imports */
import { inter } from "./fonts";

export default function Home() {
  const [eduRef, eduInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [certRef, certInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [stackRef, stackInView] = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });

  const [learningRef, learningInView] = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });

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
        <div
          ref={eduRef}
          className={`opacity-0 ${eduInView ? "animate-right" : ""}`}
        >
          <Card>
            <p className="text-xl md:text-2xl text-ctp-sky">
              Associates of Science (A.S)
            </p>
            <p className="text-lg md:text-xl text-ctp-text mt-2">
              Computer Programming and Analysis
            </p>
            <p className="text-lg md:text-xl mt-8">
              <span className="text-ctp-red">Valencia College</span> (Jan 2024)
            </p>
          </Card>
        </div>

        <Divider />

        <span id="certifications" className="h-[40px]"></span>
        <Title title="🤝 Certifications" />
        <div
          ref={certRef}
          className={`opacity-0 ${certInView ? "animate-left" : ""}`}
        >
          <CertGrid />
        </div>

        <Divider />
        <span id="using"></span>
        <Title title="💻 What I'm Using" />

        <div
          ref={stackRef}
          className={`opacity-0 ${stackInView ? "animate-up" : ""}`}
        >
          <TechGrid />
        </div>

        <Divider />

        <span id="learning"></span>
        <Title title="📖 What I'm Learning" />
        <div
          ref={learningRef}
          className={`opacity-0 ${learningInView ? "animate-up" : ""}`}
        >
          <LearningGrid />
        </div>

        <Divider />

        <div className="m-[1000px]"></div>
      </div>
    </main>
  );
}
