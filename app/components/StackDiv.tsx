"use client";
import { useInView } from "react-intersection-observer";
import TechGrid from "./TechGrid";

const StackDiv = () => {
  const [stackRef, stackInView] = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });

  return (
    <div
      ref={stackRef}
      className={`opacity-0 ${stackInView ? "animate-up" : ""}`}
    >
      <TechGrid />
    </div>
  );
};

export default StackDiv;
