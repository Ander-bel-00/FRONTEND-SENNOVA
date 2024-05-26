import React, { Fragment } from 'react';
import './css/Listar_Horas_Admin.css';
import Header_ToolBar from '../../../common/Header_ToolBar';
import BotonBlanco from '../../../common/BotonReporte';
import { FaFileArrowUp } from "react-icons/fa6";
import Search from '../../../common/Search';
import BotonVerdeAñadir from '../../../common/BotonVerde';
import { Ri24HoursLine } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu"; // Importa el ícono de la librería react-icons
import Botonyear from '../../../common/Botonyear';
import Botontrimestres from '../../../common/Botontrimestres'; // Importa el componente Botontrimestres
import { FaAngleRight } from 'react-icons/fa'; // Importa el ícono de la librería react-icons
import Caja_Blanca from '../../../common/Caja_Blanca';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';  // Importa componentes necesarios para el enrutamiento
import { LiaEyeSolid } from "react-icons/lia";
import * as XLSX from "xlsx";

function Listar_Horas_Admin() {
    const horasProyecto = [
        {
            item: "1",
            ano: "2024",
            nombre_proyecto: "Capacidad instalada",
            instructor_asignado: "Jorge raigosa",
        },
    ];

    const handleToggle = () => {
        setShowTrimestres(!showTrimestres);
    };

    const exportToExcel = () => {
        const wb = XLSX.utils.book_new();
        const wsData = [
          [
            "Item",
            "Año",
            "Nombre del Proyecto",
            "Instructores Asignados",
          ],
          ...horasProyecto.map((litsHoras) => [
            litsHoras.item,
            litsHoras.ano,
            litsHoras.nombre_proyecto,
            litsHoras.instructor_asignado,
          ]),
        ];
        const ws = XLSX.utils.aoa_to_sheet(wsData);
    
        // Agrega estilos de tabla a la hoja de cálculo
        ws["!cols"] = [
          { width: 30 },
          { width: 30 },
          { width: 30 },
          { width: 30 },
        ];
    
        // Genera el archivo Excel
        XLSX.utils.book_append_sheet(wb, ws, "Horas_Investigacion");
        XLSX.writeFile(wb, "horas_Investigacion.xlsx");
    };
  return (
    <Fragment>
        <div className="main-container__contenedor-hijo">
            <Header_ToolBar 
                Header_Tools={
                    <Fragment>
                        <BotonBlanco
                         icon={<FaFileArrowUp />}
                         text={"Reporte"}
                         clase={"btn-blanco btn-blanco--modify btn-verde"}
                         onClick={exportToExcel}
                        />

                        <Search text={"Buscar Proyecto"} />

                        <BotonVerdeAñadir
                         icon={<Ri24HoursLine />}
                         text={"Asignar Horas"}
                         link={"/admin/asignar-horas"}
                        />
                        
                        <Botonyear
                         icon={<LuCalendarDays />}
                         text={"Año"}
                        />

                        <Botontrimestres
                            text={"Trimestres"}
                            link="/trimestres"
                            icon={<FaAngleRight />}
                        />
                    </Fragment>
                }
            />

            {/* <BrowserRouter>  //Componente principal que envuelve toda la aplicación para habilitar la funcionalidad de enrutamiento. 
               Utiliza la API de History del navegador para mantener la interfaz de usuario sincronizada con la URL.
                <Routes>  //Contenedor que define todas las rutas de la aplicación. Dentro de este componente se 
                especifican todas las rutas posibles y los componentes que se renderizarán para cada una.
                    // Define una sola ruta. Cada <Route> tiene una `path` que coincide con la URL y un `element` que se renderiza cuando la URL coincide con la ruta especificada.
                    <Route path="/trimestres/I" element={<div>Contenido del Trimestre I</div>} />  //- path="/trimestres/I": Cuando la URL es "/trimestres/I", renderiza un <div> con el texto "Contenido del Trimestre I".
                    <Route path="/trimestres/II" element={<div>Contenido del Trimestre II</div>} />
                    <Route path="/trimestres/III" element={<div>Contenido del Trimestre III</div>} />
                    <Route path="/trimestres/IV" element={<div>Contenido del Trimestre IV</div>} />
                </Routes>
            </BrowserRouter> */}

            <Caja_Blanca
             content={
                <table className='list-horas-admin-table'>
                    <thead className='list-horas-admin-table__thead'>
                        <tr className='list-horas-admin-table__tr'>
                            <th className='list-horas-admin-table__th'>Item</th>
                            <th className='list-horas-admin-table__th'>Año</th>
                            <th className='list-horas-admin-table__th'>Nombre del Proyecto</th>
                            <th className='list-horas-admin-table__th'>Instructores Asignados</th>
                            <th className='list-horas-admin-table__th'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horasProyecto.map((litsHoras, index) => ( 
                            <tr key={index} className='list-horas-admin-table__tr'>
                                <td className='list-horas-admin-table__td'>
                                    {litsHoras.item}
                                </td>
                                <td className='list-horas-admin-table__td'>
                                    {litsHoras.ano}
                                </td>
                                <td className='list-horas-admin-table__td'>
                                    {litsHoras.nombre_proyecto}
                                </td>
                                <td className='list-horas-admin-table__td'>
                                    {litsHoras.instructor_asignado}
                                </td>
                                <td className='list-horas-admin-table__td'>
                                    <div className='list-horas-admin-table__td__btns'>
                                        <Link to={"../visualizar-horas"}>
                                            <LiaEyeSolid className='list-horas-admin-table__td__btn'/>
                                        </Link>
                                    </div>
                                </td>
                           </tr>
                        ))}
                    </tbody>
                </table>
             }
            />
        </div>
    </Fragment>
  )
}

export default Listar_Horas_Admin
