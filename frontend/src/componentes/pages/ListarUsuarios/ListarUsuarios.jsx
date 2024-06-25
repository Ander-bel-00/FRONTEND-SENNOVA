import React, { Fragment, useState, useEffect } from "react";
import "./css/ListarUsuarios.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import BotonBlanco from "../../common/BotonReporte";
import Search from "../../common/Search";
import BotonVerdeAñadir from "../../common/BotonVerde";
import Header_ToolBar from "../../common/Header_ToolBar";
import Caja_Blanca from "../../common/Caja_Blanca";
import * as XLSX from "xlsx";
import { useAuth } from "../../../context/AuthContext";
import clienteAxios from "../../../config/axios";

function ListarUsuarios() {
  const { userProfile } = useAuth();

  const SemilleroID = userProfile ? userProfile.semillero : null;

  const [usuarios, setUsuarios] = useState([]);
  const [filtrarUsuarios, setFiltrarUsuarios] = useState([]);

  useEffect(() => {
    // Definición de una función asincrónica para obtener los usuarios del semillero
    const ObtenerusuariosSemillero = async () => {
      try {
        // Realiza una solicitud GET a la API para obtener los usuarios del semillero
        const res = await clienteAxios.get(`/usuarios/`);
        // Actualiza el estado de los usuarios con los datos obtenidos de la solicitud
        const usuarios = res.data
        setUsuarios(usuarios);
        setFiltrarUsuarios(usuarios)

      } catch (error) {
        // Manejo de errores: si ocurre algún error en la solicitud, se muestra en la consola
        console.error('Error al obtener los usuarios del Semillero:', error);
      }
    }

    // Llama a la función ObtenerusuariosSemillero una vez que el componente se monta o cuando SemilleroID cambia
    ObtenerusuariosSemillero();
  }, []); // Dependencia que indica cuándo debe ejecutarse el efecto nuevamente

  const handleFilter = (query) => {
    const filtered = usuarios.filter(
      (usuarios) =>
        usuarios.name.toLowerCase().includes(query.toLowerCase()) ||
        usuarios.documento.toLowerCase().includes(query.toLowerCase()) ||
        usuarios.rol.toLowerCase().includes(query.toLowerCase())
    );
    setFiltrarUsuarios(filtered);
  };


  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      ["Nombres", "Apellidos", "Número documento", "Rol"],
      ...usuarios.map((user) => [
        usuarios.name,
        usuarios.last_names,
        usuarios.documento,
        usuarios.rol,
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
                data={usuarios}
              />

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
                  <th className="user-table__header">Rol</th>
                  <th className="user-table__header">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtrarUsuarios.length > 0 ? (
                  filtrarUsuarios.map((usuarios, index) => (
                    <tr key={index} className="user-table__row">
                      <td className="user-table__cell">{usuarios.name}</td>
                      <td className="user-table__cell">{usuarios.last_names}</td>
                      <td className="user-table__cell">{usuarios.documento}</td>
                      <td className="user-table__cell">{usuarios.rol}</td>
                      <td className="user-table__cell">
                        <div className="user-table__cell__buttons">
                          <Link
                            to={'../usuario'}
                          >
                            <LiaEyeSolid className="user-table__cell__btn" />
                          </Link>

                          <Link to={"/lider_semillero/users-update"}>
                            <FaRegEdit className="user-table__cell__btn" />
                          </Link>
                          <Link>
                            <IoTrashOutline className="user-table__cell__btn" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10}>
                      <p className="text-center mt-20 font-bold">No se han encontrado usuarios</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          }
        />
      </div>
    </Fragment>
  );
}

export default ListarUsuarios;
