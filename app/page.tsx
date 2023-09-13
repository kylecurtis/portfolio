import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Bg from "/public/grid.svg";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
