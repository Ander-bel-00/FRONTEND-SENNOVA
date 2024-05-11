import React from "react";
import { FaUser } from "react-icons/fa";

import { IoLogOut } from "react-icons/io5";

import "./css/Header.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import logoSistema from './img/logo-app.svg'
function Header({ handleLogout }) {
  const { userProfile } = useAuth();
  // Verificar si userProfile es null antes de acceder a sus propiedades
  const userName = userProfile ? userProfile.name : "";
  const userLastNames = userProfile ? userProfile.last_names : "";

  const Rol = userProfile ? userProfile.rol : '';

  return (
    <header className="Header-general">
      {/* <div className='Header-general__Search-box'>
            <FaSearch className='inline-block Header-general__Search-box_icon'/><input type='search' placeholder='Buscar'/>
        </div> */}
      <img className="Header-general__logo-app" src={logoSistema} />

      <div className="Header-general__opciones">
        <Link to={`/${Rol}/perfil`} className="Header-general__user_name">
          <p className="Header-general_options">


            <FaUser className="inline-block Header-general__user_name__icon" />

            <p className="inline-block user-name">{userName.toUpperCase()} {userLastNames.toUpperCase()}{" "}</p>
          </p>
        </Link>
        <Link className="Header-general__logout-link">
          <button onClick={handleLogout}>

            <p className="inline-block Header-general__logout-link__text">Salir</p>
            <IoLogOut className="inline-block Header-general__logout-link__icon" />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
