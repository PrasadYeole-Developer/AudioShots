"use client";

import dynamic from "next/dynamic";

const SmoothScrollWrapper = dynamic(
  () => import("./components/SmoothScrollWrapper"),
  { ssr: false }
);

import React, { useRef } from "react";
import HeroSection from "./components/Home";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import About from "./components/About";
import Advertise from "./components/Advertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  const tl = useRef(gsap.timeline());
  return (
    <SmoothScrollWrapper>
      <div className="relative inset-0 bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] overflow-x-clip">
        <div className="absolute w-[40rem] h-[40rem] top-[-10%] left-[-10%] bg-purple-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute w-[30rem] h-[30rem] bottom-[-10%] right-[-10%] bg-pink-500/10 rounded-full blur-[100px]"></div>
        <HeroSection tl={tl.current} />
        <Navbar tl={tl.current} />
      </div>
      <About />
      <Advertise />
      <Contact />
      <Footer />
    </SmoothScrollWrapper>
  );
};

export default Home;
