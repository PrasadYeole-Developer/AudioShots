import React from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";

const Contact = () => {
  return (
    <div
      id="contact"
      data-scroll-section
      className="w-full text-white bg-[#131313] min-h-screen"
    >
      <div className="contact pt-[5.5rem] pb-[2rem] flex flex-col items-center gap-[2rem]">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Contact Us
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-[-0.8rem] text-center text-[0.9rem] font-sans text-gray-500 w-[50%]">
          Have feedback, inquiries, or need support? Reach out to us, and we'll
          get back to you as soon as possible.
        </p>
        <Card
          data-scroll
          data-scroll-speed="5"
          className="w-full max-w-md bg-[#0f0f0f] text-white shadow-lg rounded-xl border-0 mt-[-3rem] pb-[0.5rem]"
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
      </div>
    </div>
  );
};

export default Contact;
