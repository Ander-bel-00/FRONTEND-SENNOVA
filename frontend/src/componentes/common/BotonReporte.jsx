import './css/BotonBlanco.css'

import { Link } from 'react-router-dom';
const BotonBlanco = ({ icon, text }) => {
    return (
        <Link className='btn-blanco' >
            {icon}
            {text}
        </Link>
    )
}
export default BotonBlanco;