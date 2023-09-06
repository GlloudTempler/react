import React, { useState } from "react";

// TODO 연숩문제 객체를 사용하는 형태로 코딩
// TODO useState() 1번만 사용하고 객체변수, handleChange 함수만 코딩
function E_Object_SignU_Exam() {
    // 객체 정의
    let initialCustomer = {
        name: "",
        password: "",
        email: "",
        phone: "",
        address: ""
    };

    // TODO 변수 정의
    // 바인딩 변수
    // 변수값 변경 : 화면 값 변경(자동)
    let [customer, setCustomer] = useState(initialCustomer);

    // TODO 함수 정의   
    // 역방향 바인딩 
    const handleChange = (event) => {
        // 현재 화면 값 :
        let attrValue = event.target.value;
        // 현재 화면의 태그이름 :
        let attrName = event.target.name;
        setCustomer({...customer, [attrName]: attrValue});
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //기본 기능 취소(방해) 함수
        alert(`
        이름 : ${customer.name}
        비밀번호 : ${customer.password}
        이메일 : ${customer.email}
        전화번호 : ${customer.phone}
        주소 : ${customer.address}`)
    }

  return (
    <div className="container">
      <form>
        {/* 이름 */}
        <label>
          이름:
          <input
            className="form-control"
            type="text"
            value={customer.name}
            name="name"
            onChange={handleChange}
          />
        </label>
        {/* 이름 끝 */}
        <br />
        {/* 패스워드 */}
        <label>
          패스워드:
          <input
            className="form-control"
            type="password"
            value={customer.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        {/* 패스워드 끝 */}

        <br />
        {/* 이메일 */}
        <label>
          email:
          <input
            className="form-control"
            type="email"
            value={customer.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        {/* 이메일 끝 */}

        <br />
        {/* 전화번호 */}
        <label>
          phone:
          <input
            className="form-control"
            type="text"
            value={customer.phone}
            name="phone"
            onChange={handleChange}
          />
        </label>
        {/* 전화번호 끝 */}

        <br />

        {/* 주소 */}
        <label>
          주소:
          <input
            className="form-control"
            type="text"
            value={customer.address}
            name="address"
            onChange={handleChange}
          />
        </label>
        {/* 주소 끝 */}

        {/* 버튼 */}
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          제출
        </button>
        {/* 버튼 끝 */}
      </form>
    </div>
  );
}

export default E_Object_SignU_Exam;
