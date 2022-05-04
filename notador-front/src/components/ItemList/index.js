import React, { useState } from "react";

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

import CheckboxItem from '../CheckboxItem/index';
import './item.css';
import CreateTask from '../Task';

function ItemList(){
  const [open, setOpen] = useState(false);
  
  return(
    <div className="item">
      <div className="itens">
      </div>

      <button className="iconPlus" onClick={ ()=> setOpen(!open) }>
        <Icon icon={regular('square-plus')} size="4x" />
      </button>
      {open ? (
        <CreateTask onClose={ ()=> setOpen(!open) } />
      ): null}
    </div>
  );
}

export default ItemList;