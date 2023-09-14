"use client";
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Bg from "/public/grid.svg";
import Hero from "./components/hero/Hero";
import { useInView } from "react-intersection-observer";
import { Alkatra, Inter } from "next/font/google";
import Card from "./components/card/Card";
import Divider from "./components/divider/Divider";
import Title from "./components/title/Title";

const alkatra = Alkatra({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <div className="relative w-screen h-screen">
        <div className="absolute inset-0 md:flex items-center justify-center z-[-1] ">
          <Image
            src={Bg}
            alt="test"
            fill
            quality={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <Hero />
      </div>

      <div className="max-w-5xl mx-auto px-[40px]">
        <Title title="Education"/> 
        <div ref={ref} className={`opacity-0 ${inView ? "animate-right" : ""}`}>
          <Card>
            <p className="text-xl md:text-2xl text-ctp-sky">Associates of Science (A.S)</p>
            <p className="text-lg md:text-xl text-ctp-text mt-2">
              Computer Programming and Analysis
            </p>
            <p className="text-lg md:text-xl mt-8">
              <span className="text-ctp-red">Valencia College</span> (Jan 2024)
            </p>
          </Card>
        </div>

        <Divider />

        <div className="m-[1000px]"></div>
      </div>
    </main>
  );
}
