import React, { Fragment } from 'react';
import "./css/Listar_Proyectos_apr_invg.css"
import Header_ToolBar from '../../../common/Header_ToolBar';
import { FaFileArrowUp } from "react-icons/fa6";
import BotonBlanco from '../../../common/BotonReporte';
import { LuCalendarDays } from "react-icons/lu";
import Search from "../../../common/Search";

function Listar_Proyectos_apr_invg() {
  return (
    <Fragment>
        <div className="main-container__contenedor-hijo">
        <Header_ToolBar
          Header_Tools={
            <Fragment>
              <BotonBlanco icon={<FaFileArrowUp />} text={"Reporte"} />
              <Search text={"Buscar proyecto"} />
              <BotonBlanco
                 icon={<LuCalendarDays />}
                 text={"Ir al Cronograma"}
                 link={"../cronograma-proyectos"}
              />
            </Fragment>
          }
        />

        </div>
    </Fragment>
  )
}

export default Listar_Proyectos_apr_invg;
