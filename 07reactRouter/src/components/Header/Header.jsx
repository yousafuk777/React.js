import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow sticky top-0 z-50 bg-white m-12">
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/img/logo2.png" className="h-10 mr-3" alt="Logo" />
          <span className="text-lg font-semibold text-gray-800"></span>
        </Link>

        {/* Menu Links */}
        <ul className="hidden lg:flex space-x-6 font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "hover:text-orange-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "hover:text-orange-600"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "hover:text-orange-600"
              }
            >
              Contact
            </NavLink>
          </li>
                    <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : "hover:text-orange-600"
              }
            >
              Github
            </NavLink>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md text-gray-800 hover:bg-gray-100 font-medium text-sm"
          >
            Log in
          </Link>
          <Link
            to="/get-started"
            className="px-5 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 font-medium text-sm"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
