import { Fragment } from "react";
import Crear_Proyecto from "./componentes/crear_proyecto/Crear_Proyecto";
import Listar_Proyectos from "./componentes/listar_proyectos/Listar_Proyectos";
import Visualizar_Suspender_Proyecto from "./componentes/visualizar_suspender_proyecto/Visualizar_Suspender_Proyecto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layouts/Header/Header";
import Sidenav from "./componentes/layouts/Sidenav/Sidenav";
import Actualizar_Proyectos from "./componentes/actualizar_proyectos/Actualizar_Proyectos";
import Crear_Actividad from "./componentes/crear_actividad/Crear_Actividad";
import Actualizar_Actividad from "./componentes/actualizar_actividad/Actualizar_Actividad";
import Listar_Actividad from "./componentes/listar_actividad/Listar_Actividad"

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
                  <Route 
                    path="/Actualizar_Proyectos"   
                    element={
                      <main>
                        <Actualizar_Proyectos />
                      </main>
                    }               
                  />
                  <Route 
                    path="/Listar_Actividad"
                    element={
                      <main>
                        <Listar_Actividad />
                      </main>
                    }
                  />
                  <Route 
                   path="/Crear_Actividad"
                   element={
                     <main>
                       <Crear_Actividad />
                     </main>
                   }
                  />
                  <Route 
                    path="/Actualizar_Actividad"
                    element={
                      <main>
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