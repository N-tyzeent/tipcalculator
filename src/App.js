import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [total, setTotal] = useState(0);

  const caculate = () => {
    let result = (bill * percentage) / 100;

    setTip(result);

    let temTotal = Number(bill) + result;

    setTotal(temTotal);
  };

  return (
    <div className="tip-calculator">
      <h1>
        <span className="tip">Tip</span> Caculator
      </h1>
      <div className="calculator">
        <label htmlFor="">Bill Amount:</label>
        <input
          onChange={(e) => {
            setBill(e.target.value);
          }}
          className="bill"
          type="text"
        />
        <label htmlFor="">Percentage:</label>
        <input
          onChange={(e) => {
            setPercentage(e.target.value);
          }}
          className="percentage"
          type="text"
        />
        <label htmlFor="">Tip Amount:</label>
        <input className="tip" value={`$${tip}`} type="text" />
        <label htmlFor="">Total:</label>
        <input className="total" value={`$${total}`} type="text" />
        <button
          onClick={() => {
            caculate();
          }}
          className="caculate"
        >
          Caculate
        </button>
      </div>
    </div>
  );
}

export default App;
