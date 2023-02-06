import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div
      className="bg-white dark:bg-bluePortfolio
      bg-no-repeat 
      
      md:bg-[length:400px_400px] 
      
      bg-[length:350px_350px] 
      
      md:bg-[top_11%_left_18%] 
      bg-[top_11%_left_35%]
     
      


      bg-[url('/splash.png')]
    
    h-screen py-6"
    >
      <div className="dark:bg-bluePortfolio">
        <div className="px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className=" md:grid md:grid-cols-2 dark:bg-bluePortfolio">
              {/* primer div  */}
              <div>
                <div className="md:w-5/5 mt-[15%] md:border-r-4 border-greenPortfolio  border-dotted ">
                  <img
                    className="m-auto rounded-full w-96 h-86 border-[6px] border-bluePortfolio dark:border-white "
                    src="/profilePortfolio.png"
                    alt="portfoliopicture"
                  />
                  <div className="mt-5 m-auto w-[180px]">
                    <Link
                      to="https://www.linkedin.com/in/miguelangelhernandezidarraga/"
                      className=""
                    >
                      <FontAwesomeIcon
                        className="cursor-pointer text-4xl text-orangePortfolio hover:text-bluePortfolio dark:hover:text-white"
                        icon={faLinkedin}
                      />
                    </Link>
                    <Link to="https://github.com/Migo1218" className="m-8">
                      <FontAwesomeIcon
                        className="cursor-pointer text-4xl text-orangePortfolio hover:text-bluePortfolio dark:hover:text-white"
                        icon={faGithub}
                      />
                    </Link>
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
              <div className="w-full md:w-4/5 mt-[30%] m-auto md:bg-transparent bg-blue-100 rounded-lg dark:bg-bluePortfolio">
                <div className="">
                  <div className=" relative">
                    <div className="animate-bounce w-20 h-20 rounded-full bg-iconColor opacity-30 absolute z-0 md:bottom-0"></div>
                    <div className="relative z-20">
                      <h1 className="z-10 text-md font-body text-5xl text-orangePortfolio dark:text-white">
                        About me
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-10 p-4">
                  <p className="text-2xl text-bluePortfolio dark:text-white ">
                    I'm a Freelancer Front-end Developer with over 2 years of
                    experience. I'm from Colombia. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences. I like to
                    provide real solutions to everyday problems through apps
                    development.
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
