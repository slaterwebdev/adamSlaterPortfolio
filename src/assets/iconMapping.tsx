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
  github: <FaGithub />,
};
