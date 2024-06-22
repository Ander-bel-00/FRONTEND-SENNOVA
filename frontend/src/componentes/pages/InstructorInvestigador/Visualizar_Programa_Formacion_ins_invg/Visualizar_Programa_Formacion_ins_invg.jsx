import { FaFileArrowUp } from "react-icons/fa6";
import { Fragment, useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import './css/Visualizar_Programa_Formacion_ins_invg.css';
import clienteAxios from "../../../../config/axios";
import Search from "../../../common/Search";

function Visualizar_Programa_Formacion_ins_invg() {
  const [visualizarPrograma, setVisualizarPrograma] = useState([]);

  useEffect(() => {
    const getProgramasDeFormacion = async () => {
      try {
        const res = await clienteAxios.get('/programaformacion/');
        setVisualizarPrograma(res.data);
      } catch (error) {
        console.log('Error al obtener todos los programas de formación', error);
      }
    }

    getProgramasDeFormacion();
  }, []);

  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
      Header_Tools={
        <Fragment>
          <BotonBlanco 
            icon={<FaFileArrowUp/>} 
            text={"Reporte"} 
            clase={'btn-blanco btn-blanco--modify btn-verde'} 
          />
          
          <Search 
              text={"Buscar Programa"}
              // onFilter={handleFilter}
              // data={listarEventos} 
          />

          <BotonVerdeAñadir 
            icon={<IoAdd/>} 
            text={"Crear Programa de Formación"} 
            link={'/instructor_investigador/Crear-programa-formacion'}
          />
        </Fragment>
      }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-instructor-table">
            <thead>
              <tr className="list-visualize-table-instructor__tr">
                <th className= "list-visualize-table-instructor__th" >Código</th>
                <th className= "list-visualize-table-instructor__th" >Nombre</th>
                <th className= "list-visualize-table-instructor__th" >Versión</th>
                <th className= "list-visualize-table-instructor__th" >Ficha</th>
                <th className= "list-visualize-table-instructor__th" >Inicio Etapa Lectiva</th>
                <th className= "list-visualize-table-instructor__th" >Fin Etapa Lectiva</th>
              </tr>
            </thead>

            <tbody>
              {visualizarPrograma.map((visualizar) => (
              <tr className="list-visualize-table-instructor__tr"key={visualizar.id}>
                <td className= "list-visualize-table-instructor__td" > {visualizar.codigo_programa_formacion} </td>
                <td className= "list-visualize-table-instructor__td" > {visualizar.nombre_programa_formacion} </td>
                <td className= "list-visualize-table-instructor__td" > {visualizar.version_programa_formacion } </td>
                <td className= "list-visualize-table-instructor__td" > {visualizar.ficha} </td>
                <td className= "list-visualize-table-instructor__td" > {visualizar.inicio_lectiva} </td>
                <td className= "list-visualize-table-instructor__td" > {visualizar.fin_lectiva} </td>
              </tr>
              ))}
            </tbody>
          </table>
        }
      />
    </div>
  );
}
export default Visualizar_Programa_Formacion_ins_invg;