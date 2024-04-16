import Cronograma from "./componentes/Cronograma/Cronograma";
import ListarUsuarios from "./componentes/ListarUsuarios/ListarUsuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./componentes/layouts/Sidenav/Sidenav";
import { Fragment } from "react";
import Header from "./componentes/layouts/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/lider-semillero/*"
            element={
              <Fragment>
                <Header />
                <Sidenav />
                <Routes>
                  <Route
                    path="/cronograma"
                    element={
                      <Fragment>
                        <main className="cronograma-main-container">
                          <Cronograma />
                        </main>
                      </Fragment>
                    }
                  />
                  <Route
                    path="/usuarios-getAll"
                    element={
                      <main className="main-usuarios-get-container">
                        <ListarUsuarios />
                      </main>
                    }
                  />
                </Routes>
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
