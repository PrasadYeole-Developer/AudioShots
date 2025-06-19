import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import React, { useRef } from "react";

const Advertise = () => {
  const playStr = useRef();
  // const appStr = useRef();
  return (
    <div
      id="googleplay"
      data-scroll-section
      className="w-full text-white bg-black h-[80vh] flex items-center justify-between p-[8rem] overflow-hidden"
    >
      <div className="left flex flex-col gap-1 items-start">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Download The AudioShots App{" "}
        </h2>
        <p className="text-muted-foreground text-md">
          Create and Listen on the Go!
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=app.weoto.audioshots&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            ref={playStr}
            variant="outline"
            className="bg-[#131313] mt-5 text-white py-[1.5rem] px-[1rem] cursor-pointer rounded-sm border-0 flex gap-3 items-center btn hover:bg-[#1e1230] hover:text-white"
          >
            <Image
              src="/playStore.svg"
              width={30}
              height={30}
              alt="Play Store"
            />
            <h4 className="scroll-m-20 text-md">Download on Play Store</h4>
          </Button>
        </a>

        {/* <Link href="">
          <Button
            ref={playStr}
            variant="outline"
            className="bg-[#131313] text-white py-[1.5rem] px-[1rem] cursor-pointer rounded-sm border-0 flex gap-3 items-center hover:bg-[#1e1230] hover:text-white"
          >
            <Image src="/appStore.svg" width={30} height={30} />
            <h4 className="scroll-m-20 text-md">Download on App Store</h4>
          </Button>
        </Link> */}
      </div>
      <div data-scroll data-scroll-speed="12" className="right relative p-6">
        <Image
          src="/blank.png"
          alt="screen 1"
          width={300}
          height={700}
          className="blank"
        />
        <Image
          src="/screen1.jpg"
          alt="screen 1"
          width={300}
          height={500}
          className=""
        />
        <Image
          src="/screen2.jpg"
          alt="screen 2"
          width={300}
          height={500}
          className=""
        />
      </div>
    </div>
  );
};

export default Advertise;
