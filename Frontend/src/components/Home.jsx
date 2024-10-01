import React from "react";
import "../customstyles.css";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="multiple-gradients h-screen">
        <div className="flex h-24 w-full justify-between p-10 px-24">
          <ul className="flex items-center justify-between">
            <li className="mx-10 mr-28 flex items-center">
              <img className="mr-2 h-10 w-10" src="/logo.svg" alt="" />
              <span className="text-xl font-semibold text-white">EasyMail</span>
            </li>
            <li className="mr-10 text-xl font-semibold text-white">
              Quick Read
            </li>
            <li className="mr-10 text-xl font-semibold text-white">Features</li>
            <li className="mr-10 text-xl font-semibold text-white">About Us</li>
            <li className="mr-10 text-xl font-semibold text-white">Contact</li>
          </ul>
          <ul className="flex items-center">
            <button className="h-10 w-32 rounded-sm border border-white text-xl font-semibold text-white hover:shadow-2xl">
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
