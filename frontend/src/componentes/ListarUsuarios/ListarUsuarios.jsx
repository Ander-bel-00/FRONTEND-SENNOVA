import React, { Fragment } from "react";
import "./css/ListarUsuarios.css";
import { BiSolidReport } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function ListarUsuarios() {
  return (
    <Fragment>
      <div className="Listar-usuarios-options">
          <div className="Listar-usuarios-options__report-box">
            <BiSolidReport className="inline-block Listar-usuarios-options__report-box__icon-report" />
            <p className="Listar-usuarios-options__report-box__report-text">
              Reporte
            </p>
          </div>
        <div className="Listar-usuarios-options__search-box">
          <IoIosSearch className="inline-block"/>
          <input type="search" placeholder="Buscar usuarios" />
        </div>
        <div></div>
      </div>
      <div className="Listar-usuarios-content">
        <table className="Listar-usuarios-content__table">
          <thead className="Listar-usuarios-content__table_thead">
            <tr className="Listar-usuarios-content__table__tr">
              <th className="Listar-usuarios-content__table__tr__th">
                Nombres
              </th>
              <th className="Listar-usuarios-content__table__tr__th">
                Apellidos
              </th>
              <th className="Listar-usuarios-content__table__tr__th">
                Tipo documento
              </th>
              <th className="Listar-usuarios-content__table__tr__th">
                Número documento
              </th>
              <th className="Listar-usuarios-content__table__tr__th">Rol</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr className="Listar-usuarios-content__table__tr">
                <td className="Listar-usuarios-content__table__tr__td"></td>
                <td className="Listar-usuarios-content__table__tr__td"></td>
                <td className="Listar-usuarios-content__table__tr__td"></td>
                <td className="Listar-usuarios-content__table__tr__td"></td>
                <td className="Listar-usuarios-content__table__tr__td"></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default ListarUsuarios;
