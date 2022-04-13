import { AiOutlineLoading3Quarters as Icon } from 'react-icons/ai';
import './style.css';

export function Loading(){
  return(
    <div className="loadingContainer">
      <Icon color='var(--Primary-color)' />
    </div>
  );
}