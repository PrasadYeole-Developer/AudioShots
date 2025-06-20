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
      <div className="relative inset-0 bg-gradient-grid select-none">
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
