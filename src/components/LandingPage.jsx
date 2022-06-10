import React from "react";
import RGHgif from "../assets/RGH.gif";

const LandingPage = () => {
  return (
    <div className='w-screen h-90vh bg-[#000]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <img className='w-auto h-auto' src={RGHgif} alt='Logo' />
        <button className='text-white border-2 px-4 my-4'>Enter site</button>
      </div>
    </div>
  );
};

export default LandingPage;

//! This is currently not being used
