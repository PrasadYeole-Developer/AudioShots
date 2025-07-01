"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const logoRef = useRef();
  useGSAP(() => {
    gsap.to(logoRef.current, {
      boxShadow: "0 0 0.6rem 0.3rem rgba(255, 255, 255, 0.4)",
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      scale: 1.03,
      transformOrigin: "center center",
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      id="contact"
      data-scroll-section
      className="w-full text-white bg-[#131313] min-h-screen select-none"
    >
      <div className="contact pt-[5.5rem] pb-[2rem] flex flex-col items-center gap-[2rem]">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Contact Us
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-[-0.8rem] text-center text-[0.9rem] font-sans text-gray-500 w-[50%]">
          Have feedback, inquiries, or need support? Reach out to us, and we'll
          get back to you as soon as possible.
        </p>
      </div>
      <div className="w-full flex gap-50 items-center justify-center wrapper-contacts">
        <Card
          data-scroll
          data-scroll-speed="5"
          className="w-full max-w-md bg-[#0f0f0f] text-white shadow-lg rounded-xl border-0 mt-[-2rem] pb-[0.5rem] form"
        >
          <CardContent className="p-6">
            <form className="space-y-4">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  className="bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  required
                  className="bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-[#1a1a1a] border border-[#333] text-white placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={4}
                  required
                  className="w-full rounded-md border border-[#333] bg-[#1a1a1a] px-3 py-2 text-sm text-white placeholder-gray-400"
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="px-6 pb-6 flex flex-col items-center">
            <Button
              variant="outline"
              className="bg-[#161616] text-white py-[1.5rem] px-[1rem] cursor-pointer rounded-sm border-0 flex gap-3 items-center hover:bg-[#1e1230] hover:text-white"
            >
              <h4 className="scroll-m-20 text-md px-[11rem]">Send</h4>
            </Button>
          </CardFooter>
        </Card>
        <div
          data-scroll
          data-scroll-speed="5"
          className="hidden contact-links w-full"
        >
          <div className="left px-[3rem] py-[2rem] flex flex-col gap-[1.2rem] w-[28%] h-full mb-[1rem] items-center justify-center mt-[-0.5rem] ml-72">
            <img
              ref={logoRef}
              src="/logo_audioshots.webp"
              alt=""
              className="w-[12rem] h-[12rem] logoAS rounded-2xl mb-2"
            />
            <small className="text-xl text-white leading-none font-medium">
              Connect with our Socials
            </small>
            <div className="socials flex gap-[1.5rem] items-center">
              <a
                href="https://www.instagram.com/weoto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram.svg"
                  alt="Instagram"
                  className="w-[2.6rem] h-[2.6rem]"
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
                  className="w-[3.6rem] h-[3.6rem]"
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
                  className="w-[2.3rem] h-[2.3rem]"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
