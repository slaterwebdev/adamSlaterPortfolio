import "devicon/devicon.min.css";
import { FaLaptop, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { RiStackLine } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";

export const iconMapper: { [key: string]: JSX.Element } = {
  javascript: <i className="devicon-javascript-plain colored"></i>,
  html: <i className="devicon-html5-plain-wordmark colored"></i>,
  css: <i className="devicon-css3-plain-wordmark colored"></i>,
  typescript: <i className="devicon-typescript-plain colored"></i>,
  react: <i className="devicon-react-original-wordmark colored"></i>,
  vueJs: <i className="devicon-vuejs-plain-wordmark colored"></i>,
  firebase: <i className="devicon-firebase-plain-wordmark colored"></i>,
  nodeJs: <i className="devicon-nodejs-plain-wordmark colored"></i>,

  redux: <i className="devicon-redux-original colored"></i>,
  tailwind: <i className="devicon-tailwindcss-original colored"></i>,
  bootstrap: <i className="devicon-bootstrap-plain colored"></i>,
  sass: <i className="devicon-sass-original colored"></i>,
  wordpress: <i className="devicon-wordpress-plain-wordmark"></i>,
  vite: <i className="devicon-vite-original-wordmark colored"></i>,
  webpack: <i className="devicon-webpack-plain-wordmark"></i>,
  azure: <i className="devicon-azuredevops-plain colored"></i>,
  git: <i className="devicon-git-plain colored"></i>,
  github: <i className="devicon-github-original colored"></i>,

  api: <AiOutlineApi size={24} />,
  laptop: <FaLaptop size={24} />,
  stack: <RiStackLine size={24} />,
  phone: <FaPhone className="text-primary" />,
  email: <FaMailBulk className="text-primary" />,
  linkedin: <FaLinkedin size={24} />,
  cv: <HiDocumentText size={20} />,
};
