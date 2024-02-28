"use client";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import Divider from "./Divider";

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
        <p className="text-[1.2rem] text-ctp-sky">
          Associate of Science (A.S.)
        </p>
        <p className="text-[1.0rem] text-ctp-text mt-2">
          Computer Programming and Analysis
        </p>
        <p className="text-[1.0rem] mt-8">
          <span className="text-ctp-red">Valencia College</span> (May, 2024)
        </p>
      </Card>

      <br />

      <Card>
        <p className="text-[1.2rem] text-ctp-sky">
          Bachelor of Applied Science (B.A.S.)
        </p>
        <p className="text-[1.0rem] text-ctp-text mt-2">
          Computing Technology and Software Development
        </p>
        <p className="text-[1.0rem] mt-8">
          <span className="text-ctp-red">Valencia College</span> (In Progress)
        </p>
      </Card>
    </div>
  );
};

export default EducationDiv;
