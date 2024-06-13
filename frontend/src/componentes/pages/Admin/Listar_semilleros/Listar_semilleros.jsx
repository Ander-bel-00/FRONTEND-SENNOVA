import React, { Fragment, useEffect, useState } from "react";
import "./css/Listar_semilleros.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import { FaFileArrowUp } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import BotonBlanco from "../../../common/BotonReporte";
import Search from "../../../common/Search";
import BotonVerdeAñadir from "../../../common/BotonVerde";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import clienteAxios from '../../../../config/axios';

function Listar_Semilleros_Admin() {
  const [semillero, setSemillero] = useState([]);

  useEffect(() => {
    const ObtenerSemilleros = async () => {
      try {
        const res = await clienteAxios.get('/lista-semilleros/');
        setSemillero(res.data);
      } catch (error) {
        console.error('Hubo un error al obtener los semilleros', error);
      }
    };
    ObtenerSemilleros();
  }, []);

  return (
    <Fragment>
      <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco
                icon={<FaFileArrowUp />}
                text={"Reporte"}
                clase={"btn-blanco btn-blanco--modify btn-verde"}
              />
              <Search text={"Buscar Semillero"} />
              <BotonVerdeAñadir
                icon={<AiOutlinePlus />}
                text={"Crear Semillero"}
                link={"/admin/crear-semillero"}
              />
            </Fragment>
          }
        />
        <Caja_Blanca
          content={
            <table className="list-semillero-admin-content-table">
              <thead>
                <tr className="list-semillero-admin-content-table-tr">
                  <th className="list-semillero-admin-content__table__tr__th">
                    Nombre Semillero
                  </th>
                  <th className="list-semillero-admin-content__table__tr__th">
                    Nombre Regional
                  </th>
                  <th className="list-semillero-admin-content__table__tr__th">
                    Estado
                  </th>
                  <th className="list-semillero-admin-content__table__tr__th">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {semillero.map( semillero => (
                  <tr key={ semillero.id } className="list-semillero-admin-content-table-tr">
                    <td className="list-semillero-admin-content-table-td">
                      { semillero.nombre_semillero }
                    </td>
                    <td className="list-semillero-admin-content-table-td">
                      { semillero.nombre_regional }
                    </td>
                    <td className="list-semillero-admin-content-table-td">
                      {semillero.estado_semillero}
                      <th>
                        <TbPointFilled className="puntico" />
                      </th>
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

export default Listar_Semilleros_Admin;
