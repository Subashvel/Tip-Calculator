import { useState } from "react";
import "./ButtonList.css";

function ButtonsList(props) {
  const [activeCustom, setActiveCustom] = useState(false);

  //Listen selected btn percentage
  const btnHandler = (valueClicked) => {
    props.savePercentage(valueClicked / 100);
  };

  //Show custom btn element
  const customHandler = () => {
    switch (activeCustom) {
      case true:
        setActiveCustom(false);
        break;
      case false:
        setActiveCustom(true);
        break;
      default:
    }
  };

  //Use the percentage from custom btn
  const createPercentage = (e) => {
    const value = e.target.value;
    btnHandler(+value);
  };  
  
  return (
    <div>
      <ul className="btn-list">
        <li>
          <button
            className="percentage-btn"
            onClick={() => {
              btnHandler(5);
            }}
          >
            5%
          </button>
        </li>
        <li>
          <button
            className="percentage-btn"
            onClick={() => {
              btnHandler(10);
            }}
          >
            10%
          </button>
        </li>
        <li>
          <button
            className="percentage-btn"
            onClick={() => {
              btnHandler(15);
            }}
          >
            15%
          </button>
        </li>
        <li>
          <button
            className="percentage-btn"
            onClick={() => {
              btnHandler(25);
            }}
          >
            25%
          </button>
        </li>
        <li>
          <button
            className="percentage-btn"
            onClick={() => {
              btnHandler(50);
            }}
          >
            50%
          </button>
        </li>
        <li>
          {!activeCustom &&  (
            <button className="percentage-btn" onClick={customHandler}>
              Custom
            </button>
          )}
          {activeCustom && (
            <input
              className="percentage-btn activeInput"
              type="text"
              maxLength="3"
              onChange={createPercentage}
            />
          )}
        </li>
      </ul>
    </div>
  );
}

export default ButtonsList;
