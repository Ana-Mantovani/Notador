import React from 'react';

import Header from '../components/Header';
import './style.css';

export function List(){
  return (
    <div className="content">
      <Header />
      <div className="contentBody">
        body
      </div>
    </div>
  );
}