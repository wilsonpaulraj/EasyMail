import React from "react";
import "../customstyles.css";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-background">
      <div className="min-h-screen w-full max-w-full px-24 py-10">
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <img className="mr-3 h-10 w-10" src="/logo.svg" alt="" />
            <span className="text-3xl font-bold text-primary">Easy</span>
            <span className="text-3xl font-bold text-secondary">Mail</span>
          </div>
          <div className="flex w-64 items-center justify-between">
            <span className="text-lg font-normal text-secondary underline">
              Learn More
            </span>
            <button className="rounded-sm border-0 bg-primary p-2 px-5 font-bold text-white shadow-black transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-700 hover:shadow-lg">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-1 flex-col items-center justify-evenly py-28 pr-5">
            <div className="flex flex-col gap-2">
              <p className="font-lexend text-6xl font-bold text-primary">
                Too busy to read all the e-mails?
              </p>
              <p className="font-lexend text-6xl font-bold text-secondary">
                We got you!
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="w-9/12 text-wrap font-monsterrat text-xl font-normal">
                Effortlessly manage your inbox with EasyMail's smart
                summarization and organization tools. click here to get started
                now
              </p>
              <button className="w-56 rounded-sm border-0 bg-primary p-2 px-5 font-bold text-white transition duration-300 ease-in-out hover:bg-orange-700">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="h-9/12 flex w-9/12 flex-1 items-center">
            <img className="scale-90" src="/mails.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-wrap justify-center gap-5">
            <div className="flex w-96 flex-col items-center rounded-xl">
              <img
                className="h-80 w-80"
                src="/email-classification.svg"
                alt=""
              />
              <p className="w-10/12 text-wrap text-center font-monsterrat text-lg">
                Effortlessly sort your emails into spam, promotions, and
                essentials with just one click—let us do the heavy lifting for
                you!
              </p>
            </div>
            <div className="flex w-96 flex-col items-center rounded-xl">
              <img
                className="h-80 w-80"
                src="/email-summarization.svg"
                alt=""
              />
              <p className="w-10/12 text-wrap text-center font-monsterrat text-lg">
                Don’t stress about the piles of emails in your inbox! Get a
                quick summary of all your messages in just seconds!
              </p>
            </div>
            <div className="flex w-96 flex-col items-center rounded-xl">
              <img
                className="h-80 w-80"
                src="/email-prioritization.svg"
                alt=""
              />
              <p className="w-10/12 text-wrap text-center font-monsterrat text-lg">
                Wouldn't it be great if your inbox were organized and sorted?
                Well, guess who's an expert at that! EasyMail expertly organizes
                your inbox by prioritizing your most important emails.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
