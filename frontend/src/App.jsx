import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Cronograma from "./componentes/Cronograma/Cronograma";
import ListarUsuarios from "./componentes/ListarUsuarios/ListarUsuarios";
import Sidenav from "./componentes/layouts/Sidenav/Sidenav";
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
import Visualizar_Actividad from "./componentes/pages/visualizar_actividad/Visualizar_Actividad";
import Listar_Eventos from "./componentes/pages/listar_eventos/Listar_Eventos";
import Visualizar_Evento from "./componentes/pages/visualizar_evento/Visualizar_Evento";
import Visualizar_Programa_Formacion from "./componentes/pages/visualizar_programa_formacion/Visualizar_Programa_Formacion";
import Crear_Programa_Formacion from "./componentes/pages/crear_programa_formacion/Crear_Programa_Formacion";
import Crear_Eventos from "./componentes/pages/crear_eventos/Crear_Eventos";
import Actualizar_Eventos from "./componentes/pages/actualizar_eventos/Actualizar_Eventos";
import Listar_Fichas from "./componentes/pages/listar_fichas/Listar_Fichas";
import Visualizar_Actividad_ins_invg from "./componentes/pages/InstructorInvestigador/Visualizar_Actividad_ins_invg/Visualizar_Actividad_ins_invg";
import Listar_Eventos_ins_ivg from "./componentes/pages/InstructorInvestigador/listar_eventos_ins_invg/Listar_Eventos";
import Crear_Eventos_ins_invg from "./componentes/pages/InstructorInvestigador/Crear_Eventos_ins_invg/Crear_Eventos_ins_invg";
import Visualizar_Evento_ins_invg from "./componentes/pages/InstructorInvestigador/Visualizar_Evento_ins_invg/Visualizar_Evento_ins_invg";
import Visualizar_Programa_Formacion_ins_invg from "./componentes/pages/InstructorInvestigador/Visualizar_Programa_Formacion_ins_invg/Visualizar_Programa_Formacion_ins_invg";
import Crear_Programa_Formacion_ins_invg from "./componentes/pages/InstructorInvestigador/crear_programa_formacion/Crear_Programa_Formacion_ins_invg";
import Actualizar_Eventos_ins_invg from "./componentes/pages/InstructorInvestigador/Actualizar_Eventos_ins_invg/Actualizar_Eventos_ins_invg";
import Listar_Proyectos_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/listar_proyectos_instructor_investigador/Listar_Proyectos_Instructor_Investigador";
import Visualizar_Suspender_Proyecto_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/visualizar_suspender_proyecto_instructor_investigador/Visualizar_Suspender_Proyecto_Instructor_Investigador";
import Crear_Proyecto_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/crear_proyecto_instructor_investigador/Crear_Proyecto_Instructor_Investigador";
import Listar_Eventos_apr_invg from "./componentes/pages/AprendizInvestigador/listar_eventos_apr_invg/Listar_Eventos_apr_invg";
import Visualizar_Evento_apr_invg from "./componentes/pages/AprendizInvestigador/visualizar_evento_apr_invg/Visualizar_Evento_apr_invg";
import Visualizar_Actividad_apr_invg from "./componentes/pages/AprendizInvestigador/visualizar_actividad_apr_invg/Visualizar_Actividad_apr_invg";
import Visualizar_Programa_Formacion_apr_invg from "./componentes/pages/AprendizInvestigador/visualizar_programa_formacion_apr_invg/Visualizar_Programa_Formacion_apr_invg";
import Crear_Usuario from "./componentes/pages/crear_usuario/Crear_Usuario";
import Cronograma_ins_invg from "./componentes/pages/InstructorInvestigador/Cronograma_ins_invg/Cronograma_ins_invg";
import Listar_Usuarios_ins_invg from "./componentes/pages/InstructorInvestigador/Listar_Usuarios_ins_invg/Listar_Usuarios_ins_invg";
import Listar_Fichas_ins_invg from "./componentes/pages/InstructorInvestigador/Listar_Fichas_ins_invg/Listar_Fichas_ins_invg";
import Listar_Usuarios_apr_invg from "./componentes/pages/AprendizInvestigador/Listar_usuarios_apr_invg/Listar_Usuarios_apr_invg";

import Landing_ofi from "./componentes/pages/Landing/Landing_ofi";
 import Login from "./componentes/pages/login/Login";


