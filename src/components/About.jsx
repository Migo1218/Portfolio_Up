import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className="dark:bg-bluePortfolio h-screen py-6">
      <div className="">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className=" grid md:grid-cols-2">
              {/* primer div  */}
              <div>
                <div className="md:w-5/5 mt-[30%] md:border-r-4 border-greenPortfolio  border-dotted ">
                  <img
                    className="m-auto rounded-full w-96 h-86 border-[6px] border-bluePortfolio dark:border-white "
                    src="../../public/profilePortfolio.png"
                    alt="portfoliopicture"
                  />
                  <div className="mt-5 m-auto w-[180px]">
                    <span className="">
                      <FontAwesomeIcon
                        className="cursor-pointer text-4xl text-orangePortfolio hover:text-bluePortfolio dark:hover:text-white"
                        icon={faFacebook}
                      />
                    </span>
                    <span className="m-8">
                      <FontAwesomeIcon
                        className="cursor-pointer text-4xl text-orangePortfolio hover:text-bluePortfolio dark:hover:text-white"
                        icon={faGithub}
                      />
                    </span>
                    <span className="">
                      <FontAwesomeIcon
                        className="cursor-pointer text-4xl text-orangePortfolio hover:text-bluePortfolio dark:hover:text-white"
                        icon={faInstagram}
                      />
                    </span>
                  </div>
                  <div>
                    <div className="mt-5 w-4/5 m-auto">
                      <p className="text-2xl text-bluePortfolio dark:text-white font-semibold text-center">
                        Front-End Developer
                      </p>
                    </div>
                    <div className="mt-5 w-4/5 m-auto">
                      <p className="text-5xl md:text-7xl text-bluePortfolio dark:text-white font-body text-center">
                        Miguel Hernández
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* segundo div  */}
              <div className="md:w-4/5 mt-[30%] m-auto">
                <div>
                  <p className="text-5xl md:text-7xl text-orangePortfolio font-body text-center">
                    Biography
                  </p>
                </div>
                <div className="mt-32">
                  <p className="text-2xl text-bluePortfolio dark:text-white ">
                    I'm a Freelancer Front-end Developer with over 2 years of
                    experience. I'm from Colombia. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
