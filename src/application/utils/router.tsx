import { NavLink, Route } from "react-router-dom";
import { scrollToTop } from "@/application/utils/utilities";
import { About, Contact, Home, Portfolio } from "@/application/features/pages";

const routeConfig = [
  { path: "", Component: Home },
  { path: "about", Component: About },
  { path: "portfolio", Component: Portfolio },
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
      const linkStatus = `hover:text-primary px-2 hover:scale-110 ${pathname.slice(1) === link ? "text-secondary" : "text-white"}`;
      return (
        <NavLink
          key={`link-${link}`}
          className={linkStatus}
          to={`/${link}`}
          onClick={() => scrollToTop()}
        >
          {formattedLink}
        </NavLink>
      );
    });
