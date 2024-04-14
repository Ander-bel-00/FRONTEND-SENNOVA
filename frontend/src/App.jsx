import Cronograma from "./componentes/Cronograma/Cronograma";
import ListarUsuarios from "./componentes/ListarUsuarios/ListarUsuarios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidenav from "./componentes/layouts/Sidenav/Sidenav";
import { Fragment } from "react";
import Header from "./componentes/layouts/Header/Header";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route 
            path="/cronograma"
            element={
              <Fragment>
                <Header />
                <Sidenav />
                <main className="cronograma-main-container">
                  <Cronograma />
                </main>
              </Fragment>
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