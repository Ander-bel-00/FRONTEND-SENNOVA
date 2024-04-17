import { Fragment } from "react"
import './css/BotonVerde.css'
import { Link } from "react-router-dom"

const BotonVerdeAñadir = ({text, link, icon}) => {
    return (
        <Fragment>
            <Link to={link} className="boton-verde">
               {icon}
              {text}
            </Link>
        </Fragment>
    )
}
export default BotonVerdeAñadir;