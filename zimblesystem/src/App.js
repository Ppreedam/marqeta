import React from "react";
import { Route, Routes } from "react-router-dom";
import Platform from "./Pages/Platform/Platform";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/ContactUs/Contact";
import LandingPageNavbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";

import Aboutus from "./Pages/AboutUS/Aboutus";
import Product from "./Pages/Product/Product";
import ComingSoon from "./Components/ComingSoon/ComingSoon"

const App = () => {
  return (
    <>
      <div>
        <LandingPageNavbar />
      </div>

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/platform" element={<Platform />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/products" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
