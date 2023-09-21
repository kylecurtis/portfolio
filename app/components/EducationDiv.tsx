"use client";
import Card from "./Card";
import { useInView } from "react-intersection-observer";

const EducationDiv = () => {
  const [eduRef, eduInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
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
  );
};

export default EducationDiv;
