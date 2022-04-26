import { GreenButton } from '../Buttons/GreenButton';
import { RedButton } from '../Buttons/RedButton';
import './style.css';

function CreateProject(){
  return (
    <div className="contentCreate">
      <div className="box">
        <div className="contentBox">
          <h1 className="createTitle"> Novo Projeto </h1>

          <div className="contentInputs">
            <div className="projectName">
              <h3> Nome: </h3>
              <input type="text" name="projectName" id="projectName" />
            </div>
              
            <div className="projectType">
              <h3> Tipo: </h3>
              <input type="radio" name="radioType" className='radioType' id="list" value="list" checked/>
                <label htmlFor="list">Lista</label>

              <input type="radio" name="radioType" className='radioType' id="kanban" value="kanban" />
                <label htmlFor="kanban">Kanban</label>
            </div>
          </div>

          <div className="buttons">
            <GreenButton />
            <RedButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;