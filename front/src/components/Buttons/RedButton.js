import React from 'react';

import './style.css';

export function RedButton(){
  function goBack(){
    window.history.back();
  }

  return (
    <div className="buttonContent redButton" onClick={ goBack } >
      Cancela
    </div>
  );
}