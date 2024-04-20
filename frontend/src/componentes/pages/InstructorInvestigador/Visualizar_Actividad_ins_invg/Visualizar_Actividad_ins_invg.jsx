import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { IoIosReturnLeft } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { Fragment } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Search from "../../../common/Search";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Actividad_ins_invg.css";


function Visualizar_Actividad_ins_invg() {
  const Contenido = [
    {
      nombre: "Arias",
      tarea: "Programar",
      fecha: "17 marzo 2024",
      resultado: "El mejor",
      producto: "carro",
      responsable: "Anderson",
    },
    {
      nombre: "Arias",
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
          <Fragment>
            <div className="btn-vs-actividades-instructor">
              <BotonReturn
                link={"/instructor-investigador/Listar_Actividad"}
                icon={<IoIosReturnLeft />}
              />
            </div>
            <BotonBlanco icon={<BiSolidReport />} text={"Reporte"} />
            <BotonBlanco icon={<CiCalendar />} text={"calendario"} />
            <Search icon={<FaSearch />} text={"Buscar Actividades"} />
            <BotonVerdeAñadir icon={<IoAdd />} text={"Añadir Actividad"} />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-actividad-table-instructor">
            <thead>
              <tr className="vis-actividad-table-instructor__tr">
                <th className="vis-actividad-table-instructor__th">Nombre Actividad</th>
                <th className="vis-actividad-table-instructor__th">Tarea</th>
                <th className="vis-actividad-table-instructor__th">Fecha</th>
                <th className="vis-actividad-table-instructor__th">Resultado</th>
                <th className="vis-actividad-table-instructor__th">Producto</th>
                <th className="vis-actividad-table-instructor__th">Responsable de la Actividad</th>
              </tr>
            </thead>
            <tbody>
              {Contenido.map((Contenidos, index) => (
                <tr className="vis-actividad-table-instructor__tr" key={index}>
                  <td className="vis-actividad-table-instructor__td">
                    {" "}
                    {Contenidos.nombre}
                  </td>
                  <td className="vis-actividad-table-instructor__td">
                    {" "}
                    {Contenidos.tarea}{" "}
                  </td>
                  <td className="vis-actividad-table-instructor__td">
                    {" "}
                    {Contenidos.fecha}{" "}
                  </td>
                  <td className="vis-actividad-table-instructor__td">
                    {" "}
                    {Contenidos.resultado}{" "}
                  </td>
                  <td className="vis-actividad-table-instructor__td">
                    {" "}
                    {Contenidos.producto}{" "}
                  </td>
                  <td className="vis-actividad-table-instructor__td">
                    {" "}
                    {Contenidos.responsable}{" "}
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
export default Visualizar_Actividad_ins_invg;
