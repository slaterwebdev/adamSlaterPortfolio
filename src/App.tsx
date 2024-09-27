import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom"
import { routeConfig, routes } from "./Router/routes";
import Navbar  from "./application/components/Navbar";
import logo from "./assets/logo.png";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="h-screen flex flex-col">
          <Navbar 
            links={routeConfig.map(route => route.path)}
            title="ADAM SLATER"
            logo={logo}
          />
          <div className="px-6 py-4 grow">
            <Routes>
              {routes}
            </Routes> 
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App
