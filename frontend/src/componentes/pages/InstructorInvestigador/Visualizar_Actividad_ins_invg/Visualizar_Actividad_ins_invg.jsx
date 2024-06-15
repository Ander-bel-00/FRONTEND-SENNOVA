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
import "./css/Visualizar_Actividad_ins_invg.css";
import BotonReturn from "../../../common/BotonReturn";
import { GiReturnArrow } from "react-icons/gi";

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
              <BotonReturn icon={<GiReturnArrow />} />
            </div>

            <BotonBlanco 
              icon={<FaFileArrowUp />} 
              text={"Reporte"} 
              clase={'btn-blanco btn-blanco--modify btn-verde'} />

            <BotonBlanco 
              icon={<LuCalendarDays />} 
              text={"Ir al Cronograma"} 
              clase={'btn-blanco btn-blanco--modify btn-azul'} />

            <Search 
              icon={<FaSearch />} 
              text={"Buscar Actividades"} />

            <BotonVerdeAñadir 
              icon={<AiOutlinePlus />} 
              text={"Añadir Actividad"}
              link={'/instructor_investigador/crear-actividad'} 
            />
            
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
                <th className="vis-actividad-table-instructor__th">
                  Responsable de la Actividad
                </th>
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
