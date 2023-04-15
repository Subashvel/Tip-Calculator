
import "./ResultsCard.css";
function ResultsCard(props) {
  //Use and store data from input card
  let userData={
    prevBill:props.userBill,
    percentage: props.totalPercentage,
    totalPersons: props.numberPersons
  }  

  //Tip amount
  const globalTip=userData.prevBill*userData.percentage
  const eachPTip=(globalTip/userData.totalPersons).toFixed(2)

  //Total person
  const totalBill=userData.prevBill+globalTip
  const eachPBill=(totalBill/userData.totalPersons).toFixed(2)

  return (
    <div className="Results-card">
      <div className="results-container">
        <div className="result">
          <p>
            Tip amount<span className="each-person">/person</span>
          </p>
          <p className="result-value">$ {eachPTip}</p>
        </div>
        <div className="result">
          <p>
            Total <span className="each-person">/person</span>
          </p>
          <p className="result-value">$ {eachPBill}</p>
        </div>
      </div>
      <button className="reset-btn" onClick={props.reset}>Reset</button>
    </div>
  );
}

export default ResultsCard;
