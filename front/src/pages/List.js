import React from 'react';

import Header from '../components/Header';
import './style.css';
import ItemList from './../components/ItemList/indexList';

export function List(){
  return (
    <div className="content">
      <Header />
      <div className="contentBody">
        <div className="list">
          <h3> Lista </h3>
          <ItemList />
        </div>
        <div className="details"></div>
      </div>
    </div>
  );
}