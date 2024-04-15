import Crear_Proyecto from "./componentes/crear_proyecto/Crear_Proyecto";
import Listar_Proyectos from "./componentes/listar_proyectos/Listar_Proyectos";
import Visualizar_Suspender_Proyecto from './componentes/visualizar_suspender_proyecto/Visualizar_Suspender_Proyecto';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route 
        path="/Visualizar_Suspender_Proyecto"
        element={
          <Visualizar_Suspender_Proyecto />
        }
       />
       <Route
       path="/Listar_Proyectos"
       element={
        <main>
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
    </BrowserRouter>
    </>
  )
}

export default App;