"use client";

import dynamic from "next/dynamic";
import React, { useRef } from "react";
import gsap from "gsap";

const SmoothScrollWrapper = dynamic(
  () => import("./components/SmoothScrollWrapper"),
  { ssr: false }
);

const HeroSection = dynamic(() => import("./components/Home"), {
  ssr: false,
});
const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

const About = dynamic(() => import("./components/About"));
const Advertise = dynamic(() => import("./components/Advertise"));
const Contact = dynamic(() => import("./components/Contact"));

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
