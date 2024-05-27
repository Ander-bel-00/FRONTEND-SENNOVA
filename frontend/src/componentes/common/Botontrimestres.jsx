import React, { Fragment, useState } from "react";
import "./css/Botontrimestres.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Botontrimestres = ({ text, link, icon }) => {
  const [showTrimestres, setShowTrimestres] = useState(false);

  const handleToggle = () => {
    setShowTrimestres(!showTrimestres);
  };

  return (
    <Fragment>
      <div className="boton-trimestres-container">
        <div className="boton-trimestres" onClick={handleToggle}>
          {text}
          {icon}
        </div>
        {showTrimestres && (
          <div className="trimestres-container">
            <button className="trimestre">Trimestre I</button>
            <button className="trimestre">Trimestre II</button>
            <button className="trimestre">Trimestre III</button>
            <button className="trimestre">Trimestre IV</button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Botontrimestres;
