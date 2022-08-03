import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import img from '../assets/fik.png';

const Header = () => {
  return (
    <div className="md:flex flex-col justify-center mt-3">
      {/* photo */}
      <div className="flex justify-center">
        <img src={img} width="150" height="150" alt="rausyanfikar" className="rounded-full" />
      </div>

      {/* text */}
      <div className="px-8 w-full flex justify-center ">
        {/* name */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="sm:text-2xl mt-3 pb-8 ">Muhammad Rausyan Fikar</h1>

          {/* description */}
          <div className="flex justify-center sm:w-1/2 ">
            I am passionate about web development projects, especially in Frontend End Web Developer position. I am a junior Front-End Web Developer. I’ve been study Front End Web Developer around 4 month by my self, then I join Alterra
            Academy around 3 months(Immersive academy front end developer). For more than 2 months at Alterra Academy, I have attended Javascript programming language training, ReactJs, NextJS framework, HTML, CSS, and Tailwind. I have also
            created projects like Movies, ProjectEvent, WisataFoodie, ToDoApp, RestoranSunda, Ecommerce, Pokemon web.
          </div>

          {/* social media icons */}
          <div className="py-8">
            <div className="flex justify-center">
              <IconContext.Provider
                value={{
                  className: 'mr-2',
                  size: '2rem',
                }}
              >
                <a href="https://www.linkedin.com/in/muhammad-rausyan-fikar-792b0a237/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>

                <a href="https://github.com/Rausyanfikar" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </IconContext.Provider>
            </div>

            <p className="mt-2">(+62) 858 4146 9032</p>
            <p className="mt-2">rauzyanfikar@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
