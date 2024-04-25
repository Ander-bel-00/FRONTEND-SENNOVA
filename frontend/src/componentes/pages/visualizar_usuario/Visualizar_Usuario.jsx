import React, { Fragment } from "react";
import "./css/Visualizar_Usuario.css";
import Header_ToolBar from "../../common/Header_ToolBar";
import BotonBlanco from "../../common/BotonReporte";
import { FaFileArrowUp } from "react-icons/fa6";
import Search from "../../common/Search";
import BotonVerdeAñadir from "../../common/BotonVerde";
import { IoPersonAddSharp, IoTrashOutline } from "react-icons/io5";
import Caja_Blanca from "../../common/Caja_Blanca";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import { GiReturnArrow } from "react-icons/gi";

function Visualizar_Usuario() {
  const usuario = [
    {
      nombres: "Juan",
      apellidos: "Perez",
      tipoDocumento: "Cédula",
      numeroDocumento: "123456789",
      correo_SENA: "JuanP@soy.sena.edu.co",
      correo_personal: "Juan00@gmail.com",
      telefono: 3234678945,
      rol: "Admin",
    },
  ];
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
                <th className="user-table__header">Correo SENA</th>
                <th className="user-table__header">Correo personal</th>
                <th className="user-table__header">Teléfono</th>
                <th className="user-table__header">Rol</th>
                <th className="user-table__header">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuario.map((user, index) => (
                <tr key={index} className="user-table__row">
                  <td className="user-table__cell">{user.nombres}</td>
                  <td className="user-table__cell">{user.apellidos}</td>
                  <td className="user-table__cell">{user.tipoDocumento}</td>
                  <td className="user-table__cell">{user.numeroDocumento}</td>
                  <td className="user-table__cell">{user.correo_SENA}</td>
                  <td className="user-table__cell">{user.correo_personal}</td>
                  <td className="user-table__cell">{user.telefono}</td>
                  <td className="user-table__cell">{user.rol}</td>
                  <td className="user-table__cell">
                    <div className="user-table__cell__buttons">
                      <Link to={"../usuario"}>
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
  );
}

export default Visualizar_Usuario;
