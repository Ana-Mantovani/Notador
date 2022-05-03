import React, { useState } from "react";

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

import CheckboxItem from '../CheckboxItem/index';
import './item.css';
import CreateTask from '../Task/index';

function ItemList(){
  const [open, setOpen] = useState(false);

  return(
    <div className="itemList">
      <div className="itens">
        <CheckboxItem itemName="Teste de item 2" cName="yellow" newName={1} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={2} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={3} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={4} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={5} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={6} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={7} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={8} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={9} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={10} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={11} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={12} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={13} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={14} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={15} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={16} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={17} />
        <CheckboxItem itemName="Teste de item 3" cName="red" newName={18} />
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