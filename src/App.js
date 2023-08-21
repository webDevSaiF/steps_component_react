import { useState } from "react";
import "./styles.css";

export default function App() {
  const styles = {
    buttonStyle: {
      backgroundColor: "#7950f2",
      color: "#fff"
    }
  };
  const messages = [
    "Learn JS 🤑",
    "Practice JS 🤑",
    "Master JS 🤑",
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your income 🤑"
  ];

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const prevHandler = () => (step > 1 ? setStep((s) => s - 1) : null);
  const nextHandler = () =>
    step < messages.length ? setStep((s) => s + 1) : null;
  const closeStepMenu = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div>
      <button onClick={closeStepMenu} className="close">
        Toggle Button
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((msg, i) => (
              <div className={`${step >= i + 1 ? "active" : ""}`}>{i + 1}</div>
            ))}
          </div>
          <p className="message">{`Step ${step}: ${messages[step - 1]}`}</p>
          <div className="buttons">
            <button onClick={prevHandler} style={styles.buttonStyle}>
              Previous
            </button>
            <button onClick={nextHandler} style={styles.buttonStyle}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
