import { currentYear } from "@/constants/constants";
import { ReactNode } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";

type FooterProps = {
  links: (pathname: string) => Array<ReactNode>;
};

export const Footer = ({ links }: FooterProps) => {
  const { pathname } = useLocation();
  return (
    <footer className="bg-gray-800 text-white py-6 w-screen mt-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">
            &copy; {currentYear} Adam Slater. All rights reserved.
          </p>
        </div>

        <div className="mb-4 sm:mb-0 flex gap-6">{links(pathname)}</div>

        <div className="flex gap-4">
          <a
            href="https://github.com/slaterwebdev"
            aria-label="Github"
            className="hover:text-cyan-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-cyan-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
