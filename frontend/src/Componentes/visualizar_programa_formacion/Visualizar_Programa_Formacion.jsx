import { BiSolidReport } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import './css/Visualizar_Programa_Formacion.css';

function Visualizar_Programa_Formacion() {
  return (
    <div>         

      {/* Cuadro donde irá hubicado el perfil */}
      <h5 className='perfil'>cuadro perfil</h5>
          

      {/* Botones principales */}
      <div className='mainButtons'>
        <button className='mainButtons__reporte'> <BiSolidReport  /> Reporte</button>
        <button className='mainButtons__crear--green'> <IoAdd   /> Añadir Información</button>
      </div>

      {/* Títulos de la informacion del contenido */}
      <div className='mainInformation'> 
        <h4 className='mainInformation__codigo'   >Código</h4>
        <h4 className='mainInformation__version'  >Versión</h4>
        <h4 className='mainInformation__nombre'   >Nombre</h4>
      <div/> 

      <p className="rowses"></p>
      
      {/* Contenido de la pagina web como tal */}
      <div className='contentsBox'>
        <p className='contentsBox__box1'>.</p>
        <p className='contentsBox__box2'>.</p>
        <p className='contentsBox__box3'>.</p>
      </div>

    </div>
  </div>
  )
}

export default Visualizar_Programa_Formacion;