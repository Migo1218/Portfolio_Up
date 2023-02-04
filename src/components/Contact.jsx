import React from "react";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
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
    <div className="bg-white dark:bg-bluePortfolio md:h-fit py-6 md:pb-32 xl:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        <div className="md:grid grid-cols-2 m-auto xl:py-14">
          <div className="py-8 lg:py-16 md:w-4/5 m-auto">
            <h2 className="mb-4 text-4xl font-body font-extrabold text-center text-bluePortfolio dark:text-white">
              What's your story?
            </h2>
            <p className="mb-4 text-3xl font-body text-center text-bluePortfolio dark:text-white">
              Get in touch
            </p>
            <p className="mb-4 text-lg italic font-light text-center text-bluePortfolio dark:text-white">
              Always available for freelancing if the right project comes along,
              Feel free to contact me.
            </p>

            <p className="italic text-lg font-light text-center text-orangePortfolio">
              miguelhernandezidarraga@gmail.com
            </p>
          </div>
          <div>
            <section class="xl:mt-32">
              <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl font-body font-extrabold text-center text-bluePortfolio dark:text-white">
                  Contact Us
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
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
