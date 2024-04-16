import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Visualizar_Actividad from './componentes/visualizar_actividad/Visualizar_Actividad';
import Listar_Eventos from './componentes/listar_eventos/Listar_Eventos';
import Visualizar_Evento from './componentes/visualizar_evento/Visualizar_Evento';
import Visualizar_Programa_Formacion from './componentes/visualizar_programa_formacion/Visualizar_Programa_Formacion';
import Crear_Programa_Formacion from './componentes/crear_programa_formacion/Crear_Programa_Formacion';
import Crear_Eventos from './componentes/crear_eventos/Crear_Eventos';
import { Fragment } from 'react';
import Header from './componentes/layouts/Header/Header';
import Sidenav from './componentes/layouts/Sidenav/Sidenav';


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
                    <Visualizar_Actividad />
                  }
                />

                <Route 
                  path='/Listar-eventos'
                  element={
                    <Listar_Eventos />
                  }
                />

                <Route 
                  path='/Visualizar-evento'
                  element={
                    <Visualizar_Evento/>
                  }
                
                />
                <Route 
                  path='/Visualizar-programa-formacion'
                  element={
                    <Visualizar_Programa_Formacion/>
                  }
                
                />
                <Route 
                  path='/Crear-programa-formacion'
                  element={
                    <Crear_Programa_Formacion/>
                  }
                />

                <Route 
                  path='/Crear-eventos'
                  element={
                    <Crear_Eventos/>
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