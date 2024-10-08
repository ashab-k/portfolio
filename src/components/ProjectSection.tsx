"use client";
import React from "react";
import data from "../../utils/projectData.json";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

const ProjectSection = () => {
  return (
    <section className="mt-[-100px] pt-[100px]" id="projects">
      <motion.h1
        className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold mx-[1.5rem] md:mx-0"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Projects
      </motion.h1>
      <div className=" ">
        <HoverEffect items={data} />
      </div>
    </section>
  );
};

export default ProjectSection;
