import React from 'react';
import { PiUserCircleDuotone } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import './css/Header.css';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className='Header-general'>
        <div className='Header-general__Search-box'>
            <FaSearch className='inline-block Header-general__Search-box_icon'/><input type='search' placeholder='Buscar'/>
        </div>
        <div className='Header-general__user_name'>
        <p>Jorge Luis Raigosa <PiUserCircleDuotone className='inline-block Header-general__user_name__icon'/></p>
        </div>
        
        <Link className='Header-general__logout-link'>
            <button>
                <MdLogout className='inline-block Header-general__logout-link__icon'/> Cerrar Sesión
            </button>
        </Link>
    </header>
  )
}

export default Header;