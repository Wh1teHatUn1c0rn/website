"use client";

import React from "react";
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <a href="https://github.com/Wh1teHatUn1c0rn"><h1 className="Welcome-text text-[13px]">Offensive Unicorn Crew Portfolio</h1></a>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
                <span className="text-red-500">
                    Hack
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        to
                        {" "}
                    </span>
                    <span className="text-blue-500">Secure</span>
                    
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-md text-purple-400 my-5 max-w-[600px]"
            >
                With over five years of hands-on experience in offensive security, I excel in identifying and neutralizing vulnerabilities to fortify digital defenses. My expertise lies in conducting thorough penetration tests, utilizing advanced tools and techniques to uncover potential weaknesses in networks, systems, and applications.<br />
                {" "}
                Key Skills:
                <br />
                🛡️ Penetration Testing & Vulnerability Assessment<br />
                🔍 Threat Intelligence & Risk Analysis<br />
                💻 Ethical Hacking<br />
                🔒 Security Architecture & Design Review<br />
                📊 Incident Response Planning & Execution<br />
                👥 Security Awareness Training & Education<br />

                I have a proven track record of collaborating with cross-functional teams to develop robust security strategies tailored to the unique needs of organizations. Whether it's assessing risks, enhancing security controls, or responding to incidents, I am dedicated to safeguarding assets and ensuring compliance with industry standards and regulations.
            </motion.p>
            <motion.a
            variants={slideInFromLeft(1)}
            href="https://www.vukblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
                Learn More!
            </motion.a>
            </div>

            <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center items-center"
            >
                <Image 
                src="/horse.png"
                alt="work icons"
                height={500}
                width={500}
                className="absolute right-0 top-40"
                />

                <Image src="/cliff.webp" alt="cliff" width={480} height={480}
                className="absolute right-0 top-40"/>
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
