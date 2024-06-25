import { IoAdd, IoTrashOutline } from "react-icons/io5";
import { IoIosReturnLeft } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Caja_Blanca from "../../../common/Caja_Blanca";
import Header_ToolBar from "../../../common/Header_ToolBar";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Search from "../../../common/Search";
import { FaFileArrowUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import BotonReturn from "../../../common/BotonReturn";
import "./css/Visualizar_Actividad_Admin.css";
import * as XLSX from "xlsx";
import clienteAxios from "../../../../config/axios";
import Swal from "sweetalert2";

function Visualizar_Actividad_Admin() {
  const { id } =  useParams();
  const [actividad, setActividad] = useState({});
  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    const getActividad = async () => {
      try {
        const response = await clienteAxios.get(`/activity-project/${id}/`);
        setActividad(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error al obtener la actividad del proyecto", error)
      }
    }

    const getContenido = async () => {
      try {
        const response = await clienteAxios.get(`/activity-semillero/${id}/`);
        setContenido(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error al obtener las actividades del semillero", error);
      }
    }
    getActividad();
    getContenido()
  }, [id]);
 
  // se agrego la parte del generar reporte en un archivo excel
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Nombre Actividad",
        "Tarea",
        "Fecha",
        "Resultado",
        "Producto",
        "Responsable de la Actividad",
      ],
      ...Contenido.map((Contenidos) => [
        Contenidos.nombre,
        Contenidos.tarea,
        Contenidos.fecha,
        Contenidos.resultado,
        Contenidos.producto,
        Contenidos.responsable,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Agrega estilos de tabla a la hoja de cálculo
    ws["!cols"] = [
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Contenido-Actividad");
    XLSX.writeFile(wb, "contenido-actividad.xlsx");
  };

  const suspenderActividad = async (actividadId) => {
    try {
      const result = await Swal.fire({
        title: "Estás seguro de suspender la Actividad?",
        text: "Esta acción no se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, suspender la Actividad",
      });

      if (result.isConfirmed) {
        await clienteAxios.delete(`/activity-semillero/${actividadId}/`);
        Swal.fire({
          title: "Actividad suspendido",
          text: "La Actividad ha sido suspendido exitosamente.",
          icon: "success",
        });
        setListActivitys((prev) => prev.filter((actividad) => actividad.id !== actividadId));
      }
    } catch (error) {
      console.log("Hubo un error al intentar suspender la actividad", error);
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Ocurrió un error al intentar suspender la actividad",
      });
    }
  }; 
 
  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <div className="btn-vs-actividades-admin">
              <BotonReturn
                link={"/admin/listar-actividad"}
                icon={<IoIosReturnLeft />}
              />
            </div>
            <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} onClick={exportToExcel}/>
            <BotonBlanco 
              icon={<LuCalendarDays />} 
              text={"Ir al Cronograma"} 
              link={"../cronograma"}
              clase={'btn-blanco btn-blanco--modify btn-azul'}
            />
            <Search icon={<FaSearch />} text={"Buscar Actividades"} />
            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Añadir Actividad"}
              link={"/admin/crear-actividad"}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="vis-actividad-table-admin">
            <thead>
              <tr className="vis-actividad-table__tr-admin">
                <th className="vis-actividad-table__th-admin">Nombre Actividad</th>
                <th className="vis-actividad-table__th-admin">Tarea</th>
                <th className="vis-actividad-table__th-admin">Fecha</th>
                <th className="vis-actividad-table__th-admin">Resultado</th>
                <th className="vis-actividad-table__th-admin">Producto</th>
                <th className="vis-actividad-table__th-admin">
                  Responsable de la Actividad
                </th>
                <th className="vis-actividad-table__th-admin">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {contenido.map((Contenidos) => (
                <tr className="vis-actividad-table__tr-admin" key={Contenidos.id}>
                  <td className="vis-actividad-table__td-admin">
                    {Contenidos.nombre}
                  </td>
                  <td className="vis-actividad-table__td-admin">
                    {Contenidos.tarea}
                  </td>
                  <td className="vis-actividad-table__td-admin">
                    {Contenidos.fecha}
                  </td>
                  <td className="vis-actividad-table__td-admin">
                    {Contenidos.resultado}
                  </td>
                  <td className="vis-actividad-table__td-admin">
                    {Contenidos.producto}
                  </td>
                  <td className="vis-actividad-table__td-admin">
                    {Contenidos.responsable}
                  </td>
                  <td className="vis-actividad-table__td-admin">
                    <div className="vis-actividad-table__td__btns-admin">
                      <Link to={"/admin/actualizar-actividad/:id"}>
                        <FaRegEdit className="vis-actividad-table__td__btn-admin" />
                      </Link>
                      <Link>
                        <IoTrashOutline 
                          className="vis-actividad-table__td__btn-admin" 
                          onClick={() => suspenderActividad(actividad.id)}
                        />
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
export default Visualizar_Actividad_Admin;
