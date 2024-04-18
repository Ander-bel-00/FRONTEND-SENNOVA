import React, { Fragment } from "react";
import "./css/Sidenav.css";
import LogoTeinnovaHome from "./img/Teinnova-logo-blanco.png";
import { FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { FaSeedling } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaChartGantt } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";


function Sidenav() {
  return (
    <Fragment>
      <div className="Sidenav-content">
        <ul className="list-group Sidenav-content__menu-content">

          <li>
            <div className="Sidenav-content__menu-content__Logo-Teinnova">
              <img src={LogoTeinnovaHome} alt="Logo Teinnova" />
            </div>
          </li>
          <Link to={"/lider-semillero/semillero"}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaSeedling className="inline-block mr-2" />
              Semillero
            </li>
          </Link>

          <Link to={'/lider-semillero/Listar_Proyectos'}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaProjectDiagram className="inline-block mr-2 " />
              Proyectos
            </li>
          </Link>
          <Link to={"/lider-semillero/Listar_Actividad"}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaCalendarCheck className="inline-block mr-2" /> Actividades
            </li>
          </Link>
          <Link to={"/lider-semillero/Listar-eventos"}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaRegClock className="inline-block mr-2" />
              Eventos
            </li>
          </Link>
          <Link to={"/lider-semillero/cronograma"}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaChartGantt className="inline-block mr-2" />
              Cronograma
            </li>
          </Link>

          <Link to={"/lider-semillero/Visualizar-programa-formacion"}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaList className="inline-block mr-2" />
              Programa
            </li>
          </Link>


          <Link to={"/lider-semillero/usuarios-getAll"}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaUsers className="inline-block" /> Integrantes
            </li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
}

export default Sidenav;
