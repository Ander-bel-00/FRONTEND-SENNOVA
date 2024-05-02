import React from "react";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

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
      
      <div className="Header-general__opciones">
        <div className="Header-general__user_name">
          <p className="Header-general_options">
            <p className="inline-block user-name">{userName} {userLastNames}{" "}</p>
            <Link to={`/${Rol}/perfil`}>
              <FaUser className="inline-block Header-general__user_name__icon" />
            </Link>
          </p>
        </div>

        <Link className="Header-general__logout-link">
          <button onClick={handleLogout}>
            
            <p className="inline-block Header-general__logout-link__text">Cerrar Sesión</p>
            {/* <MdLogout className="inline-block Header-general__logout-link__icon" /> */}
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
