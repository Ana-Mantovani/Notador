import React, { useState } from 'react';

import './style.css';

export function RedButton(){
  const [open, setOpen] = useState(true);

  function goBack(){
    window.history.back();
  }

  return (
    <div className="buttonContent redButton"  onClick={ ()=> setOpen(!open) } >
      Cancela
    </div>
  );
}