import { FaSearch } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import './css/Visualizar_Evento.css';

function Visualizar_Evento() {
  return (
    <div>
      {/* Dashboard */}
      <h2 className="dashBoard"> DASHBOARD </h2>
          

      {/* Cuadro donde irá hubicado el perfil */}
      <h5 className='perfil'>cuadro perfil</h5>
          

      {/* Botones principales */}
      <div className="functional">
        <button className="functional__2"> <TbArrowBack /> </button>
        <button className="functional__3"> <FaSearch       /> Buscar Evento</button>
        <button className='functional__4--green'> <IoAdd   /> Crear Evento</button>
      </div>

      {/* Botones secundarios */}
      <div className='functional2'>
        <button className="functional2__edit"> <FaEdit /> </button>
        <button className="functional2__delete"> <RiDeleteBin5Line /> </button>
      </div>

      {/* Títulos de la informacion del contenido */}
      <div className='mainPart'> 
        <h4 className='mainPart__nombre'    >Nombre</h4>
        <h4 className='mainPart__fechaI'    >Fecha Inicio</h4>
        <h4 className='mainPart__fechaF'    >Fecha Fin</h4>
        <h4 className='mainPart__cantidad'  >Cantidad Participantes</h4>
        <h4 className='mainPart__lugar'     >Lugar</h4>
        <h4 className='mainPart__tipo'      >Tipo</h4>
      <div/> 

      <p className="rowes"></p>
      
      {/* Contenido de la pagina web como tal */}
      <div className="contenido">
        <p className='contenido__box1'>.h</p>
        <p className='contenido__box2'>.h</p>
        <p className='contenido__box3'>.h</p>
        <p className='contenido__box4'>.h</p>
        <p className='contenido__box5'>.h</p>
        <p className='contenido__box6'>.h</p>
      </div>

      

    </div>
  </div>
  )
}

export default Visualizar_Evento;