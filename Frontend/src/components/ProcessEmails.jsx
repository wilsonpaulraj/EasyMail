import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaSync, FaInfoCircle } from "react-icons/fa"; // Importing refresh and info icons

const ProcessEmails = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [startDate, setStartDate] = useState(""); // State for start date
  const [endDate, setEndDate] = useState(""); // State for end date
  const [processedMails, setProcessedMails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showInputs, setShowInputs] = useState(true); // Manage input visibility
  const [showTooltip, setShowTooltip] = useState(false); // Manage password tooltip visibility
  const [showDateTooltip, setShowDateTooltip] = useState(false); // Manage date tooltip visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowInputs(false); // Hide inputs after submission

    // Simulate email processing (replace this with actual logic)
    setTimeout(() => {
      setProcessedMails([
        {
          id: 1,
          subject: "Meeting Reminder",
          summary: "Don't forget our meeting tomorrow at 10 AM.",
        },
        {
          id: 2,
          subject: "Newsletter Update",
          summary: "Check out the latest updates in our newsletter.",
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  const handleRefresh = () => {
    setShowInputs(true);
    setEmail("");
    setPassword("");
    setStartDate("");
    setEndDate("");
    setProcessedMails([]);
  };

  const downloadEmails = () => {
    // Logic for downloading emails as PDF (dummy function)
    alert("Downloading emails as PDF...");
  };

  return (
    <div className="flex h-screen w-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center p-10">
        <div className="flex px-40">
          {showInputs && (
            <>
              <div className="flex flex-1 items-center">
                <h1 className="text-wrap font-lexend text-6xl font-black text-secondary md:text-7xl lg:text-8xl">
                  <span
                    style={{ lineHeight: "0.7" }}
                    className="block text-9xl font-black"
                  >
                    Get <span className="text-7xl"></span>
                  </span>
                  <span className="block text-7xl">
                    a{" "}
                    <span className="font-lexend font-black text-primary">
                      quick summary
                    </span>
                  </span>
                  <span className="block text-6xl"> of your emails</span>
                  <span className="block text-5xl font-black">
                    with just one click!
                  </span>
                </h1>
              </div>
              <div className="relative w-full max-w-xl px-16">
                <form
                  className="flex h-96 flex-col justify-center rounded-lg bg-white p-8 shadow-lg"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="text-md mb-2 block font-monsterrat font-semibold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="tooltip relative mb-6">
                    <label
                      className="text-md mb-2 flex items-center font-monsterrat font-semibold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                      <FaInfoCircle
                        className="ml-2 inline-block cursor-pointer text-gray-600"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                      />
                    </label>
                    {showTooltip && (
                      <div className="tooltip-text">
                        Ensure your email account does not have two-step
                        verification. If it does, create an app password for
                        Gmail and use that here.
                      </div>
                    )}
                    <input
                      type="password"
                      id="password"
                      className="w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Date Range Inputs */}
                  <div className="mb-4 flex justify-between">
                    <div className="tooltip relative w-1/2 pr-2">
                      <label
                        className="text-md mb-2 block font-monsterrat font-semibold text-gray-700"
                        htmlFor="startDate"
                      >
                        Start Date
                        <FaInfoCircle
                          className="ml-2 inline-block cursor-pointer text-gray-600"
                          onMouseEnter={() => setShowDateTooltip(true)}
                          onMouseLeave={() => setShowDateTooltip(false)}
                        />
                        {showDateTooltip && (
                          <div className="tooltip-text absolute !left-48 !w-96">
                            Select a date range from which you want to summarize
                            the emails.
                          </div>
                        )}
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        className="w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative w-1/2 pl-2">
                      <label
                        className="text-md mb-2 block font-monsterrat font-semibold text-gray-700"
                        htmlFor="endDate"
                      >
                        End Date
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        className="w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded bg-primary px-4 py-2 font-bold text-white transition duration-300 hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary"
                  >
                    Get Summary
                  </button>
                </form>
              </div>
            </>
          )}
        </div>

        {loading && (
          <div className="mt-5 text-lg text-gray-700">
            Loading processed emails...
          </div>
        )}

        {!loading && processedMails.length > 0 && (
          <>
            <div className="mt-8 w-full max-w-xl">
              <div className="flex justify-between">
                <h2 className="mb-4 text-2xl font-semibold text-secondary">
                  Processed Emails
                </h2>
                <FaSync
                  className="h-6 w-6 cursor-pointer text-secondary transition duration-300 hover:text-primary"
                  onClick={handleRefresh}
                />
              </div>
              <ul className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg">
                {processedMails.map((mail) => (
                  <li
                    key={mail.id}
                    className="cursor-pointer p-4 hover:bg-gray-100"
                  >
                    <h3 className="font-semibold text-gray-800">
                      {mail.subject}
                    </h3>
                    <p className="text-gray-600">{mail.summary}</p>
                  </li>
                ))}
              </ul>
              <button
                className="mt-5 rounded bg-primary px-4 py-2 font-bold text-white transition duration-300 hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary"
                onClick={downloadEmails}
              >
                Download Emails as PDF
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProcessEmails;
