import { Experience, GridItem } from "@/types/types";

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

export const experienceList: Experience[] = [
  {
    yearsServed: "2023 - 2024",
    companyName: "Victorian Plumbing",
    jobTitle: "MID - SENIOR FRONTEND DEVELOPER",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae similique quis qui beatae commodi aperiam quaerat, voluptatum corporis obcaecati quisquam maxime reprehenderit consectetur!",
  },
  {
    yearsServed: "2022 - 2023",
    companyName: "Made by Sauce",
    jobTitle: "FRONTEND DEVELOPER",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae similique quis qui beatae commodi aperiam quaerat, voluptatum corporis obcaecati quisquam maxime reprehenderit consectetur!",
  },
  {
    yearsServed: "2021 - 2022",
    companyName: "Big Marketing",
    jobTitle: "JUNIOR FRONTEND DEVELOPER",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae similique quis qui beatae commodi aperiam quaerat, voluptatum corporis obcaecati quisquam maxime reprehenderit consectetur!",
  },
];

// PORTFOLIO PAGE
export const serviceOptions: GridItem[] = [
  {
    icon: 'laptop',
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
  },
  {
    icon: 'mobile',
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
  },
  {
    icon: 'pen',
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
  },
];

// GENERAL
export const currentYear = new Date().getFullYear();
