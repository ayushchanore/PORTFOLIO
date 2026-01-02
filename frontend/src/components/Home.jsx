import React from "react";
import ayushImg from "../assets/ayush.jpeg";
import assets from "../assets/assets";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div
      className=" min-h-screen flex items-center justify-center gap-6 py-10 px-4 sm:px-12 lg: px-24 xl:px-60  text-center
"
    >
      <div className="grid md:grid-cols-2 gap-5 items-center ">
        {/* Text Section */}
        <motion.div 
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.3, delay: 0.4}}
        viewport={{once:true}}
        className="text-center md:text-left">
          <h1 className="text-7xl font-black mb-6 dark:text-white">
            Ayush Chanore
          </h1>

          <h3 className="text-3xl text-gray-600 dark:text-gray-400 mb-4">
            <span className="inline-block border-b-2 border-blue-600 pb-1">
              Computer Science & Engineering Student
            </span>
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate about creating innovative solutions and building scalable
            applications. Combining technical expertise with problem-solving
            skills to develop efficient software solutions.
          </p>
          <div className="flex sm:justify-center   gap-4 mt-3">
            {/* GitHub */}
            <a
              href="https://github.com/ayushchanore"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white text-indigo-600
                                 flex items-center justify-center
                                 transition-all duration-300
                                 hover:bg-indigo-600 hover:text-white
                                 hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayush-chanore/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white text-indigo-600
                                 flex items-center justify-center
                                 transition-all duration-300
                                 hover:bg-indigo-600 hover:text-white
                                 hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </a>

            {/* Email */}
            <a
              href="ayushchanore05@gmail.com"
              className="w-11 h-11 rounded-full bg-white text-indigo-600
                                 flex items-center justify-center
                                 transition-all duration-300
                                 hover:bg-indigo-600 hover:text-white
                                 hover:-translate-y-1"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.instagram.com/ayushchanore03/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white text-indigo-600
                                           flex items-center justify-center
                                           transition-all duration-300
                                           hover:bg-indigo-600 hover:text-white
                                           hover:-translate-y-1"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>

        {/* Image + Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 mt-3"
        >
          <img
            src={ayushImg}
            alt="Ayush Chanore"
            className="w-75 h-75 object-cover rounded-full shadow-lg"
          />

          <a
            href="/resume.pdf"
            className="text-sm flex items-center gap-2 bg-primary
              text-white px-6 py-2 rounded-full cursor-pointer
              hover:scale-105 transition-transform duration-300"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
