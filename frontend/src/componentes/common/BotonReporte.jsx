import './css/BotonBlanco.css'

import { Link } from 'react-router-dom';
const BotonBlanco = ({ icon, text, link, clase, onClick }) => {
    return (
        <Link className={clase} to={link} onClick={onClick}>
            {icon}
            {text}
        </Link>
    )
}
export default BotonBlanco;
