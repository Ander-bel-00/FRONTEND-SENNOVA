import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { FaFileArrowUp } from "react-icons/fa6";
import { Fragment } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Caja_Blanca from "../../common/Caja_Blanca";
import Header_ToolBar from "../../common/Header_ToolBar";
import BotonBlanco from "../../common/BotonReporte";
import BotonVerdeAñadir from "../../common/BotonVerde";
import Search from "../../common/Search";
import BotonReturn from "../../common/BotonReturn";
import "./css/Visualizar_Actividad.css";

function Visualizar_Actividad() {
  const Contenido = [
    {
      nombre: "Carlos",
      tarea: "programación",
      fecha: "17 marzo 2024",
      resultado: "El mejor",
      producto: "carro",
      responsable: "Anderson",
    },
    {
      nombre: "Carlos",
      tarea: "programación",
      fecha: "17 marzo 2024",
      resultado: "El mejor",
      producto: "carro",
      responsable: "Anderson",
    },
  ];

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment >
            <div className="btn-return">
              <BotonReturn icon={<GiReturnArrow />} />
            </div>
            
            <BotonBlanco
              icon={<FaFileArrowUp />}
              text={"Reporte"}
              clase={"btn-blanco btn-blanco--modify btn-verde"}
            />
            <BotonBlanco
              icon={<CiCalendar />}
              text={"calendario"}
              clase={"btn-blanco btn-blanco--modify btn-azul"}
            />
            <Search icon={<FaSearch />} text={"Buscar Actividades"} />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Añadir Actividad"}
              link={"/lider-semillero/crear-actividad"}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-actividad-table">
            <thead>
              <tr className="vis-actividad-table__tr">
                <th className="vis-actividad-table__th">Nombre Actividad</th>
                <th className="vis-actividad-table__th">Tarea</th>
                <th className="vis-actividad-table__th">Fecha</th>
                <th className="vis-actividad-table__th">Resultado</th>
                <th className="vis-actividad-table__th">Producto</th>
                <th className="vis-actividad-table__th">
                  Responsable de la Actividad
                </th>
                <th className="vis-actividad-table__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Contenido.map((Contenidos, index) => (
                <tr className="vis-actividad-table__tr" key={index}>
                  <td className="vis-actividad-table__td">
                    {" "}
                    {Contenidos.nombre}
                  </td>
                  <td className="vis-actividad-table__td">
                    {" "}
                    {Contenidos.tarea}{" "}
                  </td>
                  <td className="vis-actividad-table__td">
                    {" "}
                    {Contenidos.fecha}{" "}
                  </td>
                  <td className="vis-actividad-table__td">
                    {" "}
                    {Contenidos.resultado}{" "}
                  </td>
                  <td className="vis-actividad-table__td">
                    {" "}
                    {Contenidos.producto}{" "}
                  </td>
                  <td className="vis-actividad-table__td">
                    {" "}
                    {Contenidos.responsable}{" "}
                  </td>
                  <td className="vis-actividad-table__td">
                    <div className="vis-actividad-table__td__btns">
                      <Link to={"../actualizar-actividad"}>
                        <FaRegEdit className="vis-actividad-table__td__btn" />
                      </Link>
                      <Link>
                        <IoTrashOutline className="vis-actividad-table__td__btn" />
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
  );
}
export default Visualizar_Actividad;
