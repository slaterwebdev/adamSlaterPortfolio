import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaSass,
  FaGit,
  FaGithub,
  FaMobile,
  FaLaptop,
  FaPen,
} from "react-icons/fa";

export const iconMapper: { [key: string]: JSX.Element } = {
  javascript: <FaJs color="yellow" />,
  html: <FaHtml5 color="orange" />,
  css: <FaCss3Alt color="cyan" />,
  react: <FaReact color="blue" />,
  vueJs: <FaVuejs color="green" />,
  sass: <FaSass color="pink" />,
  nodeJs: <FaNodeJs color="blue" />,
  git: <FaGit color="orange" />,
  github: <FaGithub color="black" />,
  mobile: <FaMobile size={24} />,
  laptop: <FaLaptop size={24} />,
  pen: <FaPen size={24} />,
};
