import React from 'react';
import Header from './Header';
import { Navbar } from './Navbar';

const Layout = (props) => {
  return (
    <div className="bg-[#0a192f] h-full w-full">
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
