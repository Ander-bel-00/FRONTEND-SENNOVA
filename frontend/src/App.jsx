import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Visualizar_Actividad from './Componentes/visualizar_actividad/Visualizar_Actividad';
import Listar_Eventos from './Componentes/listar_eventos/Listar_Eventos';
import Visualizar_Evento from './Componentes/visualizar_evento/Visualizar_Evento';
import Visualizar_Programa_Formacion from './Componentes/visualizar_programa_formacion/Visualizar_Programa_Formacion';
import Crear_Programa_Formacion from './Componentes/crear_programa_formacion/Crear_Programa_Formacion';
import Crear_Eventos from './Componentes/crear_eventos/Crear_Eventos';
import Header from './Componentes/layouts/Header/Header';
import Sidenav from './Componentes/layouts/Sidenav/Sidenav';
import { Fragment } from 'react';
import Actualizar_Eventos from './Componentes/actualizar_eventos/Actualizar_Eventos';


function App () {
  return(
    <> 
      <BrowserRouter>
        <Routes>
          <Route 
            path='/lider-semillero/*'
            element={
              <Fragment>
                <Header />
                <Sidenav />
                <Routes>

                <Route 
                  path='/Visualizar-actividad'
                  element={
                    <main className='visualizar_actividad_containter'>
                      <Visualizar_Actividad />
                    </main>
                  }
                />

                <Route 
                  path='/Listar-eventos'
                  element={
                    <main className='listar_eventos_containter'>
                      <Listar_Eventos />
                    </main>
                  }
                />

                <Route 
                  path='/Visualizar-evento'
                  element={
                    <main className='visualziar_evento_container'>
                      <Visualizar_Evento/>
                    </main>
                  }
                
                />
                <Route 
                  path='/Visualizar-programa-formacion'
                  element={
                    <main className='visualizar_programa_formacion'>
                      <Visualizar_Programa_Formacion/>
                    </main>
                  }
                
                />
                <Route 
                  path='/Crear-programa-formacion'
                  element={
                    <main className='crear_programa_formacion_container'>
                      <Crear_Programa_Formacion/>
                    </main>
                  }
                />

                <Route 
                  path='/Actualizar-eventos'
                  element={
                    <main className='actualizar_eventos_container'>
                      <Actualizar_Eventos/>
                    </main>
                  }
                />

                <Route 
                  path='/Crear-eventos'
                  element={
                    <main className='crear_eventos_container'>
                      <Crear_Eventos/>
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
  )
}

export default App;