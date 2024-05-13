import { LuCalendarDays } from "react-icons/lu";
import { FaFileArrowUp } from "react-icons/fa6";
import { Fragment, useEffect, useState } from "react";
import { LiaEye } from "react-icons/lia";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import "./css/ListarEvento_ins_invg.css";
import clienteAxios from "../../../../config/axios";

function ListarEvento_ins_invg() {
  const [ListEventos, setListEventos] = useState([]);

  useEffect(() => { // useEffect, es un hook de react función que permite realizar un efecto una vez 
    //el componente se haya renderizado o cargado en el navegador. Es decir realizar lo que tiene adentro
    const ObtenerEventoSemillero = async () => {
      try { //Intento 
        const response = await clienteAxios.get('/eventos/')
        setListEventos(response.data); // res(respuesta) y se guarda o actualiza en la bases de datos
      } catch (error) { //Fallo
        console.error("Error al obtener los eventos del semillero: ", error);
      }
    }
    ObtenerEventoSemillero(); // función que indica iniciar todo, es decir obtener las actividades
  }, []); // el efecto nunca va a depender de nada cuando este [] (depende de algo cuando se encuentere el id)

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <BotonBlanco
              icon={<FaFileArrowUp />}
              text={"Reporte"}
              clase={"btn-blanco btn-blanco--modify btn-verde"}
            />
            <BotonBlanco
              icon={<LuCalendarDays />}
              text={"Ir a Cronograma"}
              clase={"btn-blanco btn-blanco--modify btn-azul"}
            />
            <Search text={"Buscar Eventos"} />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Añadir Información"}
              link={"/instructor_investigador/Crear-eventos"}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-events-table-instructor">
            <thead>
              <tr className="list-events-table-instructor__tr">
                <th className="list-events-table-instructor__th">Nombre</th>
                <th className="list-events-table-instructor__th">Tipo de Evento</th>
                <th className="list-events-table-instructor__th">Fecha Inicio</th>
                <th className="list-events-table-instructor__th">Fecha Fin</th>
                <th className="list-events-table-instructor__th">Cantidad Participantes</th>
                <th className="list-events-table-instructor__th">Ponente</th>
                <th className="list-events-table-instructor__th">Lugar</th>
                <th className="list-events-table-instructor__th">Semillero</th>
                <th className="list-events-table-instructor__th">Evidencia del Evento</th>
                <th className="list-events-table-instructor__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ListEventos.map((evento) => (
                <tr className="list-events-table-instructor__tr" key={evento.id}>
                  <td className="list-events-table-instructor__td">
                    {evento.nombre_evento}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.tipo_de_evento}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.fecha_inicio}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.fecha_fin}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.cantidad_parcticipantes}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.nombre_ponente}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.lugar_evento}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.semillero}
                  </td>
                  <td className="list-events-table-instructor__td">
                    {evento.evidencia}
                  </td>
                  <td className="list-events-table-instructor__td">
                    <div className="list-events-table-instructor__td__btns">
                      <Link to={"/instructor_investigador/Visualizar-evento"}>
                        <LiaEye className="list-events-table-instructor__td__btn" />
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

export default ListarEvento_ins_invg;
