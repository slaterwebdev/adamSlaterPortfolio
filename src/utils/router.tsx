import { NavLink, Route } from "react-router-dom";
import { About, Contact, Home, Portfolio } from "@/pages";
import { scrollToTop } from "./utilities";

type RouteConfig = {
  route: string;
  path: string;
  Component: React.ComponentType;
};

const routeConfig: RouteConfig[] = [
  { route: "Home", path: "/", Component: Home },
  { route: "About", path: "/about", Component: About },
  { route: "Portfolio", path: "/portfolio", Component: Portfolio },
  { route: "Contact", path: "/contact", Component: Contact },
];

export const routes = routeConfig.map(({ path, Component }) => (
  <Route key={path} path={path} element={<Component />} />
));

export const navLinks = routeConfig.map(({ route, path }) => (
  <NavLink
    key={path}
    className={({ isActive }) =>
      `hover:text-primary px-2 hover:scale-110 transition-transform ${
        isActive ? "text-secondary font-bold" : ""
      }`
    }
    to={path}
    onClick={() => scrollToTop()}
  >
    {route}
  </NavLink>
));
