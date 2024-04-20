import { IoIosReturnLeft } from "react-icons/io";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Fragment } from "react";
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
          <Fragment>
            <div className="btn-vs-actividades">
              <BotonReturn
                link={"/instructor-investigador/Listar_Actividad_Instructor_Investigador"}
                icon={<IoIosReturnLeft />}
              />
            </div>
            <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} />
            <BotonBlanco icon={<LuCalendarDays />} text={"Ir al Cronograma"} />
            <Search icon={<FaSearch />} text={"Buscar Actividades"} />
            <BotonVerdeAñadir icon={<AiOutlinePlus />} text={"Añadir Actividad"} />
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
