import { FaFileArrowUp } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../common/Header_ToolBar";
import Caja_Blanca from "../../common/Caja_Blanca";
import BotonBlanco from "../../common/BotonReporte";
import BotonVerdeAñadir from "../../common/BotonVerde";
import "./css/Visualizar_Programa_Formacion.css";
import { Fragment, useEffect, useState } from "react";
import { BiSolidReport } from "react-icons/bi";
import clienteAxios from "../../../config/axios";
import Search from "../../common/Search";

function Visualizar_Programa_Formacion() {
  const [programaFormacion, setProgramaFormacion] = useState([]);
  const [filtrarPrograma, setFiltrarPrograma] = useState([])

  useEffect(() => {
    const obtenerProgramasDeFormacion = async () => {
      try {
        const res = await clienteAxios.get('/programaformacion/');
        const programaFormacion = res.data
        setProgramaFormacion(programaFormacion);
        setFiltrarPrograma(programaFormacion);
      } catch (error) {
        console.log('Error al obtener todos los programas de formación', error);
      }
    }

    obtenerProgramasDeFormacion();
  }, []);

  const handleFilter = (query) => {
    const filtered = programaFormacion.filter(
      (programa) =>
        programa.nombre_programa_formacion.toLowerCase().includes(query.toLowerCase()) ||
        programa.version_programa_formacion.toLowerCase().includes(query.toLowerCase())
    );
    setFiltrarPrograma(filtered);
  };

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>


            <BotonBlanco
              icon={<BiSolidReport />}
              text={"reporte"}
              clase={'btn-blanco btn-blanco--modify btn-verde'}
            />

            <Search
              text={"Buscar Programa"}
              onFilter={handleFilter}
              data={filtrarPrograma}
            />

            <BotonVerdeAñadir
              icon={<IoAdd />}
              text={"Crear Programa de Formación"}
              link={'/lider_semillero/Crear-programa-formacion'}
            />
          </Fragment>
        }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-table-lider">
            <thead>
              <tr className="list-visualize-table-lider__tr">
                <th className="list-visualize-table-lider__th" >Código</th>
                <th className="list-visualize-table-lider__th" >Versión</th>
                <th className="list-visualize-table-lider__th" >Nombre</th>
                <th className="list-visualize-table-lider__th" >Número de Ficha</th>
                <th className="list-visualize-table-lider__th" >Inicio Lectiva</th>
                <th className="list-visualize-table-lider__th" >Fin Lectiva</th>
              </tr>
            </thead>

            <tbody>
              {filtrarPrograma.length > 0 ? (
                filtrarPrograma.map(programa => (
                  <tr className="list-visualize-table-lider__tr" key={programa.id}>
                    <td className="list-visualize-table-lider__td"> {programa.codigo_programa_formacion} </td>
                    <td className="list-visualize-table-lider__td" > {programa.version_programa_formacion} </td>
                    <td className="list-visualize-table-lider__td" > {programa.nombre_programa_formacion} </td>
                    <td className="list-visualize-table-lider__td" > {programa.ficha} </td>
                    <td className="list-visualize-table-lider__td" > {programa.inicio_lectiva} </td>
                    <td className="list-visualize-table-lider__td" > {programa.fin_lectiva} </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>
                    <p className="text-center mt-20 font-bold">No se han encontrado programas de formación </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        }
      />
    </div>
  );
}
export default Visualizar_Programa_Formacion;
