import Cronograma from "./componentes/Cronograma/Cronograma";
import ListarUsuarios from "./componentes/ListarUsuarios/ListarUsuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./componentes/layouts/Sidenav/Sidenav";
import { Fragment } from "react";
import Header from "./componentes/layouts/Header/Header";
import Semillero from "./componentes/pages/Semillero/Semillero";
import ModificarUsuario from "./componentes/pages/ModificarUsuario/ModificarUsuario";
import Visualizar_Suspender_Proyecto from "./componentes/pages/visualizar_suspender_proyecto/Visualizar_Suspender_Proyecto";
import Listar_Proyectos from "./componentes/pages/listar_proyectos/Listar_Proyectos";
import Crear_Proyecto from "./componentes/pages/crear_proyecto/Crear_Proyecto";
import Actualizar_Proyectos from "./componentes/pages/actualizar_proyectos/Actualizar_Proyectos";
import Listar_Actividad from "./componentes/pages/listar_actividad/Listar_Actividad";
import Crear_Actividad from "./componentes/pages/crear_actividad/Crear_Actividad";
import Actualizar_Actividad from "./componentes/pages/actualizar_actividad/Actualizar_Actividad";

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
                    path="/semillero"
                    element={
                      <Fragment>
                        <main className="main-container">
                          <Semillero />
                        </main>
                      </Fragment>
                    }
                  />
                  <Route
                    path="/cronograma"
                    element={
                      <Fragment>
                        <main className="main-container">
                          <Cronograma />
                        </main>
                      </Fragment>
                    }
                  />
                  <Route
                    path="/usuarios-getAll"
                    element={
                      <main className="main-container">
                        <ListarUsuarios />
                      </main>
                    }
                  />

                  <Route
                    path="/users-update"
                    element={
                      <main className="main-container">
                        <ModificarUsuario />
                      </main>
                    }
                  />

                  <Route
                    path="/Visualizar_Suspender_Proyecto"
                    element={
                      <main className="main-container">
                        <Visualizar_Suspender_Proyecto />
                      </main>
                    }
                  />
                  <Route
                    path="/Listar_Proyectos"
                    element={
                      <main className="main-container">
                        <Listar_Proyectos />
                      </main>
                    }
                  />
                  <Route
                    path="/Crear_Proyecto"
                    element={
                      <main className="main-container">
                        <Crear_Proyecto />
                      </main>
                    }
                  />
                  <Route
                    path="/Actualizar_Proyectos"
                    element={
                      <main className="main-container">
                        <Actualizar_Proyectos />
                      </main>
                    }
                  />
                  <Route
                    path="/Listar_Actividad"
                    element={
                      <main className="main-container">
                        <Listar_Actividad />
                      </main>
                    }
                  />
                  <Route
                    path="/Crear_Actividad"
                    element={
                      <main className="main-container">
                        <Crear_Actividad />
                      </main>
                    }
                  />
                  <Route
                    path="/Actualizar_Actividad"
                    element={
                      <main className="main-container">
                        <Actualizar_Actividad />
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
