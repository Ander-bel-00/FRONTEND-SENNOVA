import './css/Crear_Eventos.css';

function Crear_Eventos() {
  return (
    <div>
      {/* Dashboard */}
      <h2 className='dashBoard'> DASHBOARD </h2>
          

      {/* Cuadro donde irá hubicado el perfil */}
      <h5 className='perfil'>cuadro perfil</h5>
          

      {/* Titulo general */}
      <h2 className='generalTitle'>Crear Eventos CTI</h2>


      {/* Formulario y caja */}
      <div className='mainBoxes'> 
        <h3>Crear Eventos CTI</h3>
            <form>
                <div className="firstColumn">
                    <div>
                        <label >Nombre del evento*</label>
                        <br />
                        <input type='text' className='firstColumn__nombre'/>
                    </div>
                    <div>
                        <label >Fecha de Fin del Evento*</label>
                        <br />
                        <input type='text' className='firstColumn__fechaF'/>
                    </div>
                    <div>
                        <label >Lugar del Evento*</label>
                        <br />
                        <input type='text' className='firstColumn__lugar'/>
                    </div>
                <div/> 
            </div>
        </form>

        {/* segunda columna */}
        <form >
            <div className='secondColumn'>
                <div>
                    <label>Fecha de Inicio del Evento*</label>
                    <br />
                    <input type='text' className='secondColumn__fechaI'/>
                </div>
                <div>
                    <label>Cantidad de participantes*</label>
                    <br />
                    <input type='text' className='secondColumn__cantidad'/>
                </div>
                <div>
                    <label>Tipo*</label>
                    <br />
                    <input type='text' className='secondColumn__tipo'/>
                </div>
            </div>
        </form>

      {/* Botones principales */}
      <div className='buttonsEvents'>
        <button className='buttonsEvents__cancelar'> Cancelar</button>
        <button className='buttonsEvents__crear--green'>  Crear</button>
      </div>

    </div>
  </div>
  )
}

export default Crear_Eventos;