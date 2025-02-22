import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faGlobe, faCheckCircle, faLanguage, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Program = () => {
  const mbbsAbroadContent = [
    {
      heading: "Affordable Tuition Fees",
      desc: "Pursue your dream of becoming a doctor without financial burden, with cost-effective tuition fees compared to local programs.",
      icon: faDollarSign,
    },
    {
      heading: "Internationally Recognized",
      desc: "Graduate from WHO and NMC-approved universities, ensuring global acceptance of your qualification.",
      icon: faGlobe,
    },
    {
      heading: "No Entrance Exams",
      desc: "Start your medical journey without the hassle of entrance exams in most countries offering MBBS abroad.",
      icon: faCheckCircle,
    },
    {
      heading: "English-Taught Programs",
      desc: "Learn seamlessly with English-medium programs designed for international students.",
      icon: faLanguage,
    },
    {
      heading: "Multicultural Exposure",
      desc: "Build global connections and experience diverse cultures while studying.",
      icon: faUsers,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose MBBS Abroad? | Affordable, Recognized, Hassle-Free</title>
        <meta
          name="description"
          content="Discover the benefits of studying MBBS abroad: affordable tuition, international recognition, no entrance exams, English-medium programs, and multicultural exposure."
        />
        <meta
          name="keywords"
          content="MBBS Abroad, Study Medicine Overseas, Affordable Tuition, Internationally Recognized Universities, English Taught Programs"
        />
      </Helmet>

      <section className="p-4 flex flex-col gap-[2rem]">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Chart Your Path to <span className="text-orange-500">Success Abroad</span>
          </h1>
          <p className="text-gray-600 mt-5 text-3xl">Why Choose MBBS Abroad?</p>
        </header>

        <div className="overflow-x-auto flex space-x-6 scrollbar-hide p-6" role="region" aria-label="Programs Offered">
          {mbbsAbroadContent.map((program, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 lg:w-[20vw] lg:h-[50vh] flex flex-col justify-around hover:shadow-2xl transition-shadow duration-300 relative border border-amber-600 md:w-[30vw]"
              whileHover={{
                scale: 1.05,
                translateY: -10,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FontAwesomeIcon
                icon={program.icon}
                className="text-3xl text-orange-500"
                alt={`${program.heading} Icon`}
                aria-hidden="true"
              />
              <h2 className="lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-center md:text-xl">
                {program.heading}
              </h2>
              <p className="md:text-lg text-gray-600 leading-relaxed line-clamp-4 mt-2 text-sm">
                {program.desc}
              </p>
              <div className="flex mt-4">
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer"
                  aria-label={`Read more about ${program.heading}`}
                >
                  Read More
                </button>
              </div>
              <div className=" inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-100 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Program;
