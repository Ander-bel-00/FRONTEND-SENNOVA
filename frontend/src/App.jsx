import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Visualizar_Actividad from './Componentes/visualizar_actividad/Visualizar_Actividad';


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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;