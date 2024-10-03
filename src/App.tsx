import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom"
import { routes, getFormattedLinks } from "./Router/routes";
import { Navbar }  from "./application/components/Navbar";
import logo from "./assets/logo.png";
import "./index.css"
import { Footer } from "./application/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative h-screen flex items-center bg-white flex-col overflow-x-hidden">
          <div className="circle -right-64 -top-64 absolute rounded-full bg-gradient-to-r from-cyan-400 to-gray-50 opacity-50"></div>
          
          <Navbar 
            links={getFormattedLinks}
            title="ADAM SLATER"
            logo={logo}
          />

          <div className="px-4 z-10 w-screen max-w-screen-xl">
            <Routes>
              {routes}
            </Routes> 
          </div>

          <Footer links={getFormattedLinks} />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App
