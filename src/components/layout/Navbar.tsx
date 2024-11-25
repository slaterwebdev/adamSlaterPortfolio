import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type NavbarProps = {
  links: (pathname: string) => Array<ReactNode>;
  title: string;
  logo: string;
};

export const Navbar = ({ links, title, logo }: NavbarProps) => {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center justify-between bg-transparent backdrop-blur-md rounded-b-md shadow-none z-20 fixed h-20 w-full">
      <NavLink className="px-0 flex items-center hover:scale-110" to={"/"}>
        <img className="w-12" src={logo} alt={`${title} logo`} />
        <h1 className="font-semibold invisible sm:visible w-">{title}</h1>
      </NavLink>

      <div className="gap-4">{links(pathname)}</div>
    </div>
  );
};
