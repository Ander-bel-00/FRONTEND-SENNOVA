import React, { Fragment } from "react";
import "./css/Listar_Fichas_ins_invg.css";
import Header_ToolBar from "../../../common/Header_ToolBar";
import Caja_Blanca from "../../../common/Caja_Blanca";
import { Link } from "react-router-dom";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { FaFileArrowUp } from "react-icons/fa6";
import { IoIosReturnLeft } from "react-icons/io";
import Search from "../../../common/Search";
import BotonBlanco from "../../../common/BotonReporte";
import BotonReturn from "../../../common/BotonReturn";

function Listar_Fichas_ins_invg() {
  const Fichas = [
    {
      numero_ficha: 2653755,
      inicio_lectiva: "2022-08-12",
      fin_lectiva: "2024-12-31",
    },
    {
      numero_ficha: 2834567,
      inicio_lectiva: "2022-08-12",
      fin_lectiva: "2024-12-31",
    },
    {
      numero_ficha: 2345890,
      inicio_lectiva: "2022-08-12",
      fin_lectiva: "2024-12-31",
    },
  ];
  return (
    <div className="main-container__contenedor-hijo">
      <Header_ToolBar
        Header_Tools={
          <Fragment>
            <div className="list-fichas-btn-return">
              <BotonReturn
                link={"/lider-semillero/Listar_Proyectos"}
                icon={<IoIosReturnLeft />}
              />
            </div>
            <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} clase={'btn-blanco btn-blanco--modify btn-verde'}/>
            <Search text={"Buscar proyecto"} />
          </Fragment>
        }
      />
      <Caja_Blanca
        content={
          <table className="list-fichas-table">
            <thead>
              <tr className="list-fichas-table__tr">
                <th className="list-fichas-table__th">Número Ficha</th>
                <th className="list-fichas-table__th">Inicio Etapa Lectiva</th>
                <th className="list-fichas-table__th">Fin Etapa Lectiva</th>
                <th className="list-fichas-table__th">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Fichas.map((Ficha, index) => (
                <tr className="list-fichas-table__tr">
                  <td className="list-fichas-table__td">
                    {Ficha.numero_ficha}
                  </td>
                  <td className="list-fichas-table__td">
                    {Ficha.inicio_lectiva}
                  </td>
                  <td className="list-fichas-table__td">{Ficha.fin_lectiva}</td>
                  <td className="list-fichas-table__td">
                    <div className="list-fichas-table__td__btns">
                      <Link to={"/lider-semillero/Visualizar-ficha"}>
                        <LiaEyeSolid className="list-fichas-table__td__btn" />
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

export default Listar_Fichas_ins_invg;
