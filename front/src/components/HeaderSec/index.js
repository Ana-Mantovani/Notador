import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './style.css';
import CreateProject from '../CreateProject/index';


function Header(){
  return (
    <Navbar>
      <NavItem icon={ <Icon icon={solid('folder')} size="3x" /> }>
        <DropdownMenu />
      </NavItem>
      <NavItem icon={ <Icon icon={solid('square-plus')} size="3x" /> } />
    </Navbar>
 );
}

function Navbar(props){
  return( 
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children} 
      </ul>
    </nav>
  );
}

function NavItem(props){
  const [open, setOpen] = useState(false);

  return( 
    <nav className="nav-item">
      <a href="#" className="icon-button" onClick={ ()=> setOpen(!open) }>
        {props.icon} 
      </a>

      {open && props.children}
    </nav>
  );
}

function DropdownMenu(){
  const [activeMenu, setActiveMenu] = useState('main');        //settings, animals
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  });

  function calcHeight(element){
    const height = element.offsetHeight;

    setMenuHeight(height);
  }

  function DropdownItem(props){
    return(
      <a 
        className="menu-item" 
        onClick={ ()=> props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children} 
      </a>
    );
  }

  return( 
    <div className="dropdown" style={{ height: menuHeight }} ref={ dropdownRef }>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={ 500 } 
        classNames="menu-primary" 
        onEnter={ calcHeight }
      >
        <div className="menu">
          <DropdownItem > Novo Projeto </DropdownItem>
          <DropdownItem  > Kanban </DropdownItem>
          <DropdownItem goTo="list" > Lista </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
} 

export default Header;
