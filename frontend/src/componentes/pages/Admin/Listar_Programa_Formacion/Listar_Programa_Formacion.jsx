import { FaFileArrowUp } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import BotonBlanco from "../../../common/BotonReporte";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import './css/Listar_Programa_Formacion.css';
import { Fragment } from "react";

function Listar_Programa_Formacion_Admin() {
  
  const [programaFormacion, setProgramaFormacion] = useState([]);

  useEffect(() => {
    const obtenerprogramaformacion = async () => {
      try {
        const res = await clienteAxios.get(
        `/programaformacion/`
          );
          setProgramaFormacion(res.data);
      } catch (error) {
        console.error("Error al listar los programas de formación", error);
      }
    };

    obtenerprogramaformacion();
  }, []);

  





  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
      Header_Tools={
        <Fragment>
          <BotonBlanco icon={<FaFileArrowUp/>} text={"reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'}/>
          <BotonVerdeAñadir icon={<IoAdd/>} text={"Crear Programa de Formación"} link={'/admin/Crear-programa-formacion'}/>
        </Fragment>
      }
      />

      <Caja_Blanca
        content={
          <table className="list-visualize-table-admin">
            <thead>
              <tr className="list-visualize-table__tr-admin">
                <th className= "list-visualize-table__th-admin" >Código del Programa</th>
                <th className= "list-visualize-table__th-admin" >Versión del Programa</th>
                <th className= "list-visualize-table__th-admin" >Nombre del Programa</th>
                <th className= "list-visualize-table__th-admin" >Grupo al cual Pertenece</th>
                <th className= "list-visualize-table__th-admin" >Fecha Inicio lectiva</th>
                <th className= "list-visualize-table__th-admin" >Fecha Fin lectiva</th>
              </tr>
            </thead>

            <tbody>
              {programaFormacion.map((Visualizar, index) => (
              <tr className="list-visualize-table__tr-admin" key={index}>
                <td className= "list-visualize-table__td-admin"  >{Visualizar.codigo_programa_formacion} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.version_programa_formacion} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.nombre_programa_formacion} </td>
                <td className= "list-visualize-table__td-admin">  {Visualizar.ficha} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.inicio_lectiva} </td>
                <td className= "list-visualize-table__td-admin" > {Visualizar.fin_lectiva} </td>
              </tr>
              ))}
            </tbody>
          </table>
        }
      />
    </div>
  );
}
export default Listar_Programa_Formacion_Admin;