import { TbArrowBack } from "react-icons/tb";
import './css/Actualizar_Eventos.css';


function Actualizar_Eventos() {
    return (
        <div className="main-container__contenedor-hijo">

            {/* Titulo general */}
            <h2 className='generalsTitle'>Actualizar Evento</h2>
            <div>
                <button className="mainBoxe_volver"><TbArrowBack /></button>
            </div>

            {/* Formulario y caja */}
            <div className='mainBoxe'>
                <form className="mainBoxe__caja">

                    <div className="firstsColumn">
                        <div>
                            <label >Nombre*</label>
                            <br />
                            <input type='text' className='firstsColumn__nombre' />
                        </div>
                        <div>
                            <label >Cantidad Carticipantes*</label>
                            <br />
                            <input type='text' className='firstsColumn__fechaF' />
                        </div>
                        <div>
                            <label >Lugar del Evento*</label>
                            <br />
                            <input type='text' className='firstsColumn__lugar' />
                        </div>
                        <div />
                    </div>
                </form>

                {/* segunda columna */}
                <form >
                    <div className='secondsColumn'>
                        <div>
                            <label>Fecha de Inicio del Evento*</label>
                            <br />
                            <input type='text' className='secondsColumn__fechaI' />
                        </div>
                        <div>
                            <label>Fecha de Fin del Evento*</label>
                            <br />
                            <input type='text' className='secondsColumn__cantidad' />
                        </div>
                        <div>
                            <label>Tipo*</label>
                            <br />
                            <input type='text' className='secondsColumn__tipo' />
                        </div>
                    </div>
                </form>


                {/* Botones principales */}
                <div className='buttEvents'>
                    <button className='buttEvents__cancelar'> Cancelar</button>
                    <button className='buttEvents__crear--green'>  Crear</button>
                </div>

            </div>
        </div>
    )
}

export default Actualizar_Eventos;