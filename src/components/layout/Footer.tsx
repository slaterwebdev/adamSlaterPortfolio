import { githubURL, linkedinURL } from "@/constants/constants";
import { iconMapper } from "@/utils/iconMapper";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

type FooterProps = {
  links: (pathname: string) => Array<ReactNode>;
};

const currentYear = new Date().getFullYear();

export const Footer = ({ links }: FooterProps) => {
  const { pathname } = useLocation();
  return (
    <footer className="bg-gray-800 text-white py-6 w-screen">
      <div className="container mx-auto flex flex-col justify-between items-center sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">
            &copy; {currentYear} Adam Slater. All rights reserved.
          </p>
        </div>

        <div className="mb-4 flex gap-6 sm:mb-0">{links(pathname)}</div>

        <div className="flex gap-4">
          <a
            href={githubURL}
            aria-label="Github"
            target="_blank"
            className="hover:text-primary"
          >
            {iconMapper["github"]}
          </a>
          <a
            href={linkedinURL}
            aria-label="LinkedIn"
            target="_blank"
            className="hover:text-primary"
          >
            {iconMapper["linkedin"]}
          </a>
        </div>
      </div>
    </footer>
  );
};
