import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type NavbarProps = {
  links: (pathname: string) => Array<ReactNode>;
  title: string;
  logo: string;
};

export const Navbar = ({ links, title, logo }: NavbarProps) => {
  const { pathname } = useLocation();
  const scrollToTop = () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="navbar bg-transparent backdrop-blur-md rounded-b-md shadow-none z-20 max-w-screen-xl fixed h-20">
      <div className="navbar-start">
        <NavLink
          className="navbar-item px-0 flex items-center hover:scale-110"
          to={"/"}
          onClick={() => scrollToTop()}
        >
          <img className="w-12" src={logo} alt={`${title} logo`} />
          <span className="font-semibold invisible sm:visible">{title}</span>
        </NavLink>
      </div>

      <div className="navbar-end gap-4" onClick={() => scrollToTop()}>
        {links(pathname)}
      </div>
    </div>
  );
};
