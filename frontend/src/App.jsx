import Cronograma from "./componentes/Cronograma/Cronograma";
import ListarUsuarios from "./componentes/ListarUsuarios/ListarUsuarios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route 
            path="/cronograma"
            element={
              <main className="cronograma-main-container">
                <Cronograma />
              </main>
            }
          />

          <Route 
            path="/listar-usuarios"
            element={
              <main>
                <ListarUsuarios />
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;