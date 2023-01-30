import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="md:h-screen py-6
      bg-no-repeat 
     dark:bg-bluePortfolio 

      md:dark:bg-[length:400px_400px]
      md:dark:bg-[top_70%_left_60%] 
      md:bg-[length:900px_900px] 
      
      bg-[length:600px_600px] 
      
      bg-[top_30%_left_60%] 
      dark:bg-[top_80%_left_90%] 
      dark:bg-[length:200px_200px]
      


      bg-[url('/faviconjpg.png')]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className=" text-md italic font-semibold text-bluePortfolio dark:text-iconColor">
          miguelhernandezidarraga@gmail.com
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="">
            <div className="mt-32 ">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="400"
              >
                <h1 className="font-body text-3xl font-semibold text-bluePortfolio dark:text-white">
                  Hello, My name is ...
                </h1>
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="600"
                className="mt-5"
              >
                <h1
                  // style={{ fontSize: "55px" }}
                  className="text-5xl md:text-8xl italic font-body font-bold text-bluePortfolio dark:text-white"
                >
                  Miguel Hernández
                </h1>
              </div>
              <div className="mt-8">
                <h1
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  className="text-bluePortfolio font-body text-3xl font-semibold md:text-greenPortfolio dark:text-iconColor"
                >
                  Front-End Developer
                </h1>
              </div>
              <div
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                className="w-56 mt-16 md:w-[600px] justify-items-end"
              >
                <p className="text-bluePortfolio dark:text-white md:text-2xl font-semibold">
                  I'm a software developer interested in constant learning of
                  new technologies, I like to provide real solutions to everyday
                  problems through apps development
                </p>
              </div>
              <div className="w-5/5 mt-24 md:w-56">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r
                   from-iconColor via-cyan-00
                    to-cyan-600 hover:bg-gradient-to-br
                     focus:ring-4 focus:outline-none focus:ring-cyan-300
                      dark:focus:ring-cyan-800 shadow-lg
                       shadow-cyan-500/50 dark:shadow-lg
                        dark:shadow-cyan-800/80 font-semibold rounded-lg 
                        text-sm px-5 py-2.5 
                        text-center mr-2 mb-2 w-full"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
