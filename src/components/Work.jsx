import React from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import projectsArray from "../utils/projectsArray";
const Work = () => {
  return (
    <div className="bg-white dark:bg-bluePortfolio md:h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 relative">
          <div className="animate-bounce w-16 h-16 rounded-full bg-iconColor opacity-30 absolute z-0 md:bottom-0"></div>
          <div className="relative z-20">
            <h1 className="z-10 text-md font-body text-5xl text-bluePortfolio dark:text-white">
              Projects
            </h1>
          </div>
        </div>
        <div className="py-10 md:grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {projectsArray &&
            projectsArray.map((project) => (
              <div
                className={`shadow-lg mt-10 md:mt-0 group w-[350px] md:w-[350px] rounded-md bg-white ${project.urlImage} hover:bg-portfolio-const flex justify-center items-center mx-auto content-div`}
              >
                <div>
                  <div className="w-full image-cover rounded-t-md">
                    {/* Seccion Opcional */}
                    {project.icons &&
                      project.icons.map((icon) => (
                        <div className="p-2 m-4 w-10 h-10 text-center bg-opacity-70 bg-iconColor rounded-full text-bluePortfolio float-right fd-cl group-hover:opacity-5">
                          <icon.icon className="text-2xl" />
                        </div>
                      ))}
                  </div>

                  <div className="md:w-[350px] w-[350px] h-56 py-5 px-4 bg-iconColor bg-opacity-90 rounded-b-md fd-cl group-hover:opacity-5">
                    <span className="block text-2xl font-body text-bluePortfolio font-bold tracking-wide">
                      {project.nameProject}
                    </span>
                    <span className="block text-black font-mono text-md">
                      {project.description}
                    </span>
                  </div>
                </div>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                  <span className="text-3xl font-body font-bold text-white tracking-wider leading-relaxed">
                    Go to project
                  </span>
                  <div className="pt-8 text-center">
                    <div>
                      <Link to={project.urlViewDemo} target="_blank">
                        <button className="text-center rounded-lg p-2 bg-bluePortfolio italic text-white font-semibold text-lg">
                          view live demo
                        </button>
                      </Link>
                    </div>
                    <div>
                      <Link to={project.urlViewCode} target="_blank">
                        <button className="mt-3 text-center rounded-lg p-2 bg-bluePortfolio italic text-white font-semibold text-lg">
                          view code
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
