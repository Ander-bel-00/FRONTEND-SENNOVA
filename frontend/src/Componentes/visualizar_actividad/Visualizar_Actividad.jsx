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
      <div className="funcionales">
        <button className="funcionales__1"> <BiSolidReport  /> Reporte</button>
        <button className="funcionales__2"> <CiCalendar     /> Ir a Cronograma</button>
        <button className="funcionales__3"> <FaSearch       /> Buscar Actividades</button>
        <button className='funcionales__4--green'> <IoAdd   /> Crear Actividades</button>
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

      <p className="row"></p>
      
      {/* Contenido de la pagina web como tal */}
      <div className="content">
        <p className='content__diseño'      >Diseño</p>
        <p className='content__tarea'       >Color</p>
        <p className='content__resultado'   >9 de febrero de 2024</p>
        <p className='content__aprobado'    >Aprobado</p>
        <p className='content__pagina'      >Página web</p>
        <p className='content__karol andrea'>Karol Andrea Montoya Rendón </p>
      </div>

      <div className='funcionales2'>
        <button className="funcionales2__edit"> <FaEdit /> </button>
        <button className="funcionales2__delete"> <RiDeleteBin5Line /> </button>
      </div>

    </div>
  </div>
  )
}

export default Visualizar_Actividad;