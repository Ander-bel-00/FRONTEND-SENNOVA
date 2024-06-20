import React, { useEffect } from 'react';
import Header_ToolBar from '../../../common/Header_ToolBar';
import BotonBlanco from '../../../common/BotonReporte';
import { FaFileArrowUp } from "react-icons/fa6";
import Search from '../../../common/Search';
import BotonVerdeAñadir from '../../../common/BotonVerde';
import { IoPersonAddSharp } from "react-icons/io5";
import Caja_Blanca from '../../../common/Caja_Blanca';
import BotonReturn from '../../../common/BotonReturn';
import { GiReturnArrow } from "react-icons/gi";
import { Fragment } from "react";
import * as XLSX from "xlsx";
import clienteAxios from '../../../../config/axios';

function Visualizar_Usuario_Admin() {
  const [Usuario, setUsuario] =  useState([]); 

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const res = await clienteAxios.get('/usuarios/');
        setUsuario(res.data);
      } catch (error) {
        console.log('Error al obtener todos los Usurios', error);
      }
    }
    obtenerUsuario();
  }, []);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      [
        "Código del Programa",
        "Versión del Programa",
        "Nombre del Programa",
        "Ficha",
        "Inicio Electiva",
        "Fin Electiva",
      ],
      ...Usuario.map((Visualizaruser) => [
        Visualizaruser.name,
        Visualizaruser.last_names,
        Visualizaruser.documento,
        Visualizaruser.email,
        Visualizaruser.telefono,
        Visualizaruser.rol,
      ]),
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Agrega estilos de tabla a la hoja de cálculo
    ws["!cols"] = [
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
      { width: 30 },
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Usuario");
    XLSX.writeFile(wb, "proyectos.xlsx");
  };

    return (
        <div className="main-container__contenedor-hijo main-container__contenedor-hijo--color">
          <Header_ToolBar
            Header_Tools={
              <Fragment>
                <div className="user-btn-return">
                  <BotonReturn icon={<GiReturnArrow />} />
                </div>
                <BotonBlanco
                  icon={<FaFileArrowUp />}
                  text={"Reporte"}
                  clase={"btn-blanco btn-blanco--modify btn-verde"}
                  onClick={exportToExcel}
                />
                <Search text={"Buscar usuarios"} />
                <BotonVerdeAñadir
                  icon={<IoPersonAddSharp />}
                  text={"Crear Usuario"}
                  link={"../crear-usuario"}
                />
              </Fragment>
            }
          />
          <Caja_Blanca
            content={
              <table className="user-table">
                <thead>
                  <tr>
                    <th className="user-table__header">Nombres</th>
                    <th className="user-table__header">Apellidos</th>
                    <th className="user-table__header">Número documento</th>
                    <th className="user-table__header">Correo</th>
                    <th className="user-table__header">Teléfono</th>
                    <th className="user-table__header">Rol</th>
                  </tr>
                </thead>
                <tbody>
                  {Usuario.map ((Visualizaruser, index) => (
                    <tr key={index} className="user-table__row">
                      <td className="user-table__cell">
                        {Visualizaruser.name}
                      </td>
                      <td className="user-table__cell">
                        {Visualizaruser.last_names}
                      </td>
                      <td className="user-table__cell">
                        {Visualizaruser.documento}
                      </td>
                      <td className="user-table__cell">
                        {Visualizaruser.email}
                      </td>
                      <td className="user-table__cell">
                      {Visualizaruser.telefono}
                      </td>
                      <td className="user-table__cell">
                        {Visualizaruser.rol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          />
        </div>
      );
}

export default Visualizar_Usuario_Admin;