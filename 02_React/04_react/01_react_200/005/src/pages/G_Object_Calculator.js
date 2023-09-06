import React, { useState } from 'react'

function G_Object_Calculator() {
    // 객체 정의
    let initialTemp ={
        cTemp:0,
        fTemp:0
    }

    // TODO 바인딩 변수
    let [temp, setTemp] = useState(initialTemp);

    // TODO 함수
    const handleChange = (event) => {
        let attrValue = event.target.value;
        let attrName = event.target.name;
        setTemp({...temp, [attrName]:attrValue});
    }

  return (
    <div>
    <fieldset>
      {/* (섭씨온도 * 1.8) + 32 = 화씨온도 */}
      <legend>섭씨온도를 입력해주세요:</legend>
      <input value={temp.cTemp}
            name="cTemp"
            onChange={handleChange} />
      <p>화씨온도 : {(temp.cTemp * 1.8) + 32} </p>
    </fieldset>

    <fieldset>
      {/* (화씨온도 - 32) / 1.8 = 섭씨온도 */}
      <legend>화씨온도를 입력해주세요:</legend>
      <input value={temp.fTemp}
             name="fTemp"
             onChange={handleChange} />
      <p>섭씨온도 : {(temp.fTemp - 32) / 1.8} </p>
    </fieldset>
  </div>
  )
}

export default G_Object_Calculator