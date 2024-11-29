import { githubURL, linkedinURL } from "@/constants/constants";
import { iconMapper } from "@/utils/iconMapper";
import { ReactNode } from "react";

type FooterProps = {
  navLinks: Array<ReactNode>;
};

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    href: githubURL,
    label: "Visit Adam Slater's GitHub profile",
    icon: iconMapper["github"],
  },
  {
    href: linkedinURL,
    label: "Visit Adam Slater's LinkedIn profile",
    icon: iconMapper["linkedin"],
  },
];

export const Footer = ({ navLinks }: FooterProps) => (
  <footer className="bg-gray-800 text-white p-4 w-screen">
    <div className="mx-auto max-w-screen-xl flex flex-col justify-between items-center sm:flex-row gap-4">
      <p className="text-sm">
        &copy; {currentYear} Adam Slater. All rights reserved.
      </p>

      <nav className="flex gap-6">{navLinks}</nav>

      <div className="flex gap-4">
        {socialLinks.map(({ href, label, icon }, index) => (
          <a
            key={index}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary focus:outline focus:outline-2 focus:outline-primary"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
