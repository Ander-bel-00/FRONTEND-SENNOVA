import { BiSolidReport } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import './css/Visualizar_Actividad.css';

function Visualizar_Actividad() {
  return (
    <div>

      
      {/* Botones principales
      <div className="functionales">
        <button className="functionales__1"> <BiSolidReport  /> Reporte</button>
        <button className="functionales__2"> <CiCalendar     /> Ir a Cronograma</button>
        <input type="text" placeholder="Buscar Actividades" className="funcional__3" />
        <button className='functionales__4--green'> <IoAdd   /> Crear Actividades</button>
      </div>

      Botones secundarios
      <div className='functionales2'>
        <button className="functionales2__edit"> <FaEdit /> </button>
        <button className="functionales2__delete"> <RiDeleteBin5Line /> </button>
      </div> */}

      <div className='mainPagess'>
        <table className="mainPage__tablemain">

        <tr className="namePage__contentMain-title">
          <th>Nombre Actividad</th>
          <th>Tarea</th>
          <th>Fecha</th>
          <th>Resultado</th>
          <th>Producto</th>
          <th>Responsable de la Actividad</th>
        </tr>

        <tr className="mainPage__contentMain">
          <td>.contenido</td>
          <td>.contenido</td>
          <td>.contenido</td>
          <td>.contenido</td>
          <td>.contenido</td>
          <td>.contenido</td>
        </tr>
        </table>
      </div>
  </div>
  )
}

export default Visualizar_Actividad;