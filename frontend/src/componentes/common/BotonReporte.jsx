import './css/BotonBlanco.css'

import { Link } from 'react-router-dom';
const BotonBlanco = ({ icon, text, link, clase}) => {
    return (
        <Link className={clase} to={link}>
            {icon}
            {text}
        </Link>
    )
}
export default BotonBlanco;