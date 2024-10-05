"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import personalData from "../../utils/personalData.json";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-[80vh] md:h-[70vh]  my-5 lg:my-[5rem] flex flex-col lg:flex-row items-center justify-evenly lg:justify-between mt-[-100px] pt-[100px] "
    >
      <div className="flex justify-between mb-[5vh] flex-col md:flex-row w-[100%] lg:w-[60%] ">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-lg md:text-2xl my-5 ">
            Hello , I&apos;m{" "}
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent shadow-xl">
              {personalData.Name}
            </span>{" "}
          </p>
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold ">
            <span className="bg-gradient-to-r from-red-700 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              {personalData.Profession}
            </span>
          </h1>
          <p className="text-md md:text-xl my-5 ">
            {" "}
            I specialize in crafting web applications with modern technologies
            like Next.js, MongoDB, and Prisma.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ translateX: 100, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="w-[300px] h-[300px] border  border-gray-500 rounded-full overflow-hidden">
          <Image
            src="/818a1b89a57c2ee0fb7619b95e11aebd.jpg"
            alt="profile"
            height={500}
            width={500}
            className=""
          />
        </div>
        <div className=" flex justify-evenly mt-5">
          <Link href="https://github.com/ashab-k" target="_blank">
            <Image
              src="/icons8-github_white.svg"
              alt="github"
              width={50}
              height={50}
              className=""
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ashab-khan-b3b096296/"
            target="_blank"
          >
            <Image
              src="/icons8-linked-in.svg"
              alt="github"
              width={50}
              height={50}
              className=""
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
