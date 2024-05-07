import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Fragment } from "react";
import Cronograma from "./componentes/pages/Cronograma/Cronograma";
import ListarUsuarios from "./componentes/pages/ListarUsuarios/ListarUsuarios";
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
import Crear_Eventos_ins_invg from "./componentes/pages/InstructorInvestigador/Crear_Eventos_ins_invg/Crear_Eventos_ins_invg";
import Visualizar_Evento_ins_invg from "./componentes/pages/InstructorInvestigador/Visualizar_Evento_ins_invg/Visualizar_Evento_ins_invg";
import Visualizar_Programa_Formacion_ins_invg from "./componentes/pages/InstructorInvestigador/Visualizar_Programa_Formacion_ins_invg/Visualizar_Programa_Formacion_ins_invg";
import Crear_Programa_Formacion_ins_invg from "./componentes/pages/InstructorInvestigador/crear_programa_formacion/Crear_Programa_Formacion_ins_invg";
import Actualizar_Eventos_ins_invg from "./componentes/pages/InstructorInvestigador/Actualizar_Eventos_ins_invg/Actualizar_Eventos_ins_invg";
import Listar_Proyectos_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/listar_proyectos_instructor_investigador/Listar_Proyectos_Instructor_Investigador";
import Visualizar_Suspender_Proyecto_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/visualizar_suspender_proyecto_instructor_investigador/Visualizar_Suspender_Proyecto_Instructor_Investigador";
import Crear_Proyecto_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/crear_proyecto_instructor_investigador/Crear_Proyecto_Instructor_Investigador";
import Listar_Actividad_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/listar_actividad_instructor_investigador/Listar_Actividad_Instructor_Investigador";
import Crear_Actividad_Instructor_Investigador from "./componentes/pages/InstructorInvestigador/crear_actividad_instructor_investigador/Crear_Actividad_Instructor_Investigador";
import Visualizar_Proyecto_apr_invg from "./componentes/pages/AprendizInvestigador/visualizar_proyecto_apr_invg/Visualizar_Proyecto_apr_invg";
import Listar_Proyectos_apr_invg from "./componentes/pages/AprendizInvestigador/listar_proyectos_apr_invg/Listar_Proyectos_apr_invg";

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
import Listar_Actividad_apr_invg from "./componentes/pages/AprendizInvestigador/listar-_actividad_apr_invg/Listar_Actividad_apr_invg";
import Actualizar_Semillero from "./componentes/pages/actualizar-semillero/Actualizar_Semillero";
import Añadir_Semillero from "./componentes/pages/añadir_semillero/Añadir_Semillero";
import Cronograma_apr_invg from "./componentes/pages/AprendizInvestigador/Cronograma_apr_invg/Cronograma_apr_invg";
import ListarEvento_ins_invg from "./componentes/pages/InstructorInvestigador/listarEventos_ins_invg/ListarEvento_ins_invg";
import Semillero_ins_invg from "./componentes/pages/InstructorInvestigador/Semillero_ins_invg/Semillero_ins_invg";
import Semillero_apr_invg from "./componentes/pages/AprendizInvestigador/Semillero_apr_invg/Semillero_apr_invg";
import Visualizar_Usuario from "./componentes/pages/visualizar_usuario/Visualizar_Usuario";
import Visualizar_Usuario_ins_invg from "./componentes/pages/InstructorInvestigador/visualizar_usuario_ins_invg/Visualizar_Usuario_ins_invg";
import { useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./ProtectedRoute";
import Perfil from "./componentes/pages/perfil/Perfil";
import Visualizar_Programa_Formacion_Admin from "./componentes/pages/Admin/Visualizar_Programa_Formacion_Admin/Visualizar_Programa_Formacion_Admin";
import Crear_Programa_Formacion_Admin from "./componentes/pages/Admin/Crear_Programa_Formacion_Admin/Crear_Programa_Formacion_Admin";
import Visualizar_Actividad_Admin from "./componentes/pages/Admin/Visualizar_Actividad_Admin/Visualizar_Actividad_Admin";
import Listar_Eventos_Admin from "./componentes/pages/Admin/Listar_Eventos_Admin/Listar_Eventos_Admin";
import Visualizar_Evento_Admin from "./componentes/pages/Admin/Visualizar_Evento_Admin/Visualizar_Evento_Admin";
import Crear_Eventos_Admin from "./componentes/pages/Admin/Crear_Eventos_Admin/Crear_Eventos_Admin";
import Actualizar_Eventos_Admin from "./componentes/pages/Admin/Actualizar_Eventos_Admin/Actualizar_Eventos_Admin";
import Cronograma_Admin from "./componentes/pages/Admin/Cronograma_Admin/Cronograma_Admin";
import Listar_Proyectos_Admin from "./componentes/pages/Admin/Listar_Proyecros_Admin/Listar_Proyectos_Admin";
import Visualizar_Suspender_Proyecto_Admin from "./componentes/pages/Admin/Visualizar_Suspender_Proyecto_Admin/Visualizar_Suspender_Proyecto_Admin";
import Actualizar_Proyectos_Admin from "./componentes/pages/Admin/Actualizar_Proyectos_Admin/Actualizar_Proyectos_Admin";
import Crear_Proyectos_Admin from "./componentes/pages/Admin/Crear_Proyectos_Admin/Crear_Proyectos_Admin";
import Crear_Actividad_Admin from "./componentes/pages/Admin/Crear_Actividad_Admin/Crear_Actividad_Admin";
import Listar_Actividad_Admin from "./componentes/pages/Admin/Listar_Actividad_Admin/Listar_Actividad_Admin";
import Actualizar_Actividad_Admin from "./componentes/pages/Admin/Actualizar_Actividad_Admin/Actualizar_Actividad_Admin";
import Listar_Usuarios_Admin from "./componentes/pages/Admin/Listar-Usuarios-Admin/Listar_Usuarios_Admin";
import Semillero_Admin from "./componentes/pages/Admin/Semillero_Admin/Semillero_Admin";
import Crear_Usuario_Admin from "./componentes/pages/Admin/Crear_Usuario_Admin/Crear_Usuario_Admin";
import Visualizar_Usuario_Admin from "./componentes/pages/Admin/Visualizar_Usuario_Admin/Visualizar_Usuario_Admin";

function App() {
  const { isAuthenticated, userRole, handleLogout } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <Navigate to="/landing-page" />
              ) : (
                <ProtectedRoute userRole={localStorage.getItem("userRole")} />
              )
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to={`/${userRole}`} /> : <Login />
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/landing-page"
            element={
              isAuthenticated ? (
                <Navigate to={`/${userRole}`} />
              ) : (
                <Landing_ofi />
              )
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute
                isAllowed={
                  !!localStorage.getItem("isAuthenticated") &&
                  localStorage.getItem("userRole") === "admin"
                }
                redirectTo="/login"
              >
                <Fragment>
                  <Header handleLogout={handleLogout} />
                  <Sidenav />
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Semillero_Admin />
                          </main>
                        </Fragment>
                      }
                    />
                    <Route
                      path="/crear-proyecto"
                      element={
                        <main className="main-container">
                          <Crear_Proyecto />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-semillero"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Añadir_Semillero />
                          </main>
                        </Fragment>
                      }
                    />
                    <Route
                      path="/crear-actividad"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Crear_Actividad_Admin />
                          </main>
                        </Fragment>
                      }
                    />
                    <Route
                      path="/actualizar-semillero"
                      element={
                        <main className="main-container">
                          <Actualizar_Semillero />
                        </main>
                      }
                    />
                    <Route
                      path="/perfil"
                      element={
                        <main className="main-container">
                          <Perfil />
                        </main>
                      }
                    />
                    <Route
                      path="/cronograma"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Cronograma_Admin />
                          </main>
                        </Fragment>
                      }
                    />
                    <Route
                      path="/usuarios-getAll"
                      element={
                        <main className="main-container">
                          <Listar_Usuarios_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/crear-usuario"
                      element={
                        <main className="main-container">
                          <Crear_Usuario_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/usuario"
                      element={
                        <main className="main-container">
                          <Visualizar_Usuario_Admin />
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
                      path="/visualizar-programa-formacion"
                      element={
                        <main className="main-container">
                          <Visualizar_Programa_Formacion_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/crear-programa-formacion"
                      element={
                        <main className="main-container">
                          <Crear_Programa_Formacion_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-actividad"
                      element={
                        <main className="main-container">
                          <Visualizar_Actividad_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/listar-eventos"
                      element={
                        <main className="main-container">
                          <Listar_Eventos_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-evento"
                      element={
                        <main className="main-container">
                          <Visualizar_Evento_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/crear-eventos"
                      element={
                        <main className="main-container">
                          <Crear_Eventos_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/actualizar-eventos"
                      element={
                        <main className="main-container">
                          <Actualizar_Eventos_Admin />
                        </main>
                      }
                    />

                    <Route
                      path="/listar-proyectos"
                      element={
                        <main className="main-container">
                          <Listar_Proyectos_Admin />
                        </main>
                      }
                    />
                    <Route
                      path="/visualizar-suspender-proyecto"
                      element={
                        <main className="main-container">
                          <Visualizar_Suspender_Proyecto_Admin />
                        </main>
                      }
                    />
                    <Route
                      path="/actualizar-proyectos"
                      element={
                        <main className="main-container">
                          <Actualizar_Proyectos_Admin />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-proyectos"
                      element={
                        <main className="main-container">
                          <Crear_Proyectos_Admin />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-actividad"
                      element={
                        <main className="main-container">
                          <Crear_Actividad_Admin />
                        </main>
                      }
                    />
                    <Route
                      path="/listar-actividad"
                      element={
                        <main className="main-container">
                          <Listar_Actividad_Admin />
                        </main>
                      }
                    />
                    <Route
                      path="/actualizar-actividad"
                      element={
                        <main className="main-container">
                          <Actualizar_Actividad_Admin />
                        </main>
                      }
                    />
                  </Routes>
                </Fragment>
              </ProtectedRoute>
            }
          />

          {/* Lider Semillero */}
          <Route
            path="/lider_semillero/*"
            element={
              <ProtectedRoute
                isAllowed={
                  !!localStorage.getItem("isAuthenticated") &&
                  localStorage.getItem("userRole") === "lider_semillero"
                }
                redirectTo="/login"
              >
                <Fragment>
                  <Header handleLogout={handleLogout} />
                  <Sidenav />
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Semillero />
                          </main>
                        </Fragment>
                      }
                    />
                    <Route
                      path="/perfil"
                      element={
                        <main className="main-container">
                          <Perfil />
                        </main>
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
                      path="/usuario"
                      element={
                        <main className="main-container">
                          <Visualizar_Usuario />
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
                      path="/visualizar-suspender-proyecto"
                      element={
                        <main className="main-container">
                          <Visualizar_Suspender_Proyecto />
                        </main>
                      }
                    />
                    <Route
                      path="/listar-proyectos"
                      element={
                        <main className="main-container">
                          <Listar_Proyectos />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-proyecto"
                      element={
                        <main className="main-container">
                          <Crear_Proyecto />
                        </main>
                      }
                    />
                    <Route
                      path="/actualizar-proyectos"
                      element={
                        <main className="main-container">
                          <Actualizar_Proyectos />
                        </main>
                      }
                    />
                    <Route
                      path="/listar-actividad"
                      element={
                        <main className="main-container">
                          <Listar_Actividad />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-actividad"
                      element={
                        <main className="main-container">
                          <Crear_Actividad />
                        </main>
                      }
                    />
                    <Route
                      path="/actualizar-actividad"
                      element={
                        <main className="main-container">
                          <Actualizar_Actividad />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-actividad"
                      element={
                        <main className="main-container">
                          <Visualizar_Actividad />
                        </main>
                      }
                    />

                    <Route
                      path="/crear-eventos"
                      element={
                        <main className="main-container">
                          <Crear_Eventos />
                        </main>
                      }
                    />

                    <Route
                      path="/listar-eventos"
                      element={
                        <main className="main-container">
                          <Listar_Eventos />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-evento"
                      element={
                        <main className="main-container">
                          <Visualizar_Evento />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-programa-formacion"
                      element={
                        <main className="main-container">
                          <Visualizar_Programa_Formacion />
                        </main>
                      }
                    />

                    <Route
                      path="/crear-programa-formacion"
                      element={
                        <main className="main-container">
                          <Crear_Programa_Formacion />
                        </main>
                      }
                    />

                    <Route
                      path="/actualizar-eventos"
                      element={
                        <main className="main-container">
                          <Actualizar_Eventos />
                        </main>
                      }
                    />

                    <Route
                      path="/listar-fichas"
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
              </ProtectedRoute>
            }
          />

          {/* instructor investigador */}
          <Route
            path="/instructor_investigador/*"
            element={
              <ProtectedRoute
                isAllowed={
                  !!localStorage.getItem("isAuthenticated") &&
                  localStorage.getItem("userRole") === "instructor_investigador"
                }
                redirectTo="/login"
              >
                <Fragment>
                  <Header handleLogout={handleLogout} />
                  <Sidenav />
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Semillero_ins_invg />
                          </main>
                        </Fragment>
                      }
                    />
                    <Route
                      path="/perfil"
                      element={
                        <main className="main-container">
                          <Perfil />
                        </main>
                      }
                    />
                    <Route
                      path="/visualizar-actividad"
                      element={
                        <main className="main-container">
                          <Visualizar_Actividad_ins_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/crear-eventos"
                      element={
                        <main className="main-container">
                          <Crear_Eventos_ins_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/listar-eventos"
                      element={
                        <main className="main-container">
                          <ListarEvento_ins_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-evento"
                      element={
                        <main className="main-container">
                          <Visualizar_Evento_ins_invg />
                        </main>
                      }
                    />
                    <Route
                      path="/visualizar-programa-formacion"
                      element={
                        <main className="main-container">
                          <Visualizar_Programa_Formacion_ins_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/crear-programa-formacion"
                      element={
                        <main className="main-container">
                          <Crear_Programa_Formacion_ins_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/actualizar-eventos"
                      element={
                        <main className="main-container">
                          <Actualizar_Eventos_ins_invg />
                        </main>
                      }
                    />
                    <Route
                      path="/listar-proyectos"
                      element={
                        <main className="main-container">
                          <Listar_Proyectos_Instructor_Investigador />
                        </main>
                      }
                    />
                    <Route
                      path="/visualizar-suspender-proyecto"
                      element={
                        <main className="main-container">
                          <Visualizar_Suspender_Proyecto_Instructor_Investigador />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-proyecto"
                      element={
                        <main className="main-container">
                          <Crear_Proyecto_Instructor_Investigador />
                        </main>
                      }
                    />
                    <Route
                      path="/listar-actividad"
                      element={
                        <main className="main-container">
                          <Listar_Actividad_Instructor_Investigador />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-actividad"
                      element={
                        <main className="main-container">
                          <Crear_Actividad_Instructor_Investigador />
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
                      path="/usuario"
                      element={
                        <main className="main-container">
                          <Visualizar_Usuario_ins_invg />
                        </main>
                      }
                    />
                  </Routes>
                </Fragment>
              </ProtectedRoute>
            }
          />

          {/* Aprendiz Investigador */}
          <Route
            path="/aprendiz_investigador/*"
            element={
              <ProtectedRoute
                isAllowed={
                  !!localStorage.getItem("isAuthenticated") &&
                  localStorage.getItem("userRole") === "aprendiz_investigador"
                }
                redirectTo="/login"
              >
                <Fragment>
                  <Header handleLogout={handleLogout} />
                  <Sidenav />
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Semillero_apr_invg />
                          </main>
                        </Fragment>
                      }
                    />
                    <Route
                      path="/perfil"
                      element={
                        <main className="main-container">
                          <Perfil />
                        </main>
                      }
                    />
                    <Route
                      path="/visualizar-proyecto"
                      element={
                        <main className="main-container">
                          <Visualizar_Proyecto_apr_invg />
                        </main>
                      }
                    />
                    <Route
                      path="/listar-proyectos"
                      element={
                        <main className="main-container">
                          <Listar_Proyectos_apr_invg />
                        </main>
                      }
                    />
                    <Route
                      path="/cronograma"
                      element={
                        <Fragment>
                          <main className="main-container">
                            <Cronograma_apr_invg />
                          </main>
                        </Fragment>
                      }
                    />

                    <Route
                      path="/usuarios-getAll"
                      element={
                        <main className="main-container">
                          <Listar_Usuarios_apr_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/listar-eventos"
                      element={
                        <main className="main-container">
                          <Listar_Eventos_apr_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-actividad"
                      element={
                        <main className="main-container">
                          <Visualizar_Actividad_apr_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-evento"
                      element={
                        <main className="main-container">
                          <Visualizar_Evento_apr_invg />
                        </main>
                      }
                    />

                    <Route
                      path="/visualizar-programa-formacion"
                      element={
                        <main className="main-container">
                          <Visualizar_Programa_Formacion_apr_invg />
                        </main>
                      }
                    />
                    <Route
                      path="/crear-actividad"
                      element={
                        <main className="main-container">
                          <Crear_Actividad />
                        </main>
                      }
                    />
                    <Route
                      path="/listar-actividad"
                      element={
                        <main className="main-container">
                          <Listar_Actividad_apr_invg />
                        </main>
                      }
                    />
                  </Routes>
                </Fragment>
              </ProtectedRoute>
            }
          />

          {/* admin */}
          <Route
           path="/admin/*"
           element={
            <Fragment>
              <Header />
              <Sidenav />
              <Routes>
                <Route 
                 path="/listar-proyectos"
                 element={
                  <main className="main-container">
                    <Listar_Proyectos_Admin />
                  </main>
                 }
                />
                <Route
                 path="/visualizar-suspender-proyecto"
                 element={
                  <main className="main-container">
                    <Visualizar_Suspender_Proyecto_Admin />
                  </main>
                 }
                />
                <Route
                 path="/actualizar-proyectos"
                 element={
                  <main className="main-container">
                    <Actualizar_Proyectos_Admin />
                  </main>
                 }
                />
                <Route 
                 path="/crear-proyectos"
                 element={
                  <main className="main-container">
                    <Crear_Proyectos_Admin />
                  </main>
                 }
                />
                <Route 
                 path="/crear-actividad"
                 element={
                  <main className="main-container">
                    <Crear_Actividad_Admin />
                  </main>
                 }
                />
                <Route 
                 path="/listar-actividad"
                 element={
                  <main  className="main-container">
                    <Listar_Actividad_Admin />
                  </main>
                 }
                />
                <Route
                 path="/actualizar-actividad"
                 element={
                  <main className="main-container">
                    <Actualizar_Actividad_Admin />
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
