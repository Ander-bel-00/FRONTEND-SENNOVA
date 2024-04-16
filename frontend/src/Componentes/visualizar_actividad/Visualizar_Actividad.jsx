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
      {/* Dashboard */}
      <h2 className="dashBoard"> DASHBOARD </h2>
          

      {/* Cuadro donde irá hubicado el perfil */}
      <h5 className='perfil'>cuadro perfil</h5>
          

      {/* Botones principales */}
      <div className="functionales">
        <button className="functionales__1"> <BiSolidReport  /> Reporte</button>
        <button className="functionales__2"> <CiCalendar     /> Ir a Cronograma</button>
        <button className="functionales__3"> <FaSearch       /> Buscar Actividades</button>
        <button className='functionales__4--green'> <IoAdd   /> Crear Actividades</button>
      </div>

      {/* Botones secundarios */}
      <div className='functionales2'>
        <button className="functionales2__edit"> <FaEdit /> </button>
        <button className="functionales2__delete"> <RiDeleteBin5Line /> </button>
      </div>

      {/* Títulos de la informacion del contenido */}
      <div className='mainPage'> 
        <h4 className='mainPage__nombre'      >Nombre Actividad</h4>
        <h4 className='mainPage__tarea'       >Tarea</h4>
        <h4 className='mainPage__fecha'       >Fecha</h4>
        <h4 className='mainPage__resultado'   >Resultado</h4>
        <h4 className='mainPage__producto'    >Producto</h4>
        <h4 className='mainPage__responsable' >Responsable de la Actividad</h4>
      <div/> 

      <p className="rows"></p>
      
      {/* Contenido de la pagina web como tal */}
      <div className="contents">
        <p className='contents__box1'>.h</p>
        <p className='contents__box2'>.h</p>
        <p className='contents__box3'>.h</p>
        <p className='contents__box4'>.h</p>
        <p className='contents__box5'>.h</p>
        <p className='contents__box6'>.h</p>
      </div>

      

    </div>
  </div>
  )
}

export default Visualizar_Actividad;