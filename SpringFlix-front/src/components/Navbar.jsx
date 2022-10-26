import React from 'react';
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav>

      {/* convert for link */}
      <a href="/">
        <BiCameraMovie size={40} />
        Movies
      </a>

      <form action="">

        <input type="text" name="search" id="search" />
        
        <button type="submit">
          <BiSearchAlt />
        </button>

      </form>

    </nav>
  );
};

export default Navbar;