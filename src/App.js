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
    const handleKeyboardInput = (event) => {
      const key = event.key;

      if (key === "Enter") {
        calculate();
      } else if (key === "Backspace") {
        setExpression((prevExpression) => prevExpression.slice(0, -1));
      } else {
        setExpression((prevExpression) => prevExpression + key);
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
        <button onClick={() => handleButton("1")}>1</button>
        <button onClick={() => handleButton("2")}>2</button>
        <button onClick={() => handleButton("3")}>3</button>
        <button onClick={() => handleButton("+")}>+</button>
        <button onClick={() => handleButton("4")}>4</button>
        <button onClick={() => handleButton("5")}>5</button>
        <button onClick={() => handleButton("6")}>6</button>
        <button onClick={() => handleButton("-")}>-</button>
        <button onClick={() => handleButton("7")}>7</button>
        <button onClick={() => handleButton("8")}>8</button>
        <button onClick={() => handleButton("9")}>9</button>
        <button onClick={() => handleButton("*")}>*</button>
        <button onClick={() => handleButton("0")}>0</button>
        <button onClick={() => handleButton("/")}>/</button>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
