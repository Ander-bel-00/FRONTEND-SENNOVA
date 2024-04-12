import React from 'react';
import './css/Logueo.css';
import { FaUser } from "react-icons/fa";


function Logueo() {
  return (
    <div>
        <form>
            <label>Ingresa texto: <FaUser className='icon-user'/></label>
            <input type="text" />
        </form>
    </div>
  )
}

export default Logueo;