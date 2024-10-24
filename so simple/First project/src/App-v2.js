import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "welcome mother fucker ",
  "try my app",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [IsOpen, setIsOpen] = useState(true);
  console.log(step);
  function noMoreBack() {
    if (step > 1) setStep((s) => s - 1);
    else alert("NO MORE");
  }
  function noMoreNext() {
    if (step < 5) setStep((s) => s + 1);
    else alert("NO MORE");
  }
  // function noMore() {

  //   if (step < 5) {
  //     setStep(step - 1);
  //   } else if (step > 1) {
  //     setStep(step + 1);
  //   } else {
  //     alert("NO MORE");
  //   }
  // }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!IsOpen)}>
        &times;
      </button>
      {IsOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step >= 5 ? "active" : ""}>5</div>
          </div>
          <p className="message">
            STEP {step}
            <span>{messages[step - 1]}</span>
            <div className="buttons">
              <button
                bgColor="#886ce4"
                textColor="#333"
                onClick={() => alert(`learn how to ${messages[step - 1]}`)}
              >
                learn more
              </button>
            </div>
          </p>
          <div className="buttons">
            <button
              style={{ background: "blue", color: "#000000" }}
              onClick={noMoreBack}
            >
              back
            </button>
            <button
              style={{ background: "red", color: "#ffffff" }}
              onClick={noMoreNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
