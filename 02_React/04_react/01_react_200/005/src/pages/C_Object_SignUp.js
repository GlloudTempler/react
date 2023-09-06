import React, { useState } from 'react'

function C_Object_SignUp() {
    // TODO 변수 정의
    // 객체 정의
    let initialCustomer = {
        name: "",
        gender: "남자"
    }
    // 정방향 바인딩 변수
    let [customer, setCustomer] = useState(initialCustomer);


    // TODO 함수 정의
    // 역바인딩 함수[하나로 여러개 작용하는 방식으로 코딩] //!(객체일때만 사용)
    const handleChange = (event) => {
        // 화면의 변경값 = event.target.value
        // 화면에 변경하고 있는 태그 = event.taget.name
        // ex) input태그 변경중 = input.name = name
        // select 변경중 = select.name = gender
        // name ==> customer.name 속성명 같음
        // gender ==> customer.gender 속성명 같음
        let attrValue = event.target.value; // 화면 변경값
        let attrName = event.target.name; // 화면 태그이름
        // customer객체 속성의 값을 수정
        // 모던 js === ECMAjs === ES6 jS (...연산자)
        // 스프레드 연산자 사용 (같은 값이 있으면 수정)
        // 사용법 : set변수명({...변수명, [화면태그이름]: 화면 변경값 호출})
        setCustomer({...customer, [attrName]: attrValue})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault(); //기본 기능 취소(방해) 함수
        alert(`이름 : ${customer.name}\n성별 : ${customer.gender}`)
    }
  return (

    <div className="container">
      <form>
        {/* 이름 */}
        <label>
          이름:
          {/* 데이터 바인딩 : value={name} 
             name = "aaa" -> 화면 "aaa"
          */}
          <input
            type="text"
            value={customer.name}
            name="name" // 화면 태그 이름
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}
        <br />
        {/* 성별 */}
        <label>
          성별:
          {/* value : 먼저 선택된값 */}
          <select value={customer.gender} name="gender" onChange={handleChange}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label>
        {/* 성별 끝 */}

        {/* 제출(submit) 버튼 */}
        {/* 기본 특징 : 페이지 이동 */}
        <button type="submit" onClick={handleSubmit}>
          제출
        </button>
        {/* 제출 버튼 끝 */}
      </form>
    </div>
  )
}

export default C_Object_SignUp