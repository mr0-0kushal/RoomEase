import React, { useState } from 'react';
import { FaBars, FaDirections, FaTimes } from 'react-icons/fa'; // Icons for menu toggle
import { Link } from 'react-router-dom';

const NavbarMini = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent w-full text-white">
      <div className="container flex gap-6 justify-end w-full items-center">
        <div className="text-2xl font-bold">Hive-Mind</div>
        {/* Hamburger Menu (Visible on Mobile) */}
        <button
          className="block md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex-row md:items-center md:space-x-6 absolute md:static md:bg-[#8086ee65] decoration-none md:rounded-2xl top-[5.2rem] left-[1.24rem] xs:top-[7rem] xs:left-[2.6rem] w-[87%] md:w-[90%] text-center md:text-left opt`}
        >
          <Link
            to="/"
            className="block py-2 px-4 md:hover:bg-transparent opts "
          >
            Home
          </Link>
          <Link
            to="/login"
            className="block py-2 px-4 md:hover:bg-transparent opts"
          >
            Login
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 md:hover:bg-transparent opts"
          >
            About
          </Link>
          <Link
            to="/a"
            className="block py-2 px-4 md:hover:bg-transparent opts"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMini;
