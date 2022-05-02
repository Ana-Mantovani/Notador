import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './style.css';
import CreateProject from '../Project/index';

function Header(){
  const [openPlus, setOpenPlus] = useState(false);

  return (
    <Navbar>
      <NavItem icon={ <Icon icon={solid('folder')} size="3x" /> }>
        <DropdownMenu />
      </NavItem>
      
        
        <button className="iconButton" onClick={ ()=> setOpenPlus(!openPlus) }>
          <Icon icon={solid('square-plus')} size="4x" />
        </button>
        {openPlus ? (
          <CreateProject onClose={ ()=> setOpenPlus(!openPlus) } />
        ): null}
      
    </Navbar>
 );
}

function Navbar(props){
  return( 
    <nav className="contentHeader">
      <ul className="menu">
        {props.children} 
      </ul>
    </nav>
  );
}

function NavItem(props){
  const [open, setOpen] = useState(false);

  return( 
    <nav className="nav-item">
      <a href="#" className="iconButton" onClick={ ()=> setOpen(!open) }>
        {props.icon} 
      </a>

      {open && props.children}
    </nav>
  );
}

function DropdownMenu(){
  const navigate = useNavigate();
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
        href="#"
        className="menuItem" 
        onClick={ ()=> props.goToMenu && setActiveMenu(props.goToMenu) }
      >
        {props.children} 
      </a>
    );
  }

  function goToList(){
    navigate("/list");
  }

  function goToKanban(){
    navigate("/kanban");
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
        <div className="menuDrop">
          <DropdownItem > Novo Projeto </DropdownItem>
          <a onClick={goToList} className="menuItem" >Lista</a>
          <a onClick={goToKanban} className="menuItem" >Kanban</a>
        </div>
      </CSSTransition>
    </div>
  );
} 

export default Header;


/*

      <NavItem icon={ <Icon icon={solid('square-plus')} size="3x" /> }>
        {openPlus ? (
          <CreateProject onClose={ ()=> setOpenPlus(!openPlus) } />
        ): null}
      </NavItem>

*/