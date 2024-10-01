import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom"
import { routeConfig, routes } from "./Router/routes";
import { Navbar }  from "./application/components/Navbar";
import logo from "./assets/logo.png";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative h-screen flex flex-col overflow-x-hidden">
          <div className="circle -right-64 -top-64 absolute rounded-full bg-gradient-to-r from-sky-200 to-neutral-100 opacity-50"></div>
          <Navbar 
            links={routeConfig.map(route => route.path)}
            title="ADAM SLATER"
            logo={logo}
          />
          <div className="px-4 pb-4 grow z-10 w-screen">
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
