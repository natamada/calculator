import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const calculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const handleButton = (buttonValue) => {
    setExpression(expression + buttonValue);
  };

  const clear = () => {
    setExpression("");
  };

  useEffect(() => {
    const handleKeyboardInput = (e) => {
      const key = e.key;

      if (key === "Enter") {
        calculate();
      } else if (key === "Backspace") {
        setExpression((prev) => prev.slice(0, -1));
      } else {
        setExpression((prev) => prev + key);
      }
    };

    document.addEventListener("keydown", handleKeyboardInput);

    return () => {
      document.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [calculate]);

  return (
    <div className="calculator-container">
      <input type="text" className="input-field" value={expression} />

      <div className="keypad">
         {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, "/"].map((value) => (
          <button key={value} onClick={() => handleButton(value)}>
            {value}
          </button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
