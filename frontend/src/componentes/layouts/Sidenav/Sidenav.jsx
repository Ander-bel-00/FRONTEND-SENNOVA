import React, { Fragment } from 'react';
import './css/Sidenav.css';
import LogoTeinnovaHome from './img/Teinnova-logo-menu.png';
import { FaCalendarCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiNotebook } from "react-icons/gi";
import { ImUsers } from "react-icons/im";

function Sidenav() {
  return (
    <Fragment>
        <div className='Sidenav-content'>
            <ul className='list-group Sidenav-content__menu-content'>
                <li>
                    <div className='Sidenav-content__menu-content__Logo-Teinnova'>
                        <img src={LogoTeinnovaHome} alt='Logo Teinnova'/>
                    </div>
                </li>
                <li className="Sidenav-content__menu-content__menu-options">
                        <Link to={"/actividades"}><FaCalendarCheck className='inline-block mr-2'/> 
                        Actividades</Link>
                    </li>
                    <li className="Sidenav-content__menu-content__menu-options">
                        <GiNotebook className='inline-block'/> Cronograma
                    </li>
                    <li className="Sidenav-content__menu-content__menu-options">
                        Eventos
                    </li>
                    <li className="Sidenav-content__menu-content__menu-options">
                        Programa
                    </li>
                    <li className="Sidenav-content__menu-content__menu-options">
                        Proyectos
                    </li>
                    <li className="Sidenav-content__menu-content__menu-options">
                        Semillero
                    </li>
                    <li className="Sidenav-content__menu-content__menu-options">
                        <ImUsers className='inline-block'/> Usuarios
                    </li>
            </ul>
        </div>
    </Fragment>
  )
}

export default Sidenav;