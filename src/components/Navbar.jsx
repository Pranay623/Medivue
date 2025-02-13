import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 rounded-4xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center py-4 px-6 md:px-12">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-orange-500 cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Medivue
        </motion.h1>
        <motion.div
          className="hidden md:flex gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { name: 'Home', href: '#home' },
            { name: 'Benefits', href: '#program' },
            { name: 'Countries', href: '#country' },
            { name: 'Process', href: '#process' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-gray-800 text-lg font-medium cursor-pointer relative group"
              whileHover={{ color: "#f97316" }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
              <motion.div
                className="h-1 bg-orange-500 absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          className="py-2 px-4 rounded-lg bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#form">Application Form</a>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;
