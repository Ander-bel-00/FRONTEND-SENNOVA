import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_Usuarios_ins_invg.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { useAuth } from "../../../../context/AuthContext";
import clienteAxios from "../../../../config/axios";
import * as XLSX from "xlsx";

function Listar_Usuarios_ins_invg() {
  const { userProfile } = useAuth();

    const SemilleroID = userProfile ? userProfile.semillero : null;
  
    const [getUsuarios, setGetUsuarios] = useState([]);
    const [filtrarUsuarios, setFiltrarUsuarios] = useState([]);
  
    useEffect(() => {
      // Definición de una función asincrónica para obtener los usuarios del semillero
      const ObtenerusuariosSemillero = async () => {
        try {
            // Realiza una solicitud GET a la API para obtener los usuarios del semillero
            const res = await clienteAxios.get(`/usuarios/`);
            // Actualiza el estado de los usuarios con los datos obtenidos de la solicitud
            setGetUsuarios(res.data);
            setFiltrarUsuarios(res.data);
          
        } catch (error) {
          // Manejo de errores: si ocurre algún error en la solicitud, se muestra en la consola
          console.error('Error al obtener los usuarios del Semillero:', error);
        }
      }
    
      // Llama a la función ObtenerusuariosSemillero una vez que el componente se monta o cuando SemilleroID cambia
      ObtenerusuariosSemillero();
    }, []); // Dependencia que indica cuándo debe ejecutarse el efecto nuevamente

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      ["Nombres", "Apellidos", "Número documento", "Rol"],
      ...users.map((user) => [
        user.name,
        user.last_names,
        user.documento,
        user.rol,
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
    ];

    // Genera el archivo Excel
    XLSX.utils.book_append_sheet(wb, ws, "Usuarios");
    XLSX.writeFile(wb, "usuarios.xlsx");
  };

  const handleFilter = (query) => {
    const filtered = getUsuarios.filter(
      (event) =>
        event.name.toLowerCase().includes(query.toLowerCase()) ||
        event.documento.toLowerCase().includes(query.toLowerCase()) ||
        event.rol.toLowerCase().includes(query.toLowerCase())
    );
    setFiltrarUsuarios(filtered);
  };

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--color">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco
                icon={<FaFileArrowUp />}
                text={"Reporte"}
                clase={"btn-blanco btn-blanco--modify btn-verde"}
                onClick={exportToExcel}
              />

              <Search 
              text={"Buscar usuarios"} 
              onFilter={handleFilter}
              data={getUsuarios}
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
                  <th className="user-table__header">Rol</th>
                  <th className="user-table__header">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtrarUsuarios.map((user, index) => (
                  <tr key={index} className="user-table__row">
                    <td className="user-table__cell">{user.name}</td>
                    <td className="user-table__cell">{user.last_names}</td>
                    <td className="user-table__cell">{user.documento}</td>
                    <td className="user-table__cell">{user.rol}</td>
                    <td className="user-table__cell">
                      <div className="user-table__cell__buttons">
                        <Link to={"../usuario"}>
                          <LiaEyeSolid className="user-table__cell__btn" />
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
  );
}

export default Listar_Usuarios_ins_invg;
