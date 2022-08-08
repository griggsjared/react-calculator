import { useState } from "react";

const DebugDisplay = ({ register }) => {

  let [shown, setShown] = useState(false);

  if(!shown) {
    return (
      <div className="py-2">
        <button onClick={() => setShown(true)} className="text-left text-primary">+ Show Debug</button>
      </div>
    )
  }

  return (
    <div className="py-2">
      <div className="px-2 py-1 text-sm text-gray-100 bg-gray-700 border border-gray-900">
        <ul class="leading-5">
          <li>First Number: {register.firstNumber}</li>
          <li>Second Number: {register.secondNumber}</li>
          <li>Remember Number: {register.rememberNumber}</li>
          <li>Operation: {register.operation}</li>
        </ul>
      </div>
      <button onClick={() => setShown(false)} className="text-primary">- Hide Debug</button>
    </div>
  );
}

export default DebugDisplay;
