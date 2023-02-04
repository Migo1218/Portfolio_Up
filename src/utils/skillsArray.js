import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiMaterialui,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiSwagger,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import { BsFillCloudFill } from "react-icons/bs";
import { GiPlatform } from "react-icons/gi";

const skillsArray = [
  {
    nameTechno: "React JS",
    icon: FaReact,
    percentage: "80%",
    color: "#00DCFF",
  },
  {
    nameTechno: "Material UI",
    icon: SiMaterialui,
    percentage: "70%",
    color: "#0081CB",
  },

  {
    nameTechno: "Redux Toolkit",
    icon: SiRedux,
    percentage: "80%",
    color: "#764ABC",
  },

  {
    nameTechno: "Tailwind",
    icon: SiTailwindcss,
    percentage: "80%",
    color: "#01B7D6",
  },
  {
    nameTechno: "Cloudinary",
    icon: BsFillCloudFill,
    percentage: "80%",
    color: "#ECAC1A",
  },
  {
    nameTechno: "Node JS",
    icon: SiNodedotjs,
    percentage: "50%",
    color: "#8BBF3D",
  },
  {
    nameTechno: "Mongo DB",
    icon: SiMongodb,
    percentage: "50%",
    color: "#00684A",
  },
  {
    nameTechno: "Formik",
    icon: GiPlatform,
    percentage: "80%",
    color: "#0051CD",
  },
  {
    nameTechno: "Swagger",
    icon: SiSwagger,
    percentage: "70%",
    color: "#6A9500",
  },
  {
    nameTechno: "Postman",
    icon: SiPostman,
    percentage: "70%",
    color: "#FF6C37",
  },
  { nameTechno: "GitHub", icon: SiGithub, percentage: "70%", color: "#387FB5" },
];

export default skillsArray;
