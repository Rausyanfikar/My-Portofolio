import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-[#0a192f] p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Rausyan</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full flex-wrap lg:flex lg:items-center lg:w-auto">
        <div>
          <Link to="/" class="inline-block text-lg px-4 py-2 leading-none  text-white  hover:border-transparent hover:text-white hover:bg-[rgb(39,123,53)] mt-4 lg:mt-0">
            Home
          </Link>
          <Link to="/profile" class="inline-block text-lg px-4 py-2 leading-none  text-white  hover:border-transparent hover:text-white hover:bg-[rgb(39,123,53)] mt-4 lg:mt-0">
            Profile
          </Link>
          <Link to="/project" class="inline-block text-lg px-4 py-2 leading-none  text-white  hover:border-transparent hover:text-white hover:bg-[rgb(39,123,53)] mt-4 lg:mt-0">
            Project
          </Link>
        </div>
      </div>
    </nav>
  );
};