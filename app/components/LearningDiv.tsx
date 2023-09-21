"use client";
import { useInView } from "react-intersection-observer";
import LearningGrid from "./LearningGrid";

const LearningDiv = () => {
  const [learningRef, learningInView] = useInView({
    threshold: 0.0,
    triggerOnce: true,
  });

  return (
    <div
          ref={learningRef}
          className={`opacity-0 ${learningInView ? "animate-up" : ""}`}
        >
          <LearningGrid />
        </div>
  )
}

export default LearningDiv