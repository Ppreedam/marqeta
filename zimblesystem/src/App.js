import React from "react";
import { Route, Routes } from "react-router-dom";
import Platform from "./Pages/Platform/Platform";
import Solutions from "./Pages/Solutions/Solutions";
import Developers from "./Pages/Developers/Developers";
import Resources from "./Pages/Resources/Resources";
import Company from "./Pages/Company/Company";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ContacctUs from "./Pages/ContactUs/ContactUs";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/platform" element={<Platform />} />
      <Route exact path="/solutions" element={<Solutions />} />
      <Route exact path="/developers" element={<Developers />} />
      <Route exact path="/resources" element={<Resources />} />
      <Route exact path="/company" element={<Company />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/contactus" element={<ContacctUs />} />
    </Routes>
  );
};

export default App;
