import React from "react";
import "./Homepage.css";

import Landingpage from "../Landingpage/Landingpage";
import Navbar from "../Navbar/Navbar";
import Aboutpage from "../Aboutpage/Aboutpage";
import Myskills from "../Myskills/Myskills";
import Projectpage from "../Projectpage/Projectpage";
import Contactpage from "../Contactpage/Contactpage";
function Homepage() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <Aboutpage />
      <Myskills />
      <Projectpage />
      <Contactpage />
    </>
  );
}

export default Homepage;
