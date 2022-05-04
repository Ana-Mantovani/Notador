import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'

import './details.css';

const Details = ({ onClose = ()=> {} }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    priority: '',
    description: '',
  });

  function handleInputChangeName(event){
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleInputChangePriority(event){
    const { priority, value } = event.target;

    setFormData({ ...formData, [priority]: value });
  }

  function handleInputChangeDescription(event){
    const { description, value } = event.target;

    setFormData({ ...formData, [description]: value });
  }

  function handleDelete(event){
    event.preventDefault();

    const { name, priority, description } = formData;

    const data = {
      name, 
      priority, 
      description
    };

    api.post('', data);   // falta caminho post
    
    navigate('/list');    //falta caminho que vai
  }

  async function handleSubmit(event){
    event.preventDefault();

    const { name, priority, description } = formData;

    const data = {
      name, 
      priority, 
      description
    };

    await api.post('', data);   // falta caminho post
    
    navigate('/list');    //falta caminho que vai
  };

  return (
    <div className="boxDetails">
      <form onSubmit={handleSubmit} className="contentBox">
        <h1>Atualizar Tarefa</h1>

        <fieldset className="fieldsetClass">
          <div className="divName">
            <h3>Nome:</h3>
            <input type="text" name="name" id="name" onChange={handleInputChangeName} />
          </div>

          <div className="divPriority">
            <h3>Prioridade:</h3>
            <div className="priorityList">
              <input 
                type="radio" 
                name="priority" 
                id="highPriority" 
                value="highPriority" 
                onChange={handleInputChangePriority} 
              />
              <label htmlFor="highPriority">Prioridade Alta</label>
              
              <input 
                type="radio" 
                name="priority" 
                id="mediumPriority" 
                value="mediumPriority" 
                onChange={handleInputChangePriority} 
              />
              <label htmlFor="mediumPriority">Prioridade Média</label>
              
              <input 
                type="radio" 
                name="priority" 
                id="lowPriority" 
                value="lowPriority" 
                onChange={handleInputChangePriority} 
              />
              <label htmlFor="lowPriority">Prioridade Baixa</label>
              
              <input 
                type="radio" 
                name="priority" 
                id="noPriority" 
                value="noPriority" 
                onChange={handleInputChangePriority} 
              />
              <label htmlFor="noPriority">Sem Prioridade</label>
            </div>
          </div>

          <div className="divDescription">
            <h3>Descrição:</h3>
              <input type="text" name="description" id="description" onChange={handleInputChangeDescription} />
          </div>
        </fieldset>

        <fieldset className="fieldsetButton">
          <button type="submit" className='buttonContent yellowButton'>
            Atualizar
          </button>

          <button className='buttonContent redButton' onClick={ onClose }>
            Cancela
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Details;