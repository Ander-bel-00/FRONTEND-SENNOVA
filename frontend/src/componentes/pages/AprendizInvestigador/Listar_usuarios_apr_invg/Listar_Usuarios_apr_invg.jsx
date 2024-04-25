import React, { Fragment } from "react";
import "./css/Listar_Usuarios_apr_invg.css";
import { FaFileArrowUp } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";

function Listar_Usuarios_apr_invg() {
  const users = [
    {
      nombres: "Juan",
      apellidos: "Perez",
      tipoDocumento: "Cédula",
      numeroDocumento: "123456789",
      rol: "Admin",
    },
    {
      nombres: "María",
      apellidos: "Gómez",
      tipoDocumento: "Pasaporte",
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
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'}/>
              <Search text={"Buscar usuarios"} />
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
                        <Link to={"/lider-semillero/users-update"}>
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

export default Listar_Usuarios_apr_invg;
