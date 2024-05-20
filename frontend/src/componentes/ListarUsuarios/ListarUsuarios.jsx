import React, { Fragment } from "react";
import "./css/ListarUsuarios.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import BotonBlanco from "../common/BotonReporte";
import Search from "../common/Search";
import BotonVerdeAñadir from "../common/BotonVerde";
import Header_ToolBar from "../common/Header_ToolBar";
import Caja_Blanca from "../common/Caja_Blanca";
function ListarUsuarios() {
  const users = [
    {
      nombres: "Juan",
      apellidos: "Perez",
      numeroDocumento: "123456789",
      rol: "Admin",
    },
    {
      nombres: "María",
      apellidos: "Gómez",
      numeroDocumento: "987654321",
      rol: "Usuario",
    },
  ];
  return (
    <Fragment>
      <div className="main-container__contenedor-hijo main-container__contenedor-hijo--color">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'} />
              <Search text={"Buscar usuarios"} />
              <BotonVerdeAñadir
                icon={<IoPersonAddSharp />}
                text={"Crear Usuario"}
                link={"/lider-semillero/crear-usuario"}
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
                {users.map((user, index) => (
                  <tr key={index} className="user-table__row">
                    <td className="user-table__cell">{user.nombres}</td>
                    <td className="user-table__cell">{user.apellidos}</td>
                    <td className="user-table__cell">{user.numeroDocumento}</td>
                    <td className="user-table__cell">{user.rol}</td>
                    <td className="user-table__cell">
                      <div className="user-table__cell__buttons">
                      <Link
                          to={"/lider-semillero/users-update"}
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
