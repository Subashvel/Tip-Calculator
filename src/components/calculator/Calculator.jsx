import { useState } from "react";
import InputCards from "./inputCard/InputsCard";
import ResultsCard from "./resultCard/ResultsCard";

const Calculator = () => {
  //Data from input forms
  const [bill, setBill] = useState(0);
  const [numberPerson, setNumberPerson] = useState(1);

  const addedBill = (addedInfo) => {
    setBill(+addedInfo);
  };

  const addedPersons = (addedNumberPersons) => {
    setNumberPerson(+addedNumberPersons);
  };

  //Data from buttons percentage
  const [percentage, setPercentage] = useState(0);

  const addedPercentage = (numberButton) => {
    setPercentage(+numberButton);
  };

  //Reset states in all the components
  const resetBtn=()=>{
    setBill(0)
    setNumberPerson(1)
    setPercentage(0)
  }

  return (
    <div className="calculator">
      <InputCards
        saveBillInfo={addedBill}
        saveNumberPerson={addedPersons}
        savePercentage={addedPercentage}
        peopleValue={numberPerson}
        billValue={bill}
      ></InputCards>
      <ResultsCard
        userBill={bill}
        totalPercentage={percentage}
        numberPersons={numberPerson}
        reset={resetBtn}
      ></ResultsCard>
    </div>
  );
};

export default Calculator;
