import { Route } from "react-router-dom"
import { Contact, Home, Portfolio, Skills } from "../application/pages";

export const routeConfig = [
    { path: '', Component: Home },
    { path: 'portfolio', Component: Portfolio },
    { path: 'skills', Component: Skills },
    { path: 'contact', Component: Contact },
];

export const routes = routeConfig.map(({path, Component}) => 
    <Route key={`route-${path}`} path={path} element={<Component />}/>)

 