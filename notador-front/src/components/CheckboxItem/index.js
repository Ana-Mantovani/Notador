import React, { useState } from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './check.css';
import Details from './../Details/index';

function CheckboxItem(props){
  const [open, setOpen] = useState(false);

  var className = props.cName;
  var name = props.newName;

  if (className !== 'blue' || className !== 'yellow' || className !== 'red' ) {
    className = 'white';
  }

  return (
    <div className={"inputsCheck-" + className}>
      <input type="checkbox" name={"item" + name} id="item" />
      <label htmlFor={"item" + name}>
        { props.itemName }
      </label>

      <button className="iconInfo" onClick={ ()=> setOpen(!open) }>
        <Icon icon={solid('circle-info')} size="1x" />
      </button>
      {open ? (
        <Details onClose={ ()=> setOpen(!open) } />
      ): null}
    </div>
  );
}

export default CheckboxItem;