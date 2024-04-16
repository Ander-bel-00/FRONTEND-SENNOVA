import './css/Crear_Programa_Formacion.css';

function Crear_Programa_Formacion() {
  return (
    <div>
      {/* Dashboard */}
      <h2 className='dashBoard'> DASHBOARD </h2>
          

      {/* Cuadro donde irá hubicado el perfil */}
      <h5 className='perfil'>cuadro perfil</h5>
          

      {/* Titulo general */}
      <h2 class='mainTitle'> Programa de Formación</h2>


      {/* Formulario y caja */}
      <div className='inputBoxes'> 
        <form className="inputBoxes__olderbox">
            <h3>Insertar Información</h3>
                <div>
                    <label className="inputBoxes__label1">Código*</label>
                    <br />
                    <input type='text' className='inputBoxes__codigo'/>
                </div>
                <div>
                    <label className="inputBoxes__label2">Versión*</label>
                    <br />
                    <input type='text' className='inputBoxes__version'/>
                </div>
                <div>
                    <label className="inputBoxes__label3">Nombre*</label>
                    <br />
                    <input type='text' className='inputBoxes__nombre'/>
                </div>
            <div/> 
        </form>


      {/* Botones principales */}
      <div className='buttonsCreating'>
        <button className='buttonsCreating__cancelar'> Cancelar</button>
        <button className='buttonsCreating__crear--green'>  Crear</button>
      </div>

    </div>
  </div>
  )
}

export default Crear_Programa_Formacion;