import { useState } from "react";

const DebugDisplay = ({ register }) => {

  let [shown, setShown] = useState(false);

  if(!shown) {
    return <button onClick={() => setShown(true)} className="text-yellow">Show Debug</button>
  }

  return (
    <>
      <ul>
        <li>First Number: {register.firstNumber}</li>
        <li>Second Number: {register.secondNumber}</li>
        <li>Remember Number: {register.rememberNumber}</li>
        <li>Operation: {register.operation}</li>
      </ul>
      <button onClick={() => setShown(false)} className="text-yellow">Hide Debug</button>
    </>
  );
}

export default DebugDisplay;
