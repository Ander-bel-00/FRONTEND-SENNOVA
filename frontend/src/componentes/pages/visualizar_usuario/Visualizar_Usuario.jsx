import React from "react";
import "./css/Visualizar_Usuario.css";
import Header_ToolBar from "../../common/Header_ToolBar";
import BotonBlanco from "../../common/BotonReporte";
import { FaFileArrowUp } from "react-icons/fa6";
import Search from "../../common/Search";
import BotonVerdeAñadir from "../../common/BotonVerde";
import { IoPersonAddSharp, IoTrashOutline } from "react-icons/io5";
import Caja_Blanca from "../../common/Caja_Blanca";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import BotonReturn from "../../common/BotonReturn";
import { GiReturnArrow } from "react-icons/gi";

function Visualizar_Usuario() {

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
              </tr>
            </thead>
            <tbody>
              <tr className="user-table__row">
                <td className="user-table__cell">{usuario.nombres}</td>
                <td className="user-table__cell">{usuario.apellidos}</td>
                <td className="user-table__cell">{usuario.tipoDocumento}</td>
                <td className="user-table__cell">{usuario.numeroDocumento}</td>
                <td className="user-table__cell">{usuario.correo_SENA}</td>
                <td className="user-table__cell">{usuario.correo_personal}</td>
                <td className="user-table__cell">{usuario.telefono}</td>
                <td className="user-table__cell">{usuario.rol}</td>
              </tr>
            </tbody>
          </table>
        }
      />
    </div>
  );
}

export default Visualizar_Usuario;
