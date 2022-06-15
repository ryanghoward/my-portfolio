import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
// import Ryan from "../assets/Ryan.PNG";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#001425]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* <div>
          <img className='w-21 mx-auto rounded-full' src={Ryan} alt='My face' />
        </div> */}
        <p className='text-[#96d8d8]'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#fff]'>
          Ryan G. Howard
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am a full-stack developer specializing in building and designing
          exceptional digital experiences. I am currently focused on building
          responsive full-stack web applications
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#639fb6]'>
              View my Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
