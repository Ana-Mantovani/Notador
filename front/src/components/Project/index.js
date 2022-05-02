import React, { useState } from 'react';
import api from '../../services/api'

import './style.css';


const CreateProject = ({ onClose = ()=> {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: ''
  });

  function handleInputChangeName(event){
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleInputChangeType(event){
    const { type, value } = event.target;

    setFormData({ ...formData, [type]: value });
  }

  async function handleSubmit(event){
    event.preventDefault();

    const { name, type } = formData;

    const data = {
      name, 
      type
    };

    await api.post('', data);   // falta caminho post
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit} className="contentBox">
        <h1>Novo Projeto</h1>
        <fieldset className="fieldset">
          <div className="divName">
            <h3 className="name"> Nome: </h3>
            <input type="text" name="name" id="name" onChange={handleInputChangeName} />
          </div>

          <div className="divType">
            <h3 className="type"> Tipo: </h3>
              <input 
                type="radio" 
                name="type" 
                id="" 
                value="kanbanType" 
                onChange={handleInputChangeType} 
                checked
              /> 
              <label htmlFor="kanbanType">Kanban</label>

              <input 
                type="radio" 
                name="type" 
                id="listType" 
                value="listType" 
                onChange={handleInputChangeType} 
              /> 
              <label htmlFor="listType">Lista</label>
          </div>
        </fieldset>

        <fieldset className="fieldsetButton">
          <button type="submit" className='buttonContent greenButton'>
            Confirma
          </button>

          <button className='buttonContent redButton' onClick={ onClose }>
            Cancela
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateProject;