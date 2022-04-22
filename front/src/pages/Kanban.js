import CreateProject from '../components/CreateProject';
import Header from '../components/Header';
import './style.css';

export function Kanban(){
  return(
    <div className="content">
      <Header />
      <CreateProject />
    </div>
  );
}

