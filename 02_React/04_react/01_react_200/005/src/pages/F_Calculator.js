import React, { useState } from "react";

function F_Calculator() {
    let [cTemp, setTempC] = useState(0);
    let [fTemp, setTempF] = useState(0);

    const handleChangeCtemp = (event) => {
        setTempC(event.target.value);
    }

    const handleChangeFtemp = (event) => {
        setTempF(event.target.value);
    }

  return (
    <div>
      <fieldset>
        {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
        <legend>섭씨온도를 입력해주세요:</legend>
        <input value={cTemp} onChange={handleChangeCtemp} />
        <p>화씨온도 : {cTemp * 1.8 + 32} </p>
      </fieldset>

      <fieldset>
        {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
        <legend>화씨온도를 입력해주세요:</legend>
        <input value={fTemp} onChange={handleChangeFtemp} />
        <p>섭씨온도 : {(fTemp - 32) / 1.8} </p>
      </fieldset>
    </div>
  );
}

export default F_Calculator;
