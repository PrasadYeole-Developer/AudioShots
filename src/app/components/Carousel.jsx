"use client";

import React, { useEffect, useState } from "react";
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
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel hidden">
      <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="relative w-[50rem] h-[26rem]">
          {getVisibleImages().map(({ index, position }) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                "absolute top-0 left-1/2 transition-all duration-500 ease-in-out cursor-pointer",
                position === 0 ? "z-10 scale-110" : "z-0 scale-75 opacity-60"
              )}
              style={{
                transform: `translateX(${position * 280}px)`,
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
