import React, { Fragment } from "react";
import "./css/Sidenav.css";
import LogoTeinnovaHome from "./img/Teinnova-logo-blanco.png";
import Logo_app from "./img/logo-app.svg";
import { FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { FaSeedling } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaChartGantt, FaRegHourglassHalf } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { Ri24HoursLine } from "react-icons/ri";


function Sidenav() {
  const { userProfile } = useAuth();
  // Verificar si userProfile es null antes de acceder a sus propiedades
  const Rol = userProfile ? userProfile.rol : "";
  return (
    <Fragment>
      <div className="Sidenav-content">
        <ul className="list-group Sidenav-content__menu-content">
          <li>
            <div className="Sidenav-content__menu-content__Logo-Teinnova">
              <img src={LogoTeinnovaHome} alt="Logo Teinnova" />
            </div>
          </li>
          <Link to={`/${Rol}/`}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaSeedling className="inline-block mr-2" />
              Semilleros
            </li>
          </Link>
          {Rol && Rol === "admin" ? (
            <Link to={`/${Rol}/horas-investigadores`}>
              <li className="Sidenav-content__menu-content__menu-options">
                <Ri24HoursLine className="inline-block mr-2" />
                Horas de Investiagción
              </li>
            </Link>
          ) : (
            <li className="" hidden></li>
          )}

          <Link to={`/${Rol}/listar-Proyectos`}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaProjectDiagram className="inline-block mr-2 " />
              Proyectos
            </li>
          </Link>
          <Link to={`/${Rol}/listar-actividad`}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaCalendarCheck className="inline-block mr-2" /> Actividades
            </li>
          </Link>
          <Link to={`/${Rol}/listar-eventos`}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaRegClock className="inline-block mr-2" />
              Eventos
            </li>
          </Link>
          <Link to={`/${Rol}/cronograma`}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaChartGantt className="inline-block mr-2" />
              Cronograma
            </li>
          </Link>

          <Link to={`/${Rol}/visualizar-programa-formacion`}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaList className="inline-block mr-2" />
              Programa
            </li>
          </Link>

          <Link to={`/${Rol}/usuarios-getAll`}>
            <li className="Sidenav-content__menu-content__menu-options">
              <FaUsers className="inline-block" /> Integrantes
            </li>
          </Link>

          <Link to={`/${Rol}/listar-horas`}>
            <li className="Sidenav-content__menu-content__menu-options">
            <FaRegHourglassHalf className="inline-block mr-2"/>Horas
            </li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
}

export default Sidenav;
