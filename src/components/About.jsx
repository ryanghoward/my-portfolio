import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#001425] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#96d8d8]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Ryan, nice to meet you! Please take a look around</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses, all the
              way up to large corporations. What could you accomplish if you had
              a software expert available at your fingertips? Let's find out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;