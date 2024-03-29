/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { RiTodoFill } from "react-icons/ri";
import { MdWork, MdContactMail, MdCancel } from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router";
import { CgMenuGridR } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const location = useLocation();
  const [currentHome, setCurrentHome] = useState(false);
  const [currentAbout, setCurrentAbout] = useState(false);
  const [currentResume, setCurrentResume] = useState(false);
  const [currentSkills, setCurrentSkills] = useState(false);
  const [currentWork, setCurrentWork] = useState(false);
  const [currentContact, setCurrentContact] = useState(false);
  const [borderColor, setBorderColor] = useState("border-greenPortfolio");
  const activeLocation = (name) => {
    if (name === "Home") {
      setCurrentHome(true);
    } else {
      setCurrentHome(false);
    }

    if (name === "About") {
      setCurrentAbout(true);
    } else {
      setCurrentAbout(false);
    }

    if (name === "Resume") {
      setCurrentResume(true);
    } else {
      setCurrentResume(false);
    }

    if (name === "Skills") {
      setCurrentSkills(true);
    } else {
      setCurrentSkills(false);
    }

    if (name === "Work") {
      setCurrentWork(true);
    } else {
      setCurrentWork(false);
    }

    if (name === "Contact") {
      setCurrentContact(true);
    } else {
      setCurrentContact(false);
    }
  };

  const navigation = [
    {
      name: "Home",
      path: "/",
      icon: AiFillHome,
      current: currentHome,
      border: "border-greenPortfolio",
    },
    {
      name: "About",
      path: "/about",
      icon: BsPersonFill,
      current: currentAbout,
      border: "border-orangePortfolio",
    },
    {
      name: "Resume",
      path: "/resume",
      icon: RiTodoFill,
      current: currentResume,
      border: "border-greenPortfolio",
    },
    {
      name: "Skills",
      path: "/skills",
      icon: GiSkills,
      current: currentSkills,
      border: "border-greenPortfolio",
    },
    {
      name: "Work",
      path: "/work",
      icon: MdWork,
      current: currentWork,
      border: "border-greenPortfolio",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: MdContactMail,
      current: currentContact,
      border: "border-orangePortfolio",
    },
  ];
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        {/* ///////// VERSION MOBILE /////////////// */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-blackPortfolio border-r-8 border-greenPortfolio">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <MdCancel
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img src="/devMigoLogo.png" alt="Logo" />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => {
                          navigate(item.path);
                          activeLocation(item.name);

                          setSidebarOpen(false);
                        }}
                        className={classNames(
                          item.current
                            ? "bg-hoverColor text-white"
                            : "text-white hover:bg-hoverColor hover:text-white",
                          "group cursor-pointer font-semibold flex text-center text-lg px-6 py-2 text-md rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-greenPortfolio hover:text-greenPortfolio"
                              : "text-iconColor group-hover:text-greenPortfolio",
                            "mr-3 flex-shrink-0 h-6 w-8 "
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </div>
                    ))}
                  </nav>
                </div>
                {/* <div className="flex-shrink-0 flex bg-gray-700 p-4">goh</div> */}
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>
        {/* VERSION ESCRITORIO  */}
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}

          <div
            className={`flex-1 flex flex-col min-h-0 bg-bluePortfolio border-r-8 ${borderColor} dark:border-bluePortfolio`}
          >
            <div className="flex-1 flex flex-col pt-8 pb-4 overflow-y-auto">
              <img src="/devMigoLogo.png" alt="Logo" />
              {/* </div> */}

              <nav className="mt-10 flex-1 px-4 space-y-2">
                {navigation.map((item) => (
                  <p
                    key={item.name}
                    onClick={() => {
                      navigate(item.path);
                      setBorderColor(item.border);
                      activeLocation(item.name);
                    }}
                    className={classNames(
                      // location.pathname !== "/" &&
                      //   location.pathname.includes(item.path)
                      item.current
                        ? "bg-hoverColor text-white"
                        : "text-white hover:bg-hoverColor hover:text-white",
                      "group cursor-pointer font-semibold flex text-center text-lg px-6 py-2 text-md rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-greenPortfolio hover:text-greenPortfolio"
                          : "text-iconColor group-hover:text-greenPortfolio",
                        "mr-3 flex-shrink-0 h-6 w-8 "
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </p>
                ))}
              </nav>
            </div>
            {/* PENDIENTE  */}
            {/* <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      Miguel Hernández
                    </p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <CgMenuGridR className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
