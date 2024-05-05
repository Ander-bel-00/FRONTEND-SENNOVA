import React from 'react';
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

function Visualizar_Usuario_Admin() {
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
                    <th className="user-table__header">Número documento</th>
                    <th className="user-table__header">Correo</th>
                    <th className="user-table__header">Teléfono</th>
                    <th className="user-table__header">Rol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="user-table__row">
                    <td className="user-table__cell">Yesid</td>
                    <td className="user-table__cell">Molona</td>
                    <td className="user-table__cell">1059695065</td>
                    <td className="user-table__cell">yesid@gmail.com</td>
                    <td className="user-table__cell">3192819219</td>
                    <td className="user-table__cell">admin</td>
                  </tr>
                </tbody>
              </table>
            }
          />
        </div>
      );
}

export default Visualizar_Usuario_Admin;