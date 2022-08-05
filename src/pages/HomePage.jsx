import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-4xl py-4 sm:text-6xl font-bold text-[#ccd6f6] mb-1">
            <span className="text-[rgb(39,123,53)]">Welcome </span>To My Personal Website
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6] mb-1">Muhammad Rausyan Fikar</h2>
          <p className="text-[#8892b0]">FrontEnd Developer</p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
