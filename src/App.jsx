import { useState } from "react";
import "./App.css";

function App() {
  const [verify, setVerify] = useState(false);
  const [tem, setTem] = useState(false);
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [msg, setMsg] = useState("");

  function solve(e) {
    // console.log(e.target.dataset.op);
    setTem(true);
    if (isNaN(num1) || isNaN(num2)) {
      setMsg("Input Must Be Numbers");
      setVerify(false);
      return;
    }
    if (num1 == "") {
      setMsg("Num1 Cannot Be Empty");
      setVerify(false);
      return;
    }
    if (num2 == "") {
      setMsg("Num2 Cannot Be Empty");
      setVerify(false);
      return;
    }
    setVerify(true);
    let op = e.target.dataset.op;
    let ans = 0;
    if (op == "+") ans = num1 + num2;
    else if (op == "-") ans = num1 - num2;
    else if (op == "*") ans = num1 * num2;
    else ans = num1 / num2;

    setMsg("Result-" + ans);
  }
  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input
        placeholder="Num 1"
        type="text"
        onChange={(e) => setnum1(parseInt(e.target.value))}
      />
      <input
        placeholder="Num 2"
        type="text"
        onChange={(e) => setnum2(parseInt(e.target.value))}
      />
      <div className="btns">
        <button data-op="+" onClick={solve}>
          +
        </button>
        <button data-op="-" onClick={solve}>
          -
        </button>
        <button data-op="*" onClick={solve}>
          *
        </button>
        <button data-op="/" onClick={solve}>
          /
        </button>
      </div>
      <div
        className="msg"
        style={{
          color: `${verify ? "green" : "#FB184E"}`,
          display: `${tem ? "block" : "none"}`,
        }}
      >
        {verify ? "Success!" : "Error!"}
      </div>
      <div className="msg-info">{msg}</div>
    </div>
  );
}

export default App;
