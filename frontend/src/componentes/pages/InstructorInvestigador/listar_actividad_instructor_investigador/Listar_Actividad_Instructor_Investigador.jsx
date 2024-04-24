import React, { Fragment } from 'react';
import "./css/Listar_Actividad_Instructor_Investigador.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import Header_ToolBar from '../../../common/Header_ToolBar';
import BotonBlanco from '../../../common/BotonReporte';
import Search from '../../../common/Search';
import BotonVerdeAñadir from '../../../common/BotonVerde';
import Caja_Blanca from '../../../common/Caja_Blanca';
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

function Listar_Actividad_Instructor_Investigador() {
  const invgActividades = [
    {
      nombre: 'Desarrollo',
      tarea: 'Codificar',
      fecha: '25 de Julio de 2024',
      resultado: 'Sistema funcional',
      producto: 'Proyecto web',
      responsable: 'Arnold'
    },
    {
      nombre: 'Desarrollo',
      tarea: 'Codificar',
      fecha: '25 de Julio de 2024',
      resultado: 'Sistema funcional',
      producto: 'Proyecto web',
      responsable: 'Arnold'
    },
  ];
  return (
    <Fragment>
       <div className="main-container__contenedor-hijo">
         <Header_ToolBar
           Header_Tools={
              <Fragment>
                 <BotonBlanco icon={<FaFileArrowUp />}  text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} />

                 <BotonBlanco
                   icon={<LuCalendarDays />}
                   text={"Ir al Cronograma"}
                   link={"/instructor-investigador/cronograma"}
                   clase={'btn-blanco btn-blanco--modify btn-azul'}
                 />

                 <Search text={"Buscar Actividades"} />

                 <BotonVerdeAñadir 
                   icon={<AiOutlinePlus />}
                   text={"Añadir Información"}
                   link={"/instructor-investigador/crear-actividad"}
                 />
              </Fragment>
           }
         />
         <Caja_Blanca
           content={
              <table  className="list-activity-instructor-content-table">
                <thead>
                  <tr className="list-activity-instructor-content-table-tr">
                    <th className="list-activity-instructor-content__table__tr__th">
                      Nombre Actividad
                    </th>
                    <th className="list-activity-instructor-content__table__tr__th">
                      Tarea
                    </th>
                    <th className="list-activity-instructor-content__table__tr__th">
                      Fecha
                    </th>
                    <th className="list-activity-instructor-content__table__tr__th">
                      Resultado
                    </th>
                    <th className="list-activity-instructor-content__table__tr__th">
                      Producto
                    </th>
                    <th className="list-activity-instructor-content__table__tr__th">
                      Responsable de la Actividad
                    </th>
                    <th className="list-activity-instructor-content__table__tr__th">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invgActividades.map ((invgActividad, index) => (
                    <tr key={index} className="list-activity-instructor-content-table-tr">
                      <td className="list-activity-instructor-content-table-td">
                        {invgActividad.nombre}
                      </td>
                      <td className="list-activity-instructor-content-table-td">
                        {invgActividad.tarea}
                      </td>
                      <td className="list-activity-instructor-content-table-td">
                        {invgActividad.fecha}
                      </td>
                      <td className="list-activity-instructor-content-table-td">
                        {invgActividad.resultado}
                      </td>
                      <td className="list-activity-instructor-content-table-td">
                        {invgActividad.producto}
                      </td>
                      <td className="list-activity-instructor-content-table-td">
                        {invgActividad.responsable}
                      </td>
                      <td className="list-activity-instructor-content-table__td">
                        <div className="list-activity-instructor-content-table__td__btns">
                        <Link 
                          to={"/instructor-investigador/Visualizar-actividad"}
                        >
                          <LiaEyeSolid className="list-activity-instructor-content-table__td__btn" />
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

export default Listar_Actividad_Instructor_Investigador;
