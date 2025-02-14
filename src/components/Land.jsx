import React from "react";
import { Helmet } from "react-helmet";
import g1 from "../assets/girl1.png";
import m1 from "../assets/m1.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Land = () => {
  return (
    <>
      <Helmet>
        <title>Study Abroad Easily | Best Universities</title>
        <meta
          name="description"
          content="Assisting you in enrolling in an overseas program at an affordable cost at your dream university. Join 183K+ successful alumni!"
        />
        <meta
          name="keywords"
          content="Study Abroad, Overseas Education, University Admission, Affordable Education Abroad"
        />
      </Helmet>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between p-4 mt-[6rem] gap-8 md:gap-[8rem] overflow-x-hidden">
        <header className="text-center md:text-left max-w-xl">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            STUDY
          </motion.h1>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
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
            className="text-2xl md:text-5xl lg:text-[4.7rem] font-bold mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            EASY WITH US
          </motion.h1>
          <p className="text-gray-600 text-base md:text-lg mt-9">
            Assisting you in enrolling in an overseas program at an affordable
            cost at your best university.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-9">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg"
              aria-label="Apply Now for Study Abroad"
            >
              Apply Now
            </button>
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg"
              aria-label="Learn More about Studying Abroad"
            >
              Learn More
            </button>
          </div>
          <div className="flex justify-center md:justify-start gap-8 md:gap-[6rem] mt-13">
            <div className="text-center mt-7">
              <h2 className="text-4xl md:text-6xl font-bold text-orange-500">
                <CountUp end={183} duration={3} separator="," suffix="K" />
              </h2>
              <p className="text-gray-600 text-xl md:text-3xl mt-3">
                Our <br /> Alumni
              </p>
            </div>
            <div className="text-center mt-7">
              <h2 className="text-4xl md:text-6xl font-bold text-orange-500">
                <CountUp end={124} duration={3} separator="," suffix="K" />
              </h2>
              <p className="text-gray-600 text-xl md:text-3xl mt-3">
                Campus <br /> Collaboration
              </p>
            </div>
          </div>
        </header>
        {/* Image Section */}
        <motion.img
          src={m1}
          alt="A student representing study abroad programs"
          className="w-[80vw] md:w-[50vw] h-auto md:h-[60vh] hidden md:block"
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
      </section>
    </>
  );
};

export default Land;