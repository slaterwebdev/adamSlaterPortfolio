import { WorkExperience, GridItem } from "@/application/utils/types";

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

export const experienceList: WorkExperience[] = [
  {
    yearsServed: "2023 - 2024",
    id: "Victorian Plumbing",
    jobTitle: "MID - SENIOR FRONTEND DEVELOPER",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae similique quis qui beatae commodi aperiam quaerat, voluptatum corporis obcaecati quisquam maxime reprehenderit consectetur!",
  },
  {
    yearsServed: "2022 - 2023",
    id: "Made by Sauce",
    jobTitle: "FRONTEND DEVELOPER",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae similique quis qui beatae commodi aperiam quaerat, voluptatum corporis obcaecati quisquam maxime reprehenderit consectetur!",
  },
  {
    yearsServed: "2021 - 2022",
    id: "Big Marketing",
    jobTitle: "JUNIOR FRONTEND DEVELOPER",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae similique quis qui beatae commodi aperiam quaerat, voluptatum corporis obcaecati quisquam maxime reprehenderit consectetur!",
  },
];

// PORTFOLIO PAGE
export const serviceOptions: GridItem[] = [
  {
    id: "laptop",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
  },
  {
    id: "mobile",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
  },
  {
    id: "pen",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo ad sunt nostrum sit minus mollitia? Atque perspiciatis dolore voluptatem ratione reiciendis animi suscipit?",
  },
];
