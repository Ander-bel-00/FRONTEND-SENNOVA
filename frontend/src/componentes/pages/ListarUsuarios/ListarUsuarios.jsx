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

function ListarUsuarios() {
  const [users, setUsers] = useState([]);

  // Función para simular la obtención de usuarios de la base de datos
  const fetchUsers = () => {
    // Aquí puedes simular la obtención de usuarios de una base de datos
    const simulatedUsers = [
      {
        id: 1,
        nombres: "Juan",
        apellidos: "Perez",
        tipoDocumento: "Cédula",
        numeroDocumento: "123456789",
        rol: "Admin",
      },
      {
        id: 2,
        nombres: "María",
        apellidos: "Gómez",
        tipoDocumento: "Pasaporte",
        numeroDocumento: "987654321",
        rol: "Usuario",
      },
    ];
    setUsers(simulatedUsers);
  };

  useEffect(() => {
    // Llamada a la función para obtener usuarios cuando el componente se monta
    fetchUsers();
  }, []);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [
      ["Nombres", "Apellidos", "Tipo documento", "Número documento", "Rol"],
      ...users.map((user) => [
        user.nombres,
        user.apellidos,
        user.tipoDocumento,
        user.numeroDocumento,
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
                  <th className="user-table__header">Tipo documento</th>
                  <th className="user-table__header">Número documento</th>
                  <th className="user-table__header">Rol</th>
                  <th className="user-table__header">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="user-table__row">
                    <td className="user-table__cell">{user.nombres}</td>
                    <td className="user-table__cell">{user.apellidos}</td>
                    <td className="user-table__cell">{user.tipoDocumento}</td>
                    <td className="user-table__cell">{user.numeroDocumento}</td>
                    <td className="user-table__cell">{user.rol}</td>
                    <td className="user-table__cell">
                      <div className="user-table__cell__buttons">
                        <Link
                          to={{
                            pathname: "../usuario",
                            state: { usuario: user },
                          }}
                        >
                          <LiaEyeSolid className="user-table__cell__btn" />
                        </Link>

                        <Link to={"/lider-semillero/users-update"}>
                          <FaRegEdit className="user-table__cell__btn" />
                        </Link>
                        <Link>
                          <IoTrashOutline className="user-table__cell__btn" />
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

export default ListarUsuarios;
