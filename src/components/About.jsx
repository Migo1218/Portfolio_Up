import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
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
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="m-auto rounded-full w-96 h-86 border-[6px] border-bluePortfolio dark:border-white "
                    src="/profilePortfolio.png"
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
              <div className="w-full md:w-4/5 mt-[30%] m-auto md:bg-transparent bg-blue-100 rounded-lg dark:bg-bluePortfolio">
                <div className="">
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    data-aos-duration="400"
                    className="text-5xl pt-3 md:text-7xl text-orangePortfolio font-body text-center"
                  >
                    Biography
                  </p>
                </div>
                <div className="mt-24 p-4">
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
