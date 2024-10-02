"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import data from "../../utils/projectData.json";
import ProjectComponent from "@/components/ProjectComponent";
import { HoverEffect } from "@/components/ui/card-hover-effect";
export default function Home() {
  return (
    <main className=" px-[5%] md:px-[12%]">
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
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent shadow-xl">
                Raqeeb Haider
              </span>{" "}
              I do stuff lmfao lmfao lmfao lmfaoml
            </p>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold ">
              <span className="bg-gradient-to-r from-purple-500 via-pink-400 text-transparent to-red-700 bg-clip-text">
                ML Engineer,
              </span>
              <br />{" "}
              <span className="bg-gradient-to-r from-red-700 via-pink-400 to-purple-500 bg-clip-text text-transparent italic align-super">
                DL Enthusiast
              </span>
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="">
        <motion.h1
          className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects
        </motion.h1>
        <div className=" ">
          <HoverEffect items={projects} />
        </div>
      </section>
    </main>
  );
}
const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
