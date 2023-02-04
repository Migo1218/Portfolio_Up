import React from "react";
import experienceArray from "../utils/experienceArray";
import { FaBusinessTime } from "react-icons/fa";
const Resume = () => {
  // const tasks = experienceArray.map((item) => {
  //   return item.tasks;
  // });
  let tasks = [];
  return (
    <div className="bg-white dark:bg-bluePortfolio md:h-fit py-6">
      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className=" text-md font-body  font-semibold text-5xl text-bluePortfolio dark:text-iconColor">
          Experience
        </h1>

        {experienceArray &&
          experienceArray.map((item) => (
            <div className="md:w-5/5 mt-5">
              <div className="bg-blue-300 bg-opacity-10 rounded-lg mt-5">
                <div>
                  <div className="md:grid grid-cols-2 w-full m-auto p-5">
                    {/* PRIMER DIV */}
                    <div className="md:border-r-4 border-slate-300">
                      <p className="text-bluePortfolio dark:text-white font-semibold text-2xl mt-1">
                        {item.name}
                      </p>
                      <p className="text-slate-700 italic dark:text-white text-lg mt-1">
                        {item.company} / {item.typeWork}
                      </p>
                      <p className="text-slate-700 text-lg mt-1 dark:text-white">
                        {item.date}
                      </p>
                      <div className="bg-bluePortfolio rounded-md w-fit mt-2 inline-flex">
                        <FaBusinessTime className="text-white mt-2.5 ml-2" />
                        <h6 className="text-white font-semibold p-2">
                          {item.timeDaily}
                        </h6>
                      </div>
                    </div>
                    {/* SEGUNDO DIV */}
                    <div className="mt-5 md:mt-0 pl-4">
                      <p className="text-bluePortfolio dark:text-white font-semibold text-2xl">
                        {item.company}
                      </p>
                      {item.tasks.map((task) => (
                        <p className="text-slate-700 dark:text-white text-lg mt-1">
                          - {task.description}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Resume;
