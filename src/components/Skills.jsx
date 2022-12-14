import React from 'react';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import react from '../assets/react1.svg';
import tailwind from '../assets/tailwind.png';
import mui from '../assets/MUI1.png';
import bootstrap from '../assets/Bootstrap1.png';

export const Skills = () => {
  return (
    <div name="skill" className="w-full h-full bg-[#0a192f] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8 text-center">
          <p className="text-2xl font-bold inline border-b-4 border-[rgb(39,123,53)] ">Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto h-20" src={react} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mui} alt="HTML icon" />
            <p className="my-4">MATERIAL UI</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={bootstrap} alt="HTML icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
        </div>
      </div>
    </div>
  );
};
