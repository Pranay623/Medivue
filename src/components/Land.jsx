import React from "react";
import g1 from "../assets/girl1.png";
import m1 from "../assets/m1.png"
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Land = () => {
  return (
    <>
      <div className="flex flex-row lg:flex-row items-center justify-between p-2 mt-[6rem] gap-[16rem] ml-8 overflow-x-hidden">
        <div className="text-left lg:text-left max-w-xl">
        <motion.h1
    className="text-5xl lg:text-8xl font-bold"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    STUDY
  </motion.h1>
  <motion.h1
    className="text-5xl lg:text-8xl font-bold"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
  >
    <span className="relative inline-block">
      <motion.span
        className="text-orange-500"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.8,
        }}
      >
        ABROAD
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[5px] bg-orange-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
      ></motion.div>
    </span>{" "}
    IS
  </motion.h1>
  <motion.h1
    className="text-4xl lg:text-[4.7rem] font-bold"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
  >
    EASY WITH US
  </motion.h1>
          <p className="text-gray-600 text-lg mt-6">
            Assisting you in enrolling in an overseas program at an affordable
            cost at your best university.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-9">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg">
              Join Us
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="flex justify-center lg:justify-start gap-[4rem] mt-13 lg:gap-[9rem]">
            <div className="text-center">
            <h2 className="text-6xl font-bold text-orange-500">
          <CountUp end={183} duration={3} separator="," suffix="K" />
        </h2>
              <p className="text-gray-600 text-3xl mt-3 ">Our Alumni</p>
            </div>
            <div className="text-center">
            <h2 className="text-6xl font-bold text-orange-500">
          <CountUp end={124} duration={3} separator="," suffix="K" />
        </h2>
              <p className="text-gray-600 text-3xl ml-4 mt-3">Campus Collaboration</p>
            </div>
          </div>
        </div>
        <motion.img
  src={m1}
  className="w-[50vw] h-[60vh] mt-[-10rem]"
  initial={{ opacity: 0, y: 0 }}
  animate={{
    opacity: 1, 
    y: [0, -20, 0], 
  }}
  transition={{
    opacity: { duration: 2, ease: "easeOut" }, 
    y: { duration: 5, ease: "easeInOut", repeat: Infinity }, 
  }}
/>


      </div>
    </>
  );
};

export default Land;
