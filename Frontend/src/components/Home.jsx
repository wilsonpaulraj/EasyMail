import React from "react";
import "../customstyles.css";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden bg-background min-h-screen px-24 py-10">
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <img className="h-10 w-10 mr-3" src="/logo.svg" alt="" />
          <span className="font-bold text-primary text-2xl">Easy</span>
          <span className="font-bold text-slate-600 text-2xl">Mail</span>
        </div>
        <div className="flex items-center justify-between w-64">
          <span className=" underline text-blue-900 text-lg font-normal">Learn More</span>
          <button className="rounded-sm border-0 bg-primary p-2 px-5 font-bold text-white ">Get Started</button>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center justify-evenly flex-1 py-28 pr-5">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-6xl font-lexend text-primary">Too busy to read all the e-mails?</p>
            <p className="font-bold text-6xl font-lexend text-highlight">We got you!</p>
          </div>
          <div>
            <p className="font-normal font-monsterrat w-9/12 text-lg text-wrap">
              Effortlessly manage your inbox with EasyMail's smart summarization and organization tools.
            </p>
          </div>

        </div>
        <div className="flex flex-1 items-center w-9/12 h-9/12">
          <img className=" scale-90" src="/mails.png" alt="" />
        </div>
      </div>


    </div>
  );
};

export default Home;
