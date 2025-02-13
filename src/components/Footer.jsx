import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[-6rem]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-orange-500 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            Medivue
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm md:text-base">
            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="#program" className="hover:text-orange-500 transition">
              Why Study Abroad
            </a>
            <a href="#country" className="hover:text-orange-500 transition">
              Top Countries
            </a>
            <a href="#process" className="hover:text-orange-500 transition">
              Admission Process
            </a>
            <a href="#form" className="hover:text-orange-500 transition">
              Contact Us
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>&copy; 2025 Medivue. All Rights Reserved.</p>
          <p>
            Designed for the <span className="text-orange-500">"Study MBBS Abroad"</span> initiative.
          </p>
        </div>
      </div>
    </footer>
  );
}
