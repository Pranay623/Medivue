import {motion} from "framer-motion"

const Program = () => {
    // Dummy data
    const programs = [
      {
        title: "MBBS COURSE",
        desc: "Explore the opportunity to pursue your dream of becoming a doctor through our comprehensive MBBS programs offered abroad.",
      },
      {
        title: "Nursing",
        desc: "Studying nursing abroad offers students the opportunity to gain a global perspective on healthcare, experience different cultures, and develop unique skills.",
      },
      {
        title: "Diploma & Degree",
        desc: "Studying for a diploma or degree abroad encompasses a broad array of fields and offers diverse educational and cultural experiences.",
      },
      {
        title: "Pharmacy",
        desc: "Studying pharmacy abroad offers students access to advanced research facilities and global career opportunities.",
      },
      {
        title: "Engineering",
        desc: "Explore innovative engineering programs abroad that focus on practical learning and global technology trends.",
      },
    ];
  
    return (
        <div className="p-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Our <span className="text-orange-500">Programs</span>
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Explore our range of programs designed to help you achieve your goals.
        </p>
      </div>

      {/* Card Container */}
      <div className="overflow-x flex space-x-6 scrollbar-hide">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-[20vw] h-[50vh] flex flex-col justify-around hover:shadow-2xl transition-shadow duration-300 relative"
            whileHover={{
              scale: 1.05,
              translateY: -10,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {program.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed line-clamp-4 mt-2">
              {program.desc}
            </p>

            {/* Read More Button */}
            <div className="flex mt-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                Read More
              </button>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-100 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
          </motion.div>
        ))}
      </div>
    </div>

      
    );
  };
  
  export default Program;
  