import {} from './Componentes/visualizar actividad/VisualizarActividad.css'
import { BiSolidReport } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

function App() {

  return (
    <>
    {/* Dashboard */}
    <div >
        <ul>
        <h2> TEINNOVA </h2>
          <li><a href=""></a>Semillero</li>
          <li><a href=""></a>Proyectos</li>
          <li><a href=""></a>Actividades</li>
          <li><a href=""></a>Eventos CTI</li>
          <li><a href=""></a>Programa</li>
          <li><a href=""></a>Usuarios</li>
        </ul>
      </div>

      {/* Cuadro donde irá hubicado el perfil */}
      <h6 className='perfil'>cuadro perfil</h6>

      {/* Barra horizontal funcional donde se interactua */}
      <div className='horizontalBusqueda'> 
        <button> <BiSolidReport /> Reporte</button>
        <button> <CiCalendar    /> Ir a Cronograma</button>
        <button> <FaSearch      /> Buscar Actividades</button>
        <button className='butonGreen'> <IoAdd /> Crear Actividades</button>
      </div>  

      {/* Titulos donde se le indica al lector qué irá en ese campo */}
      <div className='mainPage'>
        <h4 className='nombre'>Nombre Actividad</h4>
        <h4 className='tarea'>Tarea</h4>
        <h4 className='fecha'>Fecha</h4>
        <h4 className='resultado'>Resultado</h4>
        <h4 className='producto'>Producto</h4>
        <h4 className='responsable'>Responsable de la Actividad</h4>
      </div>

      {/* Inforcacíon de los campos */}
      <div className='contentCampos'>
        <p className='d'>Diseño</p>
        <p className='c'>Color</p>
        <p className='f'>9 de febrero de 2024</p>
        <p className='r'>Aprobado</p>
        <p className='p'>Página web</p>
        <p className='re'>Karol Andre Montoya Rendón </p>
      </div>

      <div className='twoButtons'>
      <button> <FaEdit /> </button>
      <button> <RiDeleteBin5Line /> </button>
      </div>
    </>
  )
}

export default VisualizarActividad;