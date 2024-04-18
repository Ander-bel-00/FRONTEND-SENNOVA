import React from 'react';
import './css/Header_ToolBar.css';

function Header_ToolBar({Header_Tools}) {
  return (
    <div className='Header-Tool-Bar'>
        {Header_Tools}
    </div>
  )
}

export default Header_ToolBar;