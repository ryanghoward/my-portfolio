import React from "react";
import RGHgif from "../assets/RGH.gif";

const LandingPage = () => {
  return (
    <div>
      <img src={RGHgif} alt='Logo' style={{ width: "100px", height: "80px" }} />
      <button>Enter site</button>
    </div>
  );
};

export default LandingPage;
