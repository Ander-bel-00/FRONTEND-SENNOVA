import { Link } from "react-router-dom";
import "./css/Botonyear.css";

const Botonyear = ({ text, link, icon }) => {
  return (
    <Link to={link} className="boton-year" >
      {icon}
      {text}
    </Link>
  );
};

export default Botonyear;
