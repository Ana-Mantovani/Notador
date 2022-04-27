import React from 'react';

import Header from '../components/Header';
import CreateTask from './../components/CreateTask';
import './style.css';

export function List(){
  return (
    <div className="content">
      <Header />
      <div className="contentBody">
        <CreateTask />
      </div>
    </div>
  );
}