function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={
        <Landing_ofi />}/>
      </Routes>
      <Routes>
        <Route path="/login" element={
        <Login />}/>
      </Routes>
        <Routes>
          {/* Lider Semillero */}
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

                  <Route
                    path="/Visualizar-actividad"
                    element={
                      <main className="main-container">
                        <Visualizar_Actividad />
                      </main>
                    }
                  />

                  <Route
                    path="/Crear-eventos"
                    element={
                      <main className="main-container">
                        <Crear_Eventos />
                      </main>
                    }
                  />

                  <Route
                    path="/Listar-eventos"
                    element={
                      <main className="main-container">
                        <Listar_Eventos />
                      </main>
                    }
                  />

                  <Route
                    path="/Visualizar-evento"
                    element={
                      <main className="main-container">
                        <Visualizar_Evento />
                      </main>
                    }
                  />

                  <Route
                    path="/Visualizar-programa-formacion"
                    element={
                      <main className="main-container">
                        <Visualizar_Programa_Formacion />
                      </main>
                    }
                  />

                  <Route
                    path="/Crear-programa-formacion"
                    element={
                      <main className="main-container">
                        <Crear_Programa_Formacion />
                      </main>
                    }
                  />

                  <Route
                    path="/Actualizar-eventos"
                    element={
                      <main className="main-container">
                        <Actualizar_Eventos />
                      </main>
                    }
                  />

                  <Route
                    path="/Listar-fichas"
                    element={
                      <main className="main-container">
                        <Listar_Fichas />
                      </main>
                    }
                  />

                  <Route
                    path="/crear-usuario"
                    element={
                      <main className="main-container">
                        <Crear_Usuario />
                      </main>
                    }
                  />
                </Routes>
              </Fragment>
            }
          />


          {/* instructor investigador */}
          <Route
            path="/instructor-investigador/*"
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
                    path="/Visualizar-actividad"
                    element={
                      <main className="main-container">
                        <Visualizar_Actividad_ins_invg />
                      </main>
                    }
                  />

                  <Route
                    path="/Crear-eventos"
                    element={
                      <main className="main-container">
                        <Crear_Eventos_ins_invg />
                      </main>
                    }
                  />

                  <Route
                    path="/Listar-eventos"
                    element={
                      <main className="main-container">
                        <Listar_Eventos_ins_ivg />
                      </main>
                    }
                  />

                  <Route
                    path="/Visualizar-evento"
                    element={
                      <main className="main-container">
                        <Visualizar_Evento_ins_invg />
                      </main>
                    }
                  />
                  <Route
                    path="/Visualizar-programa-formacion"
                    element={
                      <main className="main-container">
                        <Visualizar_Programa_Formacion_ins_invg />
                      </main>
                    }
                  />

                  <Route
                    path="/Crear-programa-formacion"
                    element={
                      <main className="main-container">
                        <Crear_Programa_Formacion_ins_invg />
                      </main>
                    }
                  />

                  <Route
                    path="/Actualizar-eventos"
                    element={
                      <main className="main-container">
                        <Actualizar_Eventos_ins_invg />
                      </main>
                    }
                  />
                  <Route
                    path="/Listar_Proyectos_Instructor_Investigador"
                    element={
                      <main className="main-container">
                        <Listar_Proyectos_Instructor_Investigador />
                      </main>
                    }
                  />
                  <Route
                    path="/Visualizar_Suspender_Proyecto_Instructor_Investigador"
                    element={
                      <main className="main-container">
                        <Visualizar_Suspender_Proyecto_Instructor_Investigador />
                      </main>
                    }
                  />
                  <Route
                    path="/Crear_Proyecto_Instructor_Investigador"
                    element={
                      <main className="main-container">
                        <Crear_Proyecto_Instructor_Investigador />
                      </main>
                    }
                  />
                  <Route
                    path="/cronograma"
                    element={
                      <Fragment>
                        <main className="main-container">
                          <Cronograma_ins_invg />
                        </main>
                      </Fragment>
                    }
                  />

                  <Route
                    path="/usuarios-getAll"
                    element={
                      <main className="main-container">
                        <Listar_Usuarios_ins_invg />
                      </main>
                    }
                  />

                  <Route
                    path="/Listar-fichas"
                    element={
                      <main className="main-container">
                        <Listar_Fichas_ins_invg />
                      </main>
                    }
                  />
                </Routes>
              </Fragment>
            }
          />
          <Route
            path="/aprendiz-investigador/*"
            element={
              <Fragment>
                <Header />
                <Sidenav />
                <Routes>
                  
                </Routes>
              </Fragment>
            }
          />

          <Route path="/aprendiz-investigador/*"
            element={
              <Fragment>
                <Header />
                <Sidenav />
                <Routes>
                  <Route
                    path="/Listar-eventos"
                    element={
                      <main className="main-container">
                        <Listar_Eventos_apr_invg />
                      </main>
                    }
                  />
                  <Route
                    path="/Visualizar-actividad"
                    element={
                      <main className="main-container">
                        <Visualizar_Actividad_apr_invg />
                      </main>
                    }
                  />
                  <Route
                    path="/Visualizar-evento"
                    element={
                      <main className="main-container">
                        <Visualizar_Evento_apr_invg />
                      </main>
                    }
                  />
                  <Route
                    path="/Visualizar-programa-formacion"
                    element={
                      <main className="main-container">
                        <Visualizar_Programa_Formacion_apr_invg />
                      </main>
                    }
                  />
                  <Route
                    path="/cronograma"
                    element={
                      <Fragment>
                        <main className="main-container">
                          <Cronograma_ins_invg />
                        </main>
                      </Fragment>
                    }
                  />

                  <Route
                    path="/usuarios-getAll"
                    element={
                      <Fragment>
                        <main className="main-container">
                          <Listar_Usuarios_apr_invg />
                        </main>
                      </Fragment>
                    }
                  />

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
