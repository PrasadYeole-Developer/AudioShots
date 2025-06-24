"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const container = marqueeRef.current;
    const totalWidth = container.scrollWidth;

    gsap.to(container, {
      x: `-${totalWidth * 3}`,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div
      data-scroll-section
      className="w-full h-[75vh] bg-[#0C0C0C] select-none"
    >
      <hr
        data-scroll
        data-scroll-speed="6.5"
        className="h-[0.01rem] bg-gray-400 border-0 flow-line hidden"
      />
      <div className="links w-full h-[80%] pt-[1rem] flex items-center">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
          className="left ml-[0.5rem] px-[3rem] py-[2rem] flex flex-col gap-[1.2rem] w-[28%] h-full mb-[1rem] items-start justify-center"
        >
          <img
            src="/logo_audioshots.webp"
            alt=""
            className="w-[8rem] h-[8-rem] logoAS"
          />
          <small className="text-sm text-white leading-none font-medium">
            Connect with our Socials
          </small>
          <div className="socials mt-[1rem] flex gap-[1rem] items-center">
            <a
              href="https://www.instagram.com/weoto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.svg"
                alt="Instagram"
                className="w-[2rem] h-[2rem]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/weoto-technologies-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-[2.5rem] h-[2.5rem]"
              />
            </a>
            <a
              href="https://x.com/WeotoTechlabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twitter.svg"
                alt="Twitter"
                className="w-[1.8rem] h-[1.8rem]"
              ></img>
            </a>
          </div>
        </div>
        <div className="right flex items-center w-[70%] p-2 overflow-hidden mt-[-1.5rem] ml-[-1rem]">
          <div ref={marqueeRef} className="flex gap-[5rem] w-fit">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Image
                key={n}
                src={`/Footer/${n}.webp`}
                alt={`screen ${n}`}
                width={175}
                height={500}
              />
            ))}
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Image
                key={`clone-${n}`}
                src={`/Footer/${n}.webp`}
                alt={`screen ${n}`}
                width={175}
                height={500}
              />
            ))}
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Image
                key={`clone-${n}`}
                src={`/Footer/${n}.webp`}
                alt={`screen ${n}`}
                width={175}
                height={500}
              />
            ))}
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Image
                key={`clone-${n}`}
                src={`/Footer/${n}.webp`}
                alt={`screen ${n}`}
                width={175}
                height={500}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="h-[0.1rem] bg-gray-800 w-[96%] ml-[2%] bottom-line" />
      <div className="text-sm font-semibold text-white text-center pt-[2rem] copyright">
        Copyright &copy; 2025 Weoto Technologies Private Limited.
        <span className="block">All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
