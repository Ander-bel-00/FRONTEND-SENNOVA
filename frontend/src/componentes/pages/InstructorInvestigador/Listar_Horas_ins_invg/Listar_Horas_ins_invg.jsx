import React, { Fragment } from "react";
import "./css/Listar_Horas_ins_invg.css";
import { FaAngleRight, FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Botonyear from "../../../common/Botonyear";
import Botontrimestres from "../../../common/Botontrimestres";

function Listar_Horas_ins_invg() {
  const invgHoras = [
    {
      item: "2",
      año: "2019",
      nombre_proyecto: "Capacidad Instalada",
    },
  ];
  const invgHoras2 = [
    {
      item: "5",
      año: "220",
      nombre_proyecto: "Capacidad Instalada tecnológica",
      
    },
  ];

  const instructores = [
    {
      instructores_asignados: "Jorge Raigosa",
      instructores_asignados: "Jorge Sanches",
      instructores_asignados: "Jorge Pulido",
    },
  ];

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco
                icon={<FaFileArrowUp />}
                text={"Reporte"}
                clase={"btn-blanco btn-blanco--modify btn-verde"}
              />

              <Search text={"Buscar Proyecto"} />

              <Botonyear
                icon={<LuCalendarDays />}
                text={"Año"}
                link={""}
              />

              <Botontrimestres
                icon={<FaAngleRight />}
                text={"Trimestre"}
                link={""}
                
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-horas-instructor-content-table">
              <thead>
                <tr className="list-horas-instructor-content-table-tr">
                  <th className="list-horas-instructor-content__table__tr__th">
                    Item
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Año
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Nombre del Proyecto
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Instructores Asignados
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {invgHoras.map((invgHora, index) => (
                  <tr
                    key={index}
                    className="list-horas-instructor-content-table-tr"
                  >
                    <td className="list-horas-instructor-content-table-td">
                      {invgHora.item}
                    </td>
                    <td className="list-horas-instructor-content-table-td">
                      {invgHora.año}
                    </td>
                    <td className="list-horas-instructor-content-table-td">
                      {invgHora.nombre_proyecto}
                    </td>
                    <td className="list-horas-instructor-content-table-td">
                      <ul>
                        jorge Rigoza
                      </ul>
                      <ul>
                        jorge Rigoza
                      </ul>
                      <ul>
                        jorge Rigoza
                      </ul>
                    </td>
                    <td className="list-horas-instructor-content-table__td">
                    <ul>
                        <div className="list-horas-instructor-content-table__td__btns">
                          <Link
                            to={"/instructor_investigador/Visualizar-horas"}
                          >
                            <LiaEyeSolid className="list-horas-instructor-content-table__td__btn" />
                          </Link>
                        </div>
                      </ul>
                    <ul>
                        <div className="list-horas-instructor-content-table__td__btns">
                          <Link
                            to={"/instructor_investigador/Visualizar-horas"}
                          >
                            <LiaEyeSolid className="list-horas-instructor-content-table__td__btn" />
                          </Link>
                        </div>
                      </ul>
                    <ul>
                        <div className="list-horas-instructor-content-table__td__btns">
                          <Link
                            to={"/instructor_investigador/Visualizar-horas"}
                          >
                            <LiaEyeSolid className="list-horas-instructor-content-table__td__btn" />
                          </Link>
                        </div>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
              <br />
              <thead>
                <tr className="list-horas-instructor-content-table-tr">
                  <th className="list-horas-instructor-content__table__tr__th">
                    Item
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Año
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Nombre del Proyecto
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Instructores Asignados
                  </th>
                  <th className="list-horas-instructor-content__table__tr__th">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {invgHoras2.map((invgHora, index) => (
                  <tr
                    key={index}
                    className="list-horas-instructor-content-table-tr"
                  >
                    <td className="list-horas-instructor-content-table-td">
                      {invgHora.item}
                    </td>
                    <td className="list-horas-instructor-content-table-td">
                      {invgHora.año}
                    </td>
                    <td className="list-horas-instructor-content-table-td">
                      {invgHora.nombre_proyecto}
                    </td>
                    <td className="list-horas-instructor-content-table-td">
                      <ul>
                        jorge Rigoza
                      </ul>
                      <ul>
                        jorge Rigoza
                      </ul>
                      <ul>
                        jorge Rigoza
                      </ul>
                    </td>
                    <td className="list-horas-instructor-content-table__td">
                    <ul>
                        <div className="list-horas-instructor-content-table__td__btns">
                          <Link
                            to={"/instructor_investigador/Visualizar-horas"}
                          >
                            <LiaEyeSolid className="list-horas-instructor-content-table__td__btn" />
                          </Link>
                        </div>
                      </ul>
                    <ul>
                        <div className="list-horas-instructor-content-table__td__btns">
                          <Link
                            to={"/instructor_investigador/Visualizar-horas"}
                          >
                            <LiaEyeSolid className="list-horas-instructor-content-table__td__btn" />
                          </Link>
                        </div>
                      </ul>
                    <ul>
                        <div className="list-horas-instructor-content-table__td__btns">
                          <Link
                            to={"/instructor_investigador/Visualizar-horas"}
                          >
                            <LiaEyeSolid className="list-horas-instructor-content-table__td__btn" />
                          </Link>
                        </div>
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        />
      </div>
    </Fragment>
  );
}

export default Listar_Horas_ins_invg;
