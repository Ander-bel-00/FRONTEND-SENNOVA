import { BiSolidReport } from "react-icons/bi";
import { IoAdd } from "react-icons/io5";
import './css/Visualizar_Programa_Formacion.css';

function Visualizar_Programa_Formacion() {
  return (
    <div>    

      {/* Botones principales
      <div className='mainButtons'>
        <button className='mainButtons__reporte'> <BiSolidReport  /> Reporte</button>
        <button className='mainButtons__crear--green'> <IoAdd   /> Añadir Información</button>
      </div> */}


      <div className='mainInformation'> 
        <h4 className='mainInformation__codigo'   >Código</h4>
        <h4 className='mainInformation__version'  >Versión</h4>
        <h4 className='mainInformation__nombre'   >Nombre</h4>
      <div/> 


    </div>
  </div>
  )
}

export default Visualizar_Programa_Formacion;