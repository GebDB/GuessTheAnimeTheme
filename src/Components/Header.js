import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="py-2 bg-black flex justify-between items-center">
      <ul className="flex">
        <li className="ml-4">
          <Link to="/" className=
                "inline-block text-gray-300 text-2xl font-extrabold font-mono">
            Guess the Anime Theme
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="mr-4">
          <Link to="/about" className=
                "inline-block text-gray-300 font-bold font-mono text-lg">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;