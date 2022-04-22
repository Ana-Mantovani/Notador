import './style.css';

function CreateProject(){
  return (
    <div className="contentCreate">
      <div className="create">
        <div className="box">
          <div className="createTitle">
            Novo Projeto
          </div>

          <div className="projectName">
            <h3>Nome:</h3>
          </div>

          <div className="projectType">
            <h3>Tipo:</h3>
            Lista 
            Kanban
          </div>
              
          <div className="buttons">
            Botão1
            Botão2
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;