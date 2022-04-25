import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#001425] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/86510072-1618-44be-a1b2-00336fc0acb9'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#96d8d8] text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or shoot me an email - ryghoward@gmail.com
          </p>
          <div className='flex justify-around sm:justify-between pt-4 text-2xl text-[#96d8d8]'>
            <a
              href='https://www.linkedin.com/in/ryangeorgehoward/'
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/ryanghoward/' target='_blank'>
              <FaInstagram />
            </a>
            <a href='https://github.com/ryanghoward' target='_blank'>
              <FaGithub />
            </a>
          </div>
        </div>
        <input
          className='p-2 bg-[#ccd6f6]'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-[#639fb6] hover:border-[#639fb6] px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
