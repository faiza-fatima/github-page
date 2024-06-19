import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
          className="w-12 h-12 rounded-full"
          alt="GitHub Logo"
        />
        <h1 className="text-2xl ml-3 text-white">GitHub Search Engine</h1>
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              exact
              to="/"
              className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-blue-300 to-pink-300 hover:from-pink-300 hover:to-sky-blue-300 active:from-sky-blue-500 active:to-pink-500 transition duration-300"
              activeClassName="bg-pink-500"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-blue-300 to-pink-300 hover:from-pink-300 hover:to-sky-blue-300 active:from-sky-blue-500 active:to-pink-500 transition duration-300"
              activeClassName="bg-pink-500"
            >
              Github
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/linkedin"
              className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-blue-300 to-pink-300 hover:from-pink-300 hover:to-sky-blue-300 active:from-sky-blue-500 active:to-pink-500 transition duration-300"
              activeClassName="bg-pink-500"
            >
              Linkedin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mail"
              className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-blue-300 to-pink-300 hover:from-pink-300 hover:to-sky-blue-300 active:from-sky-blue-500 active:to-pink-500 transition duration-300"
              activeClassName="bg-pink-500"
            >
              Mail
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-sky-blue-300 to-pink-300 hover:from-pink-300 hover:to-sky-blue-300 active:from-sky-blue-500 active:to-pink-500 transition duration-300"
              activeClassName="bg-pink-500"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
