"use client";

import React, { useRef } from "react";
import AboutCards from "./AboutCards";

const About = () => {
  const cards = useRef();
  return (
    <div
      id="about"
      data-scroll-section
      className="bg-[#181818] w-full min-h-screen text-white pt-[5rem] py-[3rem] px-[1rem] scroll-mt-28 flex flex-col items-center select-none"
    >
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        About Us
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center text-[1rem] font-sans text-gray-500 w-[50%]">
        Brought to you by Weoto Technologies, AudioShots lets creators upload,
        edit, and share short-form audio content. Grow your audience, track
        analytics, and make an impact with your voice.
      </p>
      <div
        data-scroll
        data-scroll-speed="2"
        ref={cards}
        className="cards mt-16 flex items-center justify-around w-full"
      >
        <AboutCards />
      </div>
    </div>
  );
};

export default About;
