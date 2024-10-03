import React from "react";

function BurgerMenu() {
    return (
        <nav className="absolute top-14 left-0 w-full bg-gray-800 p-5 md:static md:bg-transparent md:flex md:items-center md:justify-between hidden">
        <ul className="space-y-5 md:space-y-0 md:flex md:space-x-10 text-white">
          <li>
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    );
}

export default BurgerMenu;