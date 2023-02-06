import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiMaterialui,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiSwagger,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiFirebase,
  SiStyledcomponents,
} from "react-icons/si";

const projectsArray = [
  {
    icons: [
      { id: 1, icon: FaReact },
      { id: 2, icon: SiTailwindcss },
      { id: 3, icon: SiRedux },
    ],
    nameProject: "Courses store",
    description:
      "In this project you can add whatever course to the cart in the seminar's section and you will can choose a date for the course, in the cart's section you can view the products choosed and delete them.",
    urlImage: "bg-[url(/diplomadosProject.png)]",
    urlViewDemo: "https://bookein.vercel.app/",
    urlViewCode: "https://github.com/Migo1218/bookein",
  },
  {
    icons: [
      { id: 1, icon: FaReact },
      { id: 2, icon: SiStyledcomponents },
      { id: 3, icon: SiRedux },
      { id: 3, icon: SiFirebase },
    ],
    nameProject: "Amazonas store",
    description:
      "In this store you can add whatever product to the cart but you need log in in the app with your google account or email and password, you can delete the products in cart´s section.",
    urlImage: "bg-[url(/amazonasProject.png)]",
    urlViewDemo: "https://employees1-67771.web.app/",
    urlViewCode: "https://github.com/Migo1218/Sprint3Amazonas",
  },

  {
    icons: [
      { id: 1, icon: SiHtml5 },
      { id: 2, icon: SiCss3 },
      { id: 3, icon: SiJavascript },
    ],
    nameProject: "BluckBuster Fake",
    description:
      "This is a basic page built with HTML, CSS and Javascript, here you will can see the movies with their descriptions and filter the best and worst movies.",
    urlImage: "bg-[url(/bluckbusterProject.png)]",
    urlViewDemo: "https://migo1218.github.io/SPRINT-1/",
    urlViewCode: "https://github.com/Migo1218/SPRINT-1",
  },
  //   {
  //     icons: [
  //       { id: 1, icon: FaReact },
  //       { id: 2, icon: SiStyledcomponents },
  //       { id: 3, icon: SiRedux },
  //       { id: 3, icon: SiFirebase },
  //     ],
  //     nameProject: "Amazonas store",
  //     description:
  //       "In this store you can add whatever product to the cart but you need log in in the app with your google account or email and password, you can delete the products in cart´s section.",
  //     urlImage: "bg-[url(/amazonasProject.png)]",
  //     urlViewDemo: "https://employees1-67771.web.app/",
  //     urlViewCode: "https://github.com/Migo1218/Sprint3Amazonas",
  //   },
];

export default projectsArray;
