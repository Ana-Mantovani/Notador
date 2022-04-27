import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './style.css';

export function Loading(){
  return(
    <div className="contentLoading">
      <div className="contentIcon">
        <Icon className='icon' icon={solid('spinner')} size="10x" spin />
      </div>
    </div>
  );
}