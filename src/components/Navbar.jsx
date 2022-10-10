import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './navbar.css';

export const Navbar = () => {
  return (
    <nav id='navbar'>
        <h2>
            <Link to='/'>
                <BiCameraMovie />GuedMovie
            </Link>
        </h2>
        <form>
            <input type='text' placeholder='Procurar Filme'/>
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}
