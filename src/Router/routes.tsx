import { NavLink, Route } from "react-router-dom";
import { Contact, Home, Portfolio, About } from "@/application/pages";

const routeConfig = [
  { path: "", Component: Home },
  { path: "portfolio", Component: Portfolio },
  { path: "about", Component: About },
  { path: "contact", Component: Contact },
];

export const routes = routeConfig.map(({ path, Component }) => (
  <Route key={`route-${path}`} path={path} element={<Component />} />
));

export const getFormattedLinks = (pathname: string) =>
  routeConfig
    .map((route) => route.path)
    .map((link) => {
      const formattedLink =
        link === "" ? "Home" : link.charAt(0).toUpperCase() + link.slice(1);
      const linkStatus = `hover:text-cyan-500 px-2 ${pathname.slice(1) === link ? "text-cyan-400" : "text-white"}`;
      return (
        <NavLink key={`link-${link}`} className={linkStatus} to={`/${link}`}>
          {formattedLink}
        </NavLink>
      );
    });
