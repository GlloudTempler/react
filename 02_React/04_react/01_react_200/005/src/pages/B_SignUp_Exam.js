import React, { useState } from 'react'
// TODO 연습문제) 변수/함수에 맞추어 코딩
// TODO 초기값 모두 ""
// TODO 입력양식 부트스트랩 추가
// TODO name, password, email, phone, address 변수 정의
// TODO onChange 함수 정의
function B_SignUp_Exam() {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleSubmit = (event) => { 
        // submit버튼 특징 : 페이지이동
        event.preventDefault(); //기본 기능 취소(방해) 함수
        alert("이름 : " + name + "\n" + "비밀번호 : " + password + "\n" + "이메일 : " + email
                +"\n" + "핸드폰번호 : " + phone + "\n" + "주소 : " + address);
    }

  return (

    <div>
      <form>
        <label>
          이름:
          <input
            className="form-control" 
            type="text"
            value={name}
            name="name"
            onChange={handleChangeName}
          />
        </label>

        <br />
        <label>
          패스워드:
          <input
          className="form-control"
            type="password"
            value={password}
            name="password"
            onChange={handleChangePassword}
          />
        </label>

        <br />
        <label>
          email:
          <input
          className="form-control"
            type="email"
            value={email}
            name="email"
            onChange={handleChangeEmail}
          />
        </label>

        <br />
        <label>
          phone:
          <input
          className="form-control"
            type="text"
            value={phone}
            name="phone"
            onChange={handleChangePhone}
          />
        </label>

        <br />
        <label>
          주소:
          <input
          className="form-control"
            type="text"
            value={address}
            name="address"
            onChange={handleChangeAddress}
          />
        </label>

        <button  className="btn btn-primary"
             type="submit" onClick={handleSubmit}>
          제출
        </button>
      </form>
    </div>
  )
}

export default B_SignUp_Exam