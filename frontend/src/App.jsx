import { Fragment } from "react";
import Crear_Proyecto from "./componentes/crear_proyecto/Crear_Proyecto";
import Listar_Proyectos from "./componentes/listar_proyectos/Listar_Proyectos";
import Visualizar_Suspender_Proyecto from "./componentes/visualizar_suspender_proyecto/Visualizar_Suspender_Proyecto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layouts/Header/Header";
import Sidenav from "./componentes/layouts/Sidenav/Sidenav";

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
                    path="/Visualizar_Suspender_Proyecto"
                    element={
                      <main>
                        <Visualizar_Suspender_Proyecto />
                      </main>
                    }
                  />
                  <Route
                    path="/Listar_Proyectos"
                    element={
                      <main className="listar-proyectos-main-container">
                        <Listar_Proyectos />
                      </main>
                    }
                  />
                  <Route
                    path="/Crear_Proyecto"
                    element={
                      <main>
                        <Crear_Proyecto />
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
