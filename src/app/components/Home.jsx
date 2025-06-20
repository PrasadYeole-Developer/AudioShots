"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Waveform from "./Waveform";

const HeroSection = ({ tl }) => {
  let hero = useRef();
  let head = useRef();
  let h2 = useRef();
  let image = useRef();
  let para = useRef();

  useGSAP(() => {
    const elements = [head.current, h2.current, image.current, para.current];
    tl.from(
      elements,
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      },
      "hero"
    );
  }, []);
  return (
    <div id="home" data-scroll-section className="z-10 w-full h-screen">
      <div
        ref={hero}
        className="text-white flex flex-col items-center justify-center gap-3 w-full h-full"
      >
        <div className="overflow-hidden text-[6rem] font-bold font-sans">
          <h1 ref={head}>AudioShots</h1>
        </div>

        <div className="overflow-hidden text-[1.7rem] font-bold font-sans mt-[-1.5rem]">
          <h2 ref={h2}>For Creators</h2>
        </div>

        <div className="wave flex gap-1 items-center overflow-hidden my-8">
          <Waveform />
        </div>

        <div className="overflow-hidden text-[1.1rem] font-sans text-gray-500 w-[50%] text-center">
          <p ref={para}>
            Turn your voice into captivating content. Upload short audios,
            fine-tune them with built-in editing tools, and track your
            performance with real-time analytics. Start creating today and reach
            thousands of listeners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
