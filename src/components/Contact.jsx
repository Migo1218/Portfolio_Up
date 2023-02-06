import React from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      axios
        .post("https://formsubmit.co/ajax/miguelhernandezidarraga@gmail.com", {
          email: values.email,
          name: values.name,
          message: values.message,
        })
        .then((response) => {
          console.log(response);
          Swal.fire({
            title: "Email sent successfully",
            text: "¡We will get in touch!",
            icon: "success",
            confirmButtonColor: "#1d304b",
            confirmButtonText: "Go to home",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    },
  });
  return (
    <div className="bg-white  dark:bg-bluePortfolio xl:h-screen md:h-fit h-fit py-6 md:pb-32 xl:pb-0">
      <div className="w-4/5 mt-24 m-auto px-4 xl:px-2">
        <div className="md:grid grid-cols-2 m-auto xl:py-14">
          <div className="md:w-4/5 m-auto">
            <h2 className="mb-4 text-4xl font-body font-extrabold text-center text-bluePortfolio dark:text-white">
              What's your story?
            </h2>
            <p className="mb-4 text-3xl font-body text-center text-bluePortfolio dark:text-white">
              Get in touch
            </p>
            <p className="mb-4 text-lg italic font-light text-center text-bluePortfolio dark:text-white">
              I’m always up for a chat. Pop me an email at{" "}
              <span className="italic text-lg font-light text-center text-orangePortfolio">
                miguelhernandezidarraga@gmail.com
              </span>{" "}
              or give me a shout on social media.
            </p>
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
          </div>
          <div>
            <div class="md:w-4/5 px-4 m-auto md:mt-0 mt-10">
              <h2 class="mb-4 text-4xl font-body font-extrabold text-center text-bluePortfolio dark:text-white">
                Contact Me
              </h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    rows="6"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-5 font-semibold py-3 px-5 hover:bg-orangePortfolio text-sm text-center text-white rounded-lg bg-bluePortfolio dark:bg-iconColor sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-orangePortfolio dark:focus:ring-primary-800"
                >
                  Send message
                </button>
                <input
                  type="hidden"
                  name="_next"
                  value="https://portfolio-up-omega.vercel.app/"
                />
                <input type="hidden" name="_captcha" value="false" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
