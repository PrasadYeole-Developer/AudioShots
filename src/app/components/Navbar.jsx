"use client";

import { Button } from "@/app/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ tl }) => {
  const logo = useRef();
  const navlinks = useRef();
  const btnW = useRef();
  const btn = useRef();
  const { contextSafe } = useGSAP();
  useGSAP(() => {
    tl.from(
      logo.current,
      {
        y: -50,
        duration: 0.5,
        delay: 0.3,
        opacity: 0,
      },
      "-=1"
    );
    tl.from(
      navlinks.current.querySelectorAll("li"),
      {
        y: -50,
        duration: 0.5,
        opacity: 0,
        stagger: 0.15,
      },
      "nav"
    );
    tl.from(
      btnW.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      "nav"
    );
  }, []);

  const onEnter = contextSafe(() => {
    gsap.fromTo(
      btn.current,
      {
        backgroundColor: "#fff",
        color: "#111",
        duration: 0.25,
      },
      {
        backgroundColor: "black",
        color: "white",
        duration: 0.25,
        ease: "back.inOut",
      }
    );
  });
  const onLeft = contextSafe(() => {
    gsap.to(btn.current, {
      backgroundColor: "white",
      color: "black",
      duration: 0.1,
      ease: "power2.inOut",
    });
  });

  return (
    <nav className="navbar top-0 left-0 w-full fixed z-90 flex items-center justify-around py-[0.65rem] bg-[#0e0e0e]/60 hover:bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/10 shadow-md transition-all duration-300 ease-in-out">
      <h1
        ref={logo}
        className="text-white text-[1.6rem] font-sans font-bold cursor-pointer flex items-center gap-3"
      >
        <img
          src="logo_audioshots.webp"
          alt="[ER]"
          className="rounded h-[2.6rem]"
        />{" "}
        AudioShots
      </h1>
      <ul
        ref={navlinks}
        className="flex decoration-0 gap-16 text-[#8b8b8b] text-[1rem] font-semibold font-sans ml-[-4rem]"
      >
        <li>
          <a
            href="#home"
            data-scroll-to
            className="hover:text-gray-300 cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            data-scroll-to
            className="hover:text-gray-300 cursor-pointer"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#contact"
            data-scroll-to
            className="hover:text-gray-300 cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>

      <div ref={btnW} className="bg-none">
        <Button
          ref={btn}
          onMouseEnter={onEnter}
          onMouseLeave={onLeft}
          className="font-sans text-black bg-white border cursor-pointer py-3 px-4 rounded-sm active:scale-90"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
