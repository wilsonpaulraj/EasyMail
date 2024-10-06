import React from "react";
import "../customstyles.css";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-background">
      <div className=" min-h-screen max-w-full w-full px-24 py-10">
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <img className="h-10 w-10 mr-3" src="/logo.svg" alt="" />
            <span className="font-bold text-primary text-3xl">Easy</span>
            <span className="font-bold text-secondary text-3xl">Mail</span>
          </div>
          <div className="flex items-center justify-between w-64">
            <span className=" underline text-blue-900 text-lg font-normal">Learn More</span>
            <button className="rounded-sm border-0 bg-primary hover:scale-105 hover:bg-orange-700 hover:shadow-lg shadow-black transition ease-in-out duration-300 p-2 px-5 font-bold text-white ">GET STARTED</button>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center justify-evenly flex-1 py-28 pr-5">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-6xl font-lexend text-primary">Too busy to read all the e-mails?</p>
              <p className="font-bold text-6xl font-lexend text-secondary">We got you!</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-normal font-monsterrat w-9/12 text-xl text-wrap">
                Effortlessly manage your inbox with EasyMail's smart summarization and organization tools.
                click here to get started now
              </p>
              <button className="rounded-sm border-0 w-56 bg-primary hover:bg-orange-700 transition ease-in-out duration-300 p-2 px-5 font-bold text-white ">GET STARTED</button>
            </div>
          </div>
          <div className="flex flex-1 items-center w-9/12 h-9/12">
            <img className="scale-90" src="/mails.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center">
         
          <div className="flex justify-center gap-5">

           
            <div className="rounded-xl w-96 h-[400px]">
              

            </div>
           
          </div>

        </div>


      </div>
    </div>
  );
};

export default Home;
