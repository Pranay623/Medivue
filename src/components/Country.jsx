import { motion } from "framer-motion";

const Country = () => {
  const countries = [
    {
      name: "Russia",
      desc: "Top-notch universities with advanced medical training.",
      image: "https://www.worldometers.info//img/flags/small/tn_rs-flag.gif",
    },
    {
      name: "Uzbekistan",
      desc: "Budget-friendly options for quality education.",
      image: "https://www.worldometers.info//img/flags/small/tn_uz-flag.gif",
    },
    {
      name: "Kazakhstan",
      desc: "Globally recognized medical degrees.",
      image: "https://www.worldometers.info//img/flags/small/tn_kz-flag.gif",
    },
    {
      name: "Philippines",
      desc: "US-based curriculum with English-medium instruction.",
      image: "https://www.worldometers.info//img/flags/small/tn_rp-flag.gif",
    },
    {
      name: "Georgia",
      desc: "Affordable costs and top-ranked institutions.",
      image: "https://www.worldometers.info//img/flags/small/tn_gg-flag.gif",
    },
    {
      name: "Kyrgyzstan",
      desc: "Easy admission process and low living expenses.",
      image: "https://www.worldometers.info//img/flags/small/tn_kg-flag.gif",
    },
    {
      name: "Egypt",
      desc: "High-quality education in a historical setting.",
      image: "https://www.worldometers.info//img/flags/small/tn_eg-flag.gif",
    },
  ];

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          <span className="text-orange-500">Top Destinations</span> for MBBS Abroad
        </h1>
        <p className="text-gray-600 mt-3 text-xl">
          Explore the best countries to achieve your medical aspirations.
        </p>
      </div>
      <div className="relative overflow-x-auto flex gap-8 p-5 scrollbar-hide">
        {countries.map((country, index) => (
          <motion.div
            key={index}
            className="relative min-w-[15px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px] xl:min-w-[350px] flex-shrink-0 rounded-2xl shadow-lg border border-orange-500 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover rounded-t-2xl"
            />
            <div className="bg-white p-4 rounded-b-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                {country.name}
              </h2>
              <p className="text-sm sm:text-md md:text-lg text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-4 mt-2">
                {country.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Country;
