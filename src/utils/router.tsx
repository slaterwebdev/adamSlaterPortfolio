import { NavLink, Route } from "react-router-dom";
import { scrollToTop } from "@/utils/utilities";
import { About, Contact, Home, Portfolio } from "@/pages";

const routeConfig = [
  { route: "Home", path: "/", Component: Home },
  { route: "About", path: "/about", Component: About },
  { route: "Portfolio", path: "/portfolio", Component: Portfolio },
  { route: "Contact", path: "/contact", Component: Contact },
];

export const routes = routeConfig.map(({ path, Component }) => (
  <Route key={`route-${path}`} path={path} element={<Component />} />
));

export const getRouterLinks = (currentPath: string) =>
  routeConfig.map(({ route, path }) => {
    const linkStatus = `hover:text-primary px-2 hover:scale-110 ${currentPath === path ? "text-secondary" : "text-white"}`;
    return (
      <NavLink
        key={`link-${path}`}
        className={linkStatus}
        to={`${path}`}
        onClick={() => scrollToTop()}
      >
        {route}
      </NavLink>
    );
  });
