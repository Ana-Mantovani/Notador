import { GreenButton } from '../Buttons/GreenButton';
import { RedButton } from '../Buttons/RedButton';
import './createTask.css';

function CreateTask(){
  return (
    <div className="contentCreate">
      <div className="box">
        <div className="contentBox">
          <h1 className="createTitle"> Nova Tarefa </h1>

          <div className="contentInputs">
            <div className="projectName">
              <h3> Nome: </h3>
              <input type="text" name="projectName" id="projectName" />
            </div>
              
            <div className="projectType">
              <h3> Tipo: </h3>
              <input type="radio" name="radioType" className='radioType redPriority' id="red" value="red" checked/>
                <label htmlFor="list"> Alta Prioridade </label>

              <input type="radio" name="radioType" className='radioType yellowPriority' id="yellow" value="yellow" />
                <label htmlFor="kanban"> Média Prioridade </label>

              <input type="radio" name="radioType" className='radioType bluePriority' id="blue" value="blue" />
                <label htmlFor="kanban"> Baixa Prioridade </label>

              <input type="radio" name="radioType" className='radioType whitePriority' id="white" value="white" />
                <label htmlFor="kanban"> Sem Prioridade </label>
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

export default CreateTask;