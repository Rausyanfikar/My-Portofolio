import React, { Component } from 'react';
import { FaVuejs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';

import { IconContext } from 'react-icons';

export default class Card extends Component {
  render(props) {
    return (
      <div className="flex flex-row bg-[#0a192f] text-white">
        <div className="mx-10 list-disc  ">
          <div className="p-5  sm:w-full flex justify-center flex-col items-center m-auto ">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold mb-4 block border-b-4 border-[rgb(39,123,53)]">
              {this.props.title}
            </a>
            <div className=" h-auto w-auto">
              <img className=" h-auto w-full " src={this.props.image} alt="manulife-home-page" />
            </div>

            <div className="flex gap-x-2 justify-center items-center mt-5">
              <IconContext.Provider
                value={{
                  size: '2rem',
                }}
              >
                <FaReact title="Vue JS Logo" />
                <SiTailwindcss />
                <SiVercel />
              </IconContext.Provider>
            </div>

            <p className="mt-5">{this.props.deskripsi}</p>
          </div>
        </div>
      </div>
    );
  }
}
