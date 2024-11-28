import { ExperienceItem, GridItem, SkillsMapper } from "@/utils/types";


//GENERAL
export const linkedinURL = "https://www.linkedin.com/in/adam-slater-web-dev/";
export const githubURL = "https://github.com/slaterwebdev"
export const portfolioRepoURL = "https://github.com/slaterwebdev/adamSlaterPortfolio";

// HOME PAGE
export const homeContent = {
  tagLine: "HELLO, MY NAME IS",
  title: "Adam Slater",
  subTitle: "Web Developer",
  phone: "07547620652",
  email: "adamslater1996@outlook.com",
};

// ABOUT PAGE
export const skillsMapper: SkillsMapper[] = [
  {
    title: "Languages & Frameworks",
    type: "icons",
    content: [
      "javascript",
      "html",
      "css",
      "typescript",
      "react",
      "nodeJs",
      "vueJs",
      "firebase",
    ],
  },
  {
    title: "Dev Tools & Libraries",
    type: "icons",
    content: [
      "redux",
      "tailwind",
      "sass",
      "bootstrap",
      "wordpress",
      "vite",
      "webpack",
    ],
  },
  {
    title: "Platforms & Version Control",
    type: "icons",
    content: ["azure", "github", "git"],
  },
  {
    title: "Dev Practices & Concepts",
    type: "list",
    content: [
      "REST APIs",
      "UX/UI",
      "Agile Methodologies",
      "Software Design Principles",
    ],
  },
];

export const experienceList: ExperienceItem[] = [
  {
    yearsServed: "2023 - 2024",
    id: "Victorian Plumbing",
    jobTitle: "MID - SENIOR FRONTEND DEVELOPER",
    content:
      "Designed and optimised internal data management applications for one of the UK's leading e-commerce platforms, leveraging React and TypeScript within an Agile sprint system and Azure DevOps. Actively participated in Three Amigos, Devsols, and software design sessions to shape architecture and implementation!",
  },
  {
    yearsServed: "2022 - 2023",
    id: "Made by Sauce",
    jobTitle: "FRONTEND DEVELOPER",
    content:
      "Contributed to internal apps for B2B clients and numerous “quote and buy” SPAs for B2C clients, including Arnold Clark, DARWIN, Howdens, Triumph, Ducati, and Adrian Flux, using React, Vue.js, TypeScript,!",
  },
  {
    yearsServed: "2021 - 2022",
    id: "Big Marketing",
    jobTitle: "JUNIOR REACT AND JAVASCRIPT DEVELOPER",
    content:
      "Developed a variation of event and sign-up sites for a small London-based agency specialising in the automotive industry using react and plain javascript. As well as assisting with implementing JavaScript on WordPress sites by building and customising plugins.",
  },
];

// PORTFOLIO PAGE
export const serviceOptions: GridItem[] = [
  {
    id: "laptop",
    content:
      "I excel at building scalable, maintainable web applications using React, Vue.js, and TypeScript, delivering clean, reusable code that drives performance and supports millions of users.",
  },
  {
    id: "stack",
    content:
      "With a strong foundation in frontend development using React and Vue.js, I am expanding into Node.js to deliver seamless, end-to-end solutions. I consistently adapt and grow, always ensuring versatility.",
  },
  {
    id: "api",
    content:
      "I specialize in integrating REST APIs to power dynamic, data-driven interfaces paired with pixel-perfect UIs, enhancing user experiences, boosting conversions, and streamlining workflows.",
  },
];