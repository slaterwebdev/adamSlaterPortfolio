import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes, navLinks } from "@/utils/router";
import { Navbar, Footer } from "@/components";
import logo from "@/assets/logo.png";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center flex-col overflow-x-hidden px-4">
          <Navbar navLinks={navLinks} title="ADAM SLATER" logo={logo} />
          <Routes>{routes}</Routes>
          <Footer navLinks={navLinks} />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
