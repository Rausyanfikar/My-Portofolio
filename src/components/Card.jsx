import React, { Component } from 'react';
import { FaVuejs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';
import karyawan from '../assets/karyawan.jpg';

import { IconContext } from 'react-icons';

export default class Card extends Component {
  render(props) {
    return (
      <div className="flex flex-row">
        <ul className="ml-5 list-disc  ">
          <li className="p-5 relative sm:w-full flex justify-center flex-col items-center m-auto">
            <a href="https://reksadana-manulife.com/" target="_blank" rel="noopener noreferrer" className="text-xl  mb-4 block">
              {this.props.title}
            </a>

            <img src={this.props.image} alt="manulife-home-page" />

            <div className="flex gap-x-2 justify-center items-center mt-5">
              <IconContext.Provider
                value={{
                  size: '2rem',
                }}
              >
                <FaReact title="Vue JS Logo" />
                <SiTailwindcss />
                <SiVercel />

                {/* <SiNuxtDotJs title="Nuxt JS Logo" /> */}
                {/* <SiTailwindcss title="Tailwind CSS Logo" /> */}
              </IconContext.Provider>
            </div>

            <p className="mt-5">A website that provides information on various investment products from Manulife Investment Management uses Vue JS and Nuxt JS to handle SEO and simplify routing, and Tailwind CSS as the CSS framework.</p>
          </li>
        </ul>
      </div>
    );
  }
}
