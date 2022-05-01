import './style.css';

function CheckboxItem(props){
  var className = props.cName;

  if (className !== 'blue' || className !== 'yellow' || className !== 'red' ) {
    className = 'white';
  }

  return (
    <div className={"inputsCheck-" + className}>
      <input type="checkbox" name="item" id="item" />
      <label htmlFor="item">
        { props.itemName }
      </label>
    </div>
  );
}

export default CheckboxItem;