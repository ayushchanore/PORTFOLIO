import React from "react";
import { FaGithub}  from "react-icons/fa";


const projects = [
  {
    title: "ZERODHA CLONE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXxdzQIMAthgNx851zvVmF5jK_W9voyUAaQ&s",
    description:
      "Developed a responsive web application of Zerodha web enabling users to navigate on web which gives as same experience of real web.",
    tech: ["React",  "MongoDB", "Auth.io","Bootstrap"],
    demo: true,
    demoLink:"https://zerodhaclone-1rlp.vercel.app/"
  },
  {
    title: "ASKGPT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO-s_pX8KaYbUQL-cjRvR_N12mjKNTTJLKw&s",
    description:
      "Developed the Chatgpt clone name AskGpt using OpenAI api key.",
    tech: ["React.js", "Bootstrap", "Express.js", "MangoDB", "OpenAI"],
    demo: true,
    demoLink:"#"
  },
  {
    title: "Mandir Website",
    image:
      "https://cdn.exoticindia.com/images/products/original/books-2019/uaz343g.jpg",
    description:
      "Create the client specific static page for the temple for an garba event",
    tech: [
      "React.js", "Bootstrap", "Express.js"
    ],
    demo: true,
    demoLink:"https://mandir-web-site.netlify.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" py-16 px-4   py-20 ">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mt-3 rounded"></div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 dark:bg-gray-900/70 transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2 dark:text-white ">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed dark:text-white">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 text-sm font-medium">
                <a
                  href="https://github.com/ayushchanore"
                  className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 dark:text-white"
                >
                  <span><FaGithub size={20} /></span> View Code
                </a>

                {project.demo && (
                      <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                  >
                    🔗 Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
