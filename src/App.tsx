import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom"
import { logoText, navTitle } from "./constants/constants";
import { routeConfig, routes } from "./Router/routes";
import Navbar  from "./application/components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar 
          links={routeConfig.map(route => route.path)}
          title={navTitle}
          logo={logoText} 
        />
        <div className="px-6 py-4">
          <Routes>
            {routes}
          </Routes> 
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App
