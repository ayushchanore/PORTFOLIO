import React from "react";
import assets from "../assets/assets";
import { GraduationCap, School, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 ">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="space-y-5 text-gray-600 text-2xl sm:text-base leading-relaxed dark:text-white">
          <p>
            I am a B.Tech student in Computer Science Engineering at KDK College
            of Engineering with a strong academic record (CGPA: 7.2/10). I have a
            passion for software development and competitive programming.
          </p>

          <p>
            My journey in technology began with a curiosity about how things
            work, which evolved into building solutions that make a difference.
          </p>

          {/* Coding Profiles */}
          <div className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm dark:bg-gray-900/70">
            <h3 className="text-indigo-600 font-semibold text-lg mb-4 dark:text-white">
              Coding Profiles
            </h3>

            <ul className="space-y-3">
              <a href="https://leetcode.com/u/AyushChanore/"><li className="flex items-center gap-3">
                <Code size={18} className="text-indigo-500 shrink-0" />
                <span>LeetCode</span>
              </li></a>
              <li className="flex items-center gap-3">
                <Code size={18} className="text-indigo-500 shrink-0" />
                <span>GeeksForGeeks</span>
              </li>
              <li className="flex items-center gap-3">
                <Code size={18} className="text-indigo-500 shrink-0" />
                <span>Codeforces</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-gray-900 dark:text-white">
            Education
          </h3>

          <div className="space-y-5">
            {/* Card */}
            <div
              className=" bg-gray-50 flex gap-4 p-5 sm:p-6  rounded-xl shadow-sm  transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg  dark:bg-gray-900/70 dark:text-white"
            >
              <GraduationCap
                className="text-indigo-600 shrink-0"
                size={26}
              />
              <div>
                <h4 className="font-semibold dark:text-white">
                  B.Tech. in Computer Engineering
                </h4>
                <p className="text-gray-600 dark:text-white">
                  KDK COLLEGE OF ENGINEERING – Nagpur
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-white">
                  CGPA: 7.2/10 | 2023 – 2027
                </p>
              </div>
            </div>

            <div
              className="flex gap-4 p-5 sm:p-6 bg-gray-50  rounded-xl shadow-sm transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900/70 "
            >
              <School className="text-indigo-500 shrink-0" size={26} />
              <div>
                <h4 className="font-semibold dark:text-white">HSC, Science</h4>
                <p className="text-gray-600 dark:text-white">
                  VMV College – Nagpur
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-white">
                  PR: 67.67 | 2020 – 2022
                </p>
              </div>
            </div>

            <div
              className="flex gap-4 p-5 sm:p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900/70"
            >
              <School className="text-indigo-500 shrink-0" size={26} />
              <div>
                <h4 className="font-semibold dark:text-white">SSC</h4>
                <p className="text-gray-600 dark:text-white">
                  Prashant School – Nagpur
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-white">
                  PR: 89.4 | 2019 – 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
