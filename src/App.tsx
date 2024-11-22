import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes, getFormattedLinks } from "@/utils/router";
import { Navbar, Footer } from "@/components";
import logo from "@/assets/logo.png";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative flex items-center bg-white flex-col overflow-x-hidden">
          <Navbar links={getFormattedLinks} title="ADAM SLATER" logo={logo} />
          <Routes>{routes}</Routes>
          <Footer links={getFormattedLinks} />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
