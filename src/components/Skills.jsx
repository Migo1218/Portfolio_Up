import React from "react";
import { FaReact } from "react-icons/fa";
import skillsArray from "../utils/skillsArray";
const Skills = () => {
  return (
    <div className="bg-white dark:bg-bluePortfolio md:h-fit py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 relative">
          <div className="animate-bounce w-16 h-16 rounded-full bg-iconColor opacity-20 absolute z-0 md:bottom-0"></div>
          <div className="relative z-20">
            <h1 className="z-10 text-md font-body  font-semibold text-5xl text-bluePortfolio dark:text-white">
              Education & Skills
            </h1>
          </div>
        </div>
        <div className="md:grid grid-cols-6 mt-12">
          <div className="col-span-2 mt-12">
            <div className="bg-slate-200 rounded-lg w-4/5 m-auto">
              <div className="p-4 border-4  border-b-bluePortfolio">
                <p className="">Front End Developer</p>
                <p className="mt-1 font-semibold">Geek Academy</p>
                <p className="mt-1">|September 2021 - December 2021|</p>
              </div>

              <div className="p-4 ">
                <p className="">Telecommunication Engineer</p>
                <p className="mt-1 font-semibold">Santo Tomás University</p>
                <p className="mt-1">|2015-2020|</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            {" "}
            {skillsArray &&
              skillsArray.map((item) => (
                <div>
                  <div className="mt-12">
                    <div className="grid grid-cols-3 text-iconColor dark:text-white w-[200px] text-xs font-semibold py-1 p-2 rounded-full  ">
                      <div className="col-span-1 m-auto">
                        <item.icon
                          style={{ color: item.color }}
                          className="text-3xl"
                        />
                      </div>
                      <div className="col-span-2.8 m-auto">
                        <span
                          style={{ color: item.color }}
                          className="italic text-sm font-light"
                        >
                          {item.nameTechno}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-2 bg-slate-200 rounded-full dark:bg-gray-500">
                    <div
                      style={{
                        width: item.percentage,
                        backgroundColor: item.color,
                      }}
                      className=" dark:bg-orangePortfolio text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    >
                      <span className="text-white dark:text-white">
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* {skillsArray &&
          skillsArray.map((item) => (
            <div>
              <div className="mt-12">
                <div className="grid grid-cols-3 text-iconColor dark:text-white w-[200px] text-xs font-semibold py-1 p-2 rounded-full  ">
                  <div className="col-span-1 m-auto">
                    <item.icon
                      style={{ color: item.color }}
                      className="text-3xl"
                    />
                  </div>
                  <div className="col-span-2.8 m-auto">
                    <span
                      style={{ color: item.color }}
                      className="italic text-sm font-light"
                    >
                      {item.nameTechno}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full mt-2 bg-blue-200 rounded-full dark:bg-gray-500">
                <div
                  style={{
                    width: item.percentage,
                    backgroundColor: item.color,
                  }}
                  className=" dark:bg-orangePortfolio text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                >
                  <span className="text-white dark:text-white">
                    {item.percentage}
                  </span>
                </div>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Skills;
