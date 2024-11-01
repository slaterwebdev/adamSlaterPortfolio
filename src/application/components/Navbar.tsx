import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type NavProps = {
  links: (pathname: string) => Array<ReactNode>;
  title: string;
  logo: string;
};

export const Navbar = ({ links, title, logo }: NavProps) => {
  const { pathname } = useLocation();
  return (
    <div className="navbar bg-transparent shadow-none z-10 max-w-screen-xl">
      <div className="navbar-start">
        <NavLink className="navbar-item pl-2 flex items-center" to={"/"}>
          <img className="w-12" src={logo} alt={`${title} logo`} />
          <span className="font-semibold invisible sm:visible">{title}</span>
        </NavLink>
      </div>

      <div className="navbar-end gap-5">{links(pathname)}</div>
    </div>
  );
};
