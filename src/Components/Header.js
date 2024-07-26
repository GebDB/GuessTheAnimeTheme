import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="py-2 bg-black flex justify-between items-center">
      <ul className="flex">
        <li className="ml-4">
          <Link to="/" className="inline-block text-gray-300 font-extrabold font-mono           
          transition-all duration-300 ease-in
          2xl:text-2xl
          xl:text-2xl
          lg:text-2xl
          md:text-2xl
          sm:text-lg
          xs:text-md">
            Guess the Anime Theme
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="mr-4">
          <Link to="/about" className="inline-block text-gray-300 font-extrabold font-mono           
          transition-all duration-300 ease-in
          2xl:text-2xl
          xl:text-2xl
          lg:text-2xl
          md:text-2xl
          sm:text-lg
          xs:text-md">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;