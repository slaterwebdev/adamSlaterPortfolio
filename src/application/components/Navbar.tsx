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
    <div className="navbar bg-transparent shadow-none z-20 max-w-screen-xl fixed h-20">
      <div className="navbar-start">
        <NavLink
          className="navbar-item px-0 flex items-center hover:scale-110"
          to={"/"}
        >
          <img className="w-12" src={logo} alt={`${title} logo`} />
          <span className="font-semibold invisible sm:visible">{title}</span>
        </NavLink>
      </div>

      <div className="navbar-end gap-4">{links(pathname)}</div>
    </div>
  );
};
