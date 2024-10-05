"use client";
import React from "react";
import { motion } from "framer-motion";
import personalData from "../../utils/personalData.json";

const HeroSection = () => {
  return (
    <section className="h-[80vh]  my-5 lg:my-[5rem] flex items-center ">
      <div className="flex justify-between flex-col md:flex-row w-[100%] lg:w-[60%] ">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-lg md:text-2xl my-5 ">
            Hello , I'm{" "}
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent shadow-xl">
              {personalData.Name}
            </span>{" "}
            I do stuff lmfao lmfao lmfao lmfaoml
          </p>
          <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold ">
            <span className="bg-gradient-to-r from-red-700 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              {personalData.Profession}
            </span>
            <br />
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
