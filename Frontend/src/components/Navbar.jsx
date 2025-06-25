import React, { useState } from "react";
import { FaUserCircle, FaCog } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Manage login state

  const toggleDropdown = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    // Handle logout logic here
    alert("Logged out");
    setIsUserLoggedIn(false);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    // Handle login logic here
    alert("Logging in");
    setIsUserLoggedIn(true);
    setIsMenuOpen(false);
  };

  return (
    <div className="h-20 w-screen bg-white shadow">
      <div className="mx-10 flex h-full items-center justify-between">
        <div className="flex items-center">
          <img className="h-10 w-10" src="/logo.svg" alt="Logo" />
          <span className="text-2xl font-bold text-primary">Easy</span>
          <span className="text-2xl font-bold text-secondary">Mail</span>
        </div>

        <div className="hidden space-x-8 md:flex">
          <a
            href="/"
            className="text-lg font-semibold text-gray-700 hover:text-primary"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg font-semibold text-gray-700 hover:text-primary"
          >
            About
          </a>
          <a
            href="#features"
            className="text-lg font-semibold text-gray-700 hover:text-primary"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold text-gray-700 hover:text-primary"
          >
            Contact
          </a>
        </div>

        <div className="relative hidden items-center md:flex">
          <FaUserCircle
            className="h-7 w-7 cursor-pointer text-gray-700"
            onClick={toggleDropdown}
          />
          {isMenuOpen && (
            <div className="absolute right-0 mt-1 w-48 rounded border border-gray-300 bg-white shadow-md">
              {isUserLoggedIn ? (
                <>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={() => alert("View Profile")}
                  >
                    Profile
                  </div>
                  <div
                    className="cursor-pointer p-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </>
              ) : (
                <div
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={handleLogin}
                >
                  Log In
                </div>
              )}
            </div>
          )}
          <FaCog
            className="ml-4 h-7 w-7 cursor-pointer text-gray-700"
            onClick={() => alert("Settings")}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white shadow-md md:hidden">
          <div className="mx-10 flex flex-col space-y-2 py-4">
            <a
              href="#home"
              className="text-lg font-semibold text-gray-700 hover:text-primary"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-semibold text-gray-700 hover:text-primary"
            >
              About
            </a>
            <a
              href="#features"
              className="text-lg font-semibold text-gray-700 hover:text-primary"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-lg font-semibold text-gray-700 hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
