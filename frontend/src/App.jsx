import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Visualizar_Actividad from './Componentes/visualizar_actividad/Visualizar_Actividad';
import Listar_Eventos from './Componentes/listar_eventos/Listar_Eventos';
import Visualizar_Evento from './Componentes/visualizar_evento/Visualizar_Evento';
import Visualizar_Programa_Formacion from './Componentes/visualizar_programa_formacion/Visualizar_Programa_Formacion';
import Crear_Programa_Formacion from './Componentes/crear_programa_formacion/Crear_Programa_Formacion';
import Crear_Eventos from './Componentes/crear_eventos/Crear_Eventos';


function App () {
  return(
    <> 
      <BrowserRouter>
        <Routes>

          <Route 
            path='/Visualizar-actividad'
            element={
              <Visualizar_Actividad />
            }
          />

          <Route 
            path='/Listar-eventos'
            element={
              <Listar_Eventos />
            }
          />

          <Route 
            path='/Visualizar-evento'
            element={
              <Visualizar_Evento/>
            }
          
          />
          <Route 
            path='/Visualizar-programa-formacion'
            element={
              <Visualizar_Programa_Formacion/>
            }
          
          />
          <Route 
            path='/Crear-programa-formacion'
            element={
              <Crear_Programa_Formacion/>
            }
          />

          <Route 
            path='/Crear-eventos'
            element={
              <Crear_Eventos/>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;