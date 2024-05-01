import React, { Fragment } from 'react';
import "./css/Listar_Proyectos_Admin.css";
import { AiOutlinePlus } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { FaFileArrowUp } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Search from "../../../common/Search";
import Caja_Blanca from '../../../common/Caja_Blanca';
import { Link } from 'react-router-dom';

function Listar_Proyectos_Admin() {
    const adminlists = [
        {
          nombre_proyecto: "Innovación",
          fecha_inicio: "12 de Abril de 2024",
          fecha_fin: "25 de Julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },    {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
        {
          nombre_proyecto: "Tecnología",
          fecha_inicio: "22 de Junio de 2024",
          fecha_fin: "09 de julio de 2024",
          descripcion: "Este proyecto se esta llevando",
        },
      ];


  return (
    <Fragment>
        <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} />
              <Search text={"Buscar proyecto"} />
              <BotonBlanco
                icon={<LuCalendarDays />}
                text={"Ir al Cronograma"}
                link={"/lider-semillero/cronograma"}
                clase={'btn-blanco btn-blanco--modify btn-azul'}
              />
              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear"}
                link={"/admin/crear-proyectos"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
         content={
            <table className="list-project-admin-table">
                <thead className="list-project-admin-table__thead">
                <tr className="list-project-admin-table__tr">
                  <th className="list-project-admin-table__th">
                    Nombre del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">
                    Fecha Inicio del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">
                    Fecha Fin del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">
                    Descripción del Proyecto
                  </th>
                  <th className="list-project-admin-table__th">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {adminlists.map((adminlist, index) => (
                  <tr key={index} className="list-project-table__tr">
                    <td className="list-project-table__td">
                      {adminlist.nombre_proyecto}
                    </td>
                    <td className="list-project-table__td">
                      {adminlist.fecha_inicio}
                    </td>
                    <td className="list-project-table__td">{adminlist.fecha_fin}</td>
                    <td className="list-project-table__td">
                      {adminlist.descripcion}
                    </td>
                    <td className="list-project-table__td">
                      <div className="list-project-table__td__btns">
                        <Link           // Link que permite ingresar por medio el icono LiaEyesolid teniendo un acceso a la url del archivo Visualizar_Suspender_Proyecto
                          to={"/admin/visualizar-suspender-proyecto"}  
                        >
                          <LiaEyeSolid className="list-project-table__td__btn" />
                        </Link>
                        <Link to={"/admin/actualizar-proyectos"}>
                          <FaRegEdit className="list-project-table__td__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="list-project-table__td__btn" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
                </tbody>
            </table>
         }
        />
       </div>
    </Fragment>
  )
}

export default Listar_Proyectos_Admin;
