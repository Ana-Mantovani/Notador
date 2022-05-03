import { GreenButton } from '../Buttons/GreenButton';
import { RedButton } from '../Buttons/RedButton';
import './projectT.css';

function CreateProject(){
  return (
    <div className="box">
      <form className="contentBox">
        <h1 className="createTitle"> Novo Projeto </h1>

        <div className="contentInputs">
          <fieldset className="projectName">
            <h3> Nome: </h3>
            <input type="text" name="projectName" id="projectName" />
          </fieldset>
            
          <fieldset className="projectType">
            <h3> Tipo: </h3>
            <input type="radio" name="radioType" className='radioType' id="list" value="list" checked/>
              <label htmlFor="list">Lista</label>

            <input type="radio" name="radioType" className='radioType' id="kanban" value="kanban" />
              <label htmlFor="kanban">Kanban</label>
          </fieldset>
        </div>

        <div className="buttons">
          <GreenButton />
          <RedButton />
        </div>
      </form>
    </div>
  );
}

export default CreateProject;