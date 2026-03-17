import React from "react";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  return (
    <section id="Experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 ">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Experience Card */}
      <div
        className="rounded-2xl shadow-sm p-6 sm:p-10
                      transition-all duration-300
                      hover:shadow-lg dark:bg-gray-900/70   bg-gray-50"
      >
        {/* Role */}
        <h3 className="text-indigo-600 text-xl font-semibold dark:text-white">
          Web Development (Frontend) Intern
        </h3>

        {/* Company */}
        <p className="text-gray-900 font-medium mt-1 dark:text-white">
          Infosynch Software Solution Pvt. Ltd.
        </p>

        {/* Duration */}
        <p className="text-sm text-gray-500 mt-1 dark:text-white">
          Jan 2025 – Mar 2025 | Nagpur
        </p>

        {/* Certificate */}
        <a
          href="https://dominant-brown-ql3rersfgc.edgeone.app/Ayush%20Completion%20Letter.pdf"
          className="inline-flex items-center gap-2 mt-5
                     text-indigo-600 text-sm font-medium
                     bg-indigo-50 px-4 py-2 rounded-full
                     transition-all duration-300
                     hover:bg-indigo-100"
        >
          <ExternalLink size={16} />
          View Certificate
        </a>

        {/* Description */}
        <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside dark:text-white">
          <li>
            Develop skills in HTML, CSS, JavaScript, and frontend frameworks.
          </li>
          <li>
            Work on real-world web applications, contributing to both new
            features and bug fixes.
          </li>
          <li>
            Gain experience with version control systems (Git) and agile
            methodologies
          </li>
          <li>
            Learn best practices in frontend development, including UI/UX
            principles and responsive design.
          </li>
          <li>
            Receive feedback from mentors and senior developers to improve
            coding skills and development techniques.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
