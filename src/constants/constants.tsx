import { FaLaptop, FaMobile, FaPen } from "react-icons/fa";

// HOME PAGE
export const homeContent = {
  tagLine: "HELLO, MY NAME IS",
  title: "Adam Slater",
  subTitle: "Full-Stack dev",
  phone: "07547620652",
  email: "adamslater1996@outlook.com",
};

// ABOUT PAGE
export const skillsMapper = [
  { title: "Languages", icons: ["javascript", "html", "css"] },
  { title: "Frameworks & Libraries", icons: ["react", "nodeJs", "vueJs"] },
  { title: "Tools", icons: ["sass", "git", "github"] },
];

// PORTFOLIO PAGE
export const serviceOptions = [
  {
    icon: <FaLaptop size={24} />,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
    ariaLabel: "Laptop Icon",
  },
  {
    icon: <FaMobile size={24} />,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
    ariaLabel: "Mobile Icon",
  },
  {
    icon: <FaPen size={24} />,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
    ariaLabel: "Pen Icon",
  },
];

// GENERAL
export const currentYear = new Date().getFullYear();
