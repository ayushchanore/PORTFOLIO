import React from "react";
import { GraduationCap, School, Code } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div
          className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm dark:bg-gray-900/70 transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-indigo-600 font-semibold text-lg mb-4  dark:text-white">
            Computer Science
          </h3>
          <ol className="space-y-3 ">
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Competitive Programming
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Data Structures and Algorithms
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              <Code size={18} className="text-indigo-500 shrink-0" />{" "}
              Object-Oriented Programming
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Software Engineering
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Database Management
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              System Design
            </li>
          </ol>
        </div>

        <div
          className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm dark:bg-gray-900/70 transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-indigo-600 font-semibold text-lg mb-4  dark:text-white">
            Programming Languages
          </h3>
          <ol className="space-y-3">
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />C
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Java
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              <Code size={18} className="text-indigo-500 shrink-0" /> Python
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Javascript
            </li>
            {/* <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Database Management
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              System Design
            </li> */}
          </ol>
        </div>

        <div
          className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm dark:bg-gray-900/70 transition-all duration-400 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-indigo-600 font-semibold text-lg mb-4 dark:text-white ">
            Frameworks & Libraries
          </h3>
          <ol className="space-y-3">
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              React.js
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Node.js
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              <Code size={18} className="text-indigo-500 shrink-0" /> Express.js
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Bootstrap
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              JQuery
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Tailwind CSS
            </li>
          </ol>
        </div>

        <div
          className="bg-gray-50 p-5 sm:p-6 rounded-xl shadow-sm dark:bg-gray-900/70 transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-indigo-600 font-semibold text-lg mb-4  dark:text-white">
            Tools & Technologies
          </h3>
          <ol className="space-y-3">
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Git & Github
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Postman
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              <Code size={18} className="text-indigo-500 shrink-0" />{" "}
              MySQL/Oracle
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              MongoDB
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Database Management
            </li>
            <li className="flex items-center gap-3  dark:text-white">
              {" "}
              <Code size={18} className="text-indigo-500 shrink-0" />
              Linux
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Skills;
