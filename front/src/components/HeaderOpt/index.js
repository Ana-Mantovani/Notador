import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './style.css';
import CreateProject from '../CreateProject/index';


function Header(){
  return (
    <div className="contentHeader">
      <ul className="menu">
        <li className="folder" onClick={ () => {} }>
          <Icon icon={solid('folder')} size="3x" />
        </li>
        <li className="plus" onClick={ <CreateProject /> } >
          <Icon icon={solid('square-plus')} size="3x" />
        </li>
      </ul>
    </div>
  );
}

export default Header;