import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-[full] h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/unicorn_logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-red-500">
            Vuk Markovic
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-10">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-[80px] cursor-pointer size-[100px]">
          <a href="https://www.linkedin.com/in/vuk-markovic-60793b1b1/"><img src="/linkedin.png" alt="" /></a>
          <a href="https://github.com/Wh1teHatUn1c0rn"><img src="/github.png" alt="" /></a>
          <a href="https://www.youtube.com/@OffensiveUnicornCrew"><img src="/youtube.png" alt="" /></a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;