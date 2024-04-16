import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Visualizar_Actividad from './Componentes/visualizar_actividad/Visualizar_Actividad';
import Listar_Eventos from './Componentes/listar_eventos/Listar_Eventos';
import Visualizar_Evento from './Componentes/visualizar_evento/Visualizar_Evento';


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

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;