import { BiSolidReport } from "react-icons/bi";
import { CiCalendar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaEye } from "react-icons/lia";
import './css/Listar_Eventos.css';

function Listar_Eventos() {
  return (
    <div>
      {/* Dashboard */}
      <h2 className="dashBoard"> DASHBOARD </h2>
          

      {/* Cuadro donde irá hubicado el perfil */}
      <h5 className='perfil'>cuadro perfil</h5>
          

      {/* Botones principales */}
      <div className="funcional">
        <button className="funcional__1"> <BiSolidReport  /> Reporte</button>
        <button className="funcional__2"> <CiCalendar     /> Ir a Cronograma</button>
        <button className="funcional__3"> <FaSearch       /> Buscar Eventos</button>
        <button className='funcional__4--green'> <IoAdd   /> Crear Evento</button>
      </div>


      {/* Botones secundarios */}
      <div className='funcionales2'>
        <button className="funcionales2__edit"> <FaEdit /> </button>
        <button className="funcionales2__delete"> <RiDeleteBin5Line /> </button>
        <button className="funcionales2__visualize"> <LiaEye /> </button>
      </div>

      <div className='funcionales3'>
        <button className="funcionales3__edit"> <FaEdit /> </button>
        <button className="funcionales3__delete"> <RiDeleteBin5Line /> </button>
        <button className="funcionales3__visualize"> <LiaEye /> </button>
      </div>


      {/* Títulos de la informacion del contenido */}
      <div className='mainPage'> 
        <h4 className= "mainPage__nombre">Nombre</h4>
        <h4 className= "mainPage__fechaI">Fecha inicio</h4>
        <h4 className= "mainPage__fechaF">Fecha fin</h4>
        <h4 className= "mainPage__cantidad">Cantidad participantes</h4>
        <h4 className= "mainPage__lugar">Lugar</h4>
        <h4 className= "mainPage__tipo">Tipo</h4>
      <div/> 

      <p className="row"></p>
      

      {/* Contenido de la pagina web como tal */}
      <div className="content">
        <p className='content__box1'>.h </p>
        <p className='content__box2'>.h </p>
        <p className='content__box3'>.h </p>
        <p className='content__box4'>.h </p>
        <p className='content__box5'>.h </p>
        <p className='content__box6'>.h </p>
      </div>

      <p className="row2"></p>

      <div className="content2">
        <p className='content2__box1'>.h </p>
        <p className='content2__box2'>.h </p>
        <p className='content2__box3'>.h </p>
        <p className='content2__box4'>.h </p>
        <p className='content2__box5'>.h </p>
        <p className='content2__box6'>.h </p>
      </div>

    </div>
  </div>
  )
}

export default Listar_Eventos;