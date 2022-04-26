import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './style.css';

function Header(){
  return (
    <div className="contentHeader">
      <ul className="menu">
        <li className="folder" onClick={ () => {} }>
          <Icon icon={solid('folder')} size="3x" />
        </li>
        <li className="plus" onClick={ () => {} }>
          <Icon icon={solid('square-plus')} size="3x" />
        </li>
      </ul>
    </div>
  );
}

export default Header;