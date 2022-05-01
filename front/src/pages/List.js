import React from 'react';

import Header from '../components/Header';
import './style.css';
import CheckboxItem from './../components/CheckboxItem/index';

export function List(){
  return (
    <div className="content">
      <Header />
      <div className="contentBody">
        <div className="list">
          <h3> Backlog </h3>
          <div className="itens">
            <CheckboxItem itemName="Teste de item" cName="red" />
            <CheckboxItem itemName="Teste de item 2" cName="yellow" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
          </div>
        </div>
      </div>
    </div>
  );
}