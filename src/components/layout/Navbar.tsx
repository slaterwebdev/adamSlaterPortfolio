import { scrollToTop } from "@/utils/utilities";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

type NavbarProps = {
  navLinks: Array<ReactElement>;
  title: string;
  logo: string;
};

export const Navbar = ({ navLinks, title, logo }: NavbarProps) => (
  <nav className="bg-transparent backdrop-blur-md z-20 p-4 fixed w-screen">
    <div className="mx-auto flex items-center justify-between max-w-screen-xl">
      <NavLink
        className="flex items-center hover:scale-110"
        to={"/"}
        onClick={() => scrollToTop()}
      >
        <img className="w-12" src={logo} alt={`${title} logo`} />
        <h1 className="font-semibold invisible sm:visible">{title}</h1>
      </NavLink>

      <div className="gap-4 text-black">{navLinks}</div>
    </div>
  </nav>
);
