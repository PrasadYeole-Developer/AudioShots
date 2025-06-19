import React from "react";

const Footer = () => {
  return (
    <div data-scroll-section className="w-full h-[75vh] bg-[#0C0C0C]">
      <hr
        data-scroll
        data-scroll-speed="6.5"
        className="h-[0.01rem] bg-gray-400 border-0"
      />
      <div className="links w-full h-[80%] pt-[1rem]">
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="16"
          className=" ml-[-2rem] left px-[3rem] py-[2rem] flex flex-col gap-[1.2rem] w-full h-full"
        >
          <img
            src="/logo_audioshots.webp"
            alt=""
            className="w-[8rem] h-[8-rem]"
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
        <div className="right"></div>
      </div>
      <hr className="h-[0.1rem] bg-gray-800 w-[96%] ml-[2%] bottom-line" />
      <div className="text-sm font-semibold text-white text-center pt-[2rem]">
        Copyright &copy; 2025 Weoto Technologies Private Limited.
        <span className="block">All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
