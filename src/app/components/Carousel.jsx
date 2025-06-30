"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const images = [
  "/carousel/img1.jpg",
  "/carousel/img2.jpg",
  "/carousel/img3.jpg",
  "/carousel/img4.jpg",
  "/carousel/img5.jpg",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const intervalRef = useRef(null);

  const getVisibleImages = () => {
    const total = images.length;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;

    return [
      { index: prev, position: -1 },
      { index: activeIndex, position: 0 },
      { index: next, position: 1 },
    ];
  };

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    };

    startInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  return (
    <div className="carousel hidden">
      <div className="w-full h-screen flex items-center justify-center bg-black overflow-visible">
        <div className="relative w-[50rem] h-[26rem]">
          {getVisibleImages().map(({ index, position }) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={clsx(
                "absolute top-0 left-1/2 transition-transform transition-scale duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] cursor-pointer",
                position === 0
                  ? "z-10 scale-110"
                  : "z-0 scale-75 opacity-70 blur-[1px] brightness-75 contrast-90"
              )}
              style={{
                transform: `translateX(${position * 300}px)`,
                willChange: "transform",
              }}
            >
              <Image
                src={images[index]}
                alt={`carousel-${index}`}
                width={200}
                height={300}
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
