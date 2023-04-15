import ButtonsList from "./ButtonsList";
import "./InputsCard.css";

function InputCards(props) {
  //Bill handler
  const billHandler = (e) => {
    props.saveBillInfo(e.target.value);
  };

  //Number person handler
  const personHandler = (e) => {
   props.saveNumberPerson(e.target.value);
  };

  return (
    <div className="inputs-card">
      <div>
        <label for="bill">Bill</label> 
        <input
          type="text"
          id="bill"
          maxLength="10"
          value={props.billValue}
          onChange={billHandler}
        />
      </div>
      <ButtonsList savePercentage={props.savePercentage} ></ButtonsList>
      <div>
        <label for="number-people">Number of people</label>
        <input
          type="text"
          id="number-people"
          maxLength="6"
          value={props.peopleValue}
          onChange={personHandler}
        />
      </div>
    </div>
  );
}

export default InputCards;
