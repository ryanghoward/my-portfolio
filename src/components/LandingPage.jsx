import React from "react";
import RGHgif from "../assets/RGH.gif";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-[#001425]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <img
          className='w-full h-screen'
          src={RGHgif}
          alt='Logo'
          style={{ width: "100px", height: "80px" }}
        />
        <button className='text-white border-2 px-4 my-4'>Enter site</button>
      </div>
    </div>
  );
};

export default LandingPage;
