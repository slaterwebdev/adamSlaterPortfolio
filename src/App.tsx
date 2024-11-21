import { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { routes, getFormattedLinks } from "./application/utils/router";
import { Navbar } from "@/application/features/layout/Navbar";
import logo from "@/assets/logo.png";
import "./index.css";
import { Footer } from "@/application/features/layout/Footer";

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
