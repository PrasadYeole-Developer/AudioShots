"use client";

import { Button } from "@/app/components/ui/button";
import gsap, { Power0 } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ tl }) => {
  const logo = useRef();
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
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
  useGSAP(() => {
    if (!isOpen || !menuRef.current) return;

    gsap.fromTo(
      menuRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      }
    );
  }, [isOpen]);

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
    <>
      <nav className="navbar top-0 left-0 w-full fixed z-[90] flex items-center justify-around py-[0.65rem] bg-[#0e0e0e]/60 hover:bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/10 shadow-md transition-all duration-300 ease-in-out">
        <button onClick={() => (window.location.href = "/")}>
          <h1
            ref={logo}
            className="text-white text-[1.6rem] font-sans font-bold cursor-pointer flex items-center gap-3"
          >
            <Image
              src="/logo_audioshots.webp"
              alt="AudioShots Logo"
              width={42}
              height={42}
              className="rounded"
            />
            AudioShots
          </h1>
        </button>

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

        <div className="block btn" ref={btnW}>
          <Button
            ref={btn}
            onMouseEnter={onEnter}
            onMouseLeave={onLeft}
            className="font-sans bg-white text-black border cursor-pointer py-2 px-6 rounded-sm mt-2 active:scale-95"
          >
            Get Started
          </Button>
        </div>

        <div className="hidden menu">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <X size={28} color="#fff" />
            ) : (
              <Menu size={28} color="#fff" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={menuRef}
          className="floater fixed top-[4.5rem] left-0 w-full bg-[#0e0e0e] flex flex-col items-center py-4 gap-4 text-white font-semibold z-40"
        >
          <ul className="flex flex-col items-center decoration-0 gap-3 justify-center text-[#8b8b8b] text-[1rem] font-semibold font-sans bar">
            <li>
              <button
                onClick={() => {
                  window.locoScroll?.scrollTo("#home");
                  setIsOpen(false);
                }}
                className="hover:text-gray-300 cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.locoScroll?.scrollTo("#about");
                  setIsOpen(false);
                }}
                className="hover:text-gray-300 cursor-pointer"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.locoScroll?.scrollTo("#contact");
                  setIsOpen(false);
                }}
                className="hover:text-gray-300 cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>

          <Button
            className="font-sans bg-white text-black border cursor-pointer py-2 px-6 rounded-sm mt-2 active:scale-95 floatBtn"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
