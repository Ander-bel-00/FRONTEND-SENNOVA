import './css/BotonBlanco.css'

import { Link } from 'react-router-dom';
const BotonBlanco = ({ icon, text, link}) => {
    return (
        <Link className='btn-blanco btn-blanco--modify' to={link}>
            {icon}
            {text}
        </Link>
    )
}
export default BotonBlanco;