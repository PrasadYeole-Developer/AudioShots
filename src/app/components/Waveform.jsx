"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Waveform = () => {
  useGSAP(() => {
    gsap.to("rect", {
      scaleY: (i) => 0.3 + Math.random() * 0.9,
      transformOrigin: "center bottom",
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.03,
        from: "center",
      },
    });
  }, []);

  return (
    <svg
      width="350"
      height="80"
      viewBox="0 0 300 80"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="45" width="6" height="35" rx="3" ry="3" />
      <rect x="12" y="20" width="6" height="60" rx="3" ry="3" />
      <rect x="24" y="30" width="6" height="50" rx="3" ry="3" />
      <rect x="36" y="60" width="6" height="20" rx="3" ry="3" />
      <rect x="48" y="10" width="6" height="70" rx="3" ry="3" />
      <rect x="60" y="35" width="6" height="45" rx="3" ry="3" />
      <rect x="72" y="15" width="6" height="65" rx="3" ry="3" />
      <rect x="84" y="50" width="6" height="30" rx="3" ry="3" />
      <rect x="96" y="25" width="6" height="55" rx="3" ry="3" />
      <rect x="108" y="60" width="6" height="20" rx="3" ry="3" />
      <rect x="120" y="40" width="6" height="40" rx="3" ry="3" />
      <rect x="132" y="50" width="6" height="30" rx="3" ry="3" />
      <rect x="144" y="30" width="6" height="50" rx="3" ry="3" />
      <rect x="156" y="20" width="6" height="60" rx="3" ry="3" />
      <rect x="168" y="60" width="6" height="20" rx="3" ry="3" />
      <rect x="180" y="10" width="6" height="70" rx="3" ry="3" />
      <rect x="192" y="35" width="6" height="45" rx="3" ry="3" />
      <rect x="204" y="15" width="6" height="65" rx="3" ry="3" />
      <rect x="216" y="50" width="6" height="30" rx="3" ry="3" />
      <rect x="228" y="25" width="6" height="55" rx="3" ry="3" />
      <rect x="240" y="60" width="6" height="20" rx="3" ry="3" />
      <rect x="252" y="40" width="6" height="40" rx="3" ry="3" />
      <rect x="264" y="50" width="6" height="30" rx="3" ry="3" />
      <rect x="276" y="35" width="6" height="45" rx="3" ry="3" />
      <rect x="288" y="20" width="6" height="60" rx="3" ry="3" />
    </svg>
  );
};

export default Waveform;
