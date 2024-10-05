"use client";
import { motion } from "framer-motion";
import SkillComponent from "./SkillComponent";
import data from "../../utils/skillData.json";
import React from "react";
import { section } from "framer-motion/client";

const SkillSection = () => {
  return (
    <section className="mb-[10vh] mt-[-100px] pt-[100px]" id="skills">
      <motion.h1
        className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold mb-5 mx-[1.5rem] md:mx-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Skills
      </motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center md:grid-cols-6 lg:grid-cols-8 grid-rows-2 ">
        {data.map((item: any, index) => {
          return (
            <motion.div
              key={index}
              initial={{ translateX: -50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SkillComponent icon={item.Skill_Icon} name={item.Skill_Name} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
