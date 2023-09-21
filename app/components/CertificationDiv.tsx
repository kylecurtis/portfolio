"use client";
import { useInView } from "react-intersection-observer";
import CertGrid from "./CertGrid";

const CertificationDiv = () => {
  const [certRef, certInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={certRef}
      className={`opacity-0 ${certInView ? "animate-left" : ""}`}
    >
      <CertGrid />
    </div>
  );
};

export default CertificationDiv;
