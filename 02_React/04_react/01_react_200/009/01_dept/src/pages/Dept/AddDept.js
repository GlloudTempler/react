import React, { useState } from "react";
import DeptService from "../../services/DeptService";

function AddDept() {
  // TODO 변수정의
  // 임시객체 필요
  const initialDept = {
    id : null, // 부서번호
    dname : "", // 부서명
    loc : "", // 부서위치
  }
  // 바인딩 변수
  let [dept, setDept] = useState(initialDept); //백엔드로 전송할 변수(insert 요청)
  let [submitted, setSubmitted] = useState(false); // 저장버튼 클릭시 변동하는 변수

  // TODO 함수정의
  // 역바인딩 함수 : onChange={함수명}
  const handleInputChange = (event) => { 
    let attrValue = event.target.value; // 화면에 있는 값(=== 객체의 속성값)
    let attrName = event.target.name; // 화면의 이름 (=== 객체의 속성명)
    // 스프레드 연산자로 속성 수정
    setDept({...dept, [attrName]:attrValue});
  }

  // 버튼(저장함수)
  // 백엔드로 dept객체 저장요청 (axios : 공통저장함수(create()) 필요)
  const saveDept = () => {
    // 임시 저장용 객체
    let data = {
      dname : dept.dname , //화면 입력값(부서명)
      loc : dept.loc  // 화면 입력값(부서위치)
    }
    DeptService.create(data) // 저장 요청(부서객체)
    .then((response)=>{
      setDept(response.data); //백엔드에 저장한 객체를 받아서 변수에 저장
      setSubmitted(true); //저장버튼 클릭 + 저장 성공(false => true)
      console.log(response.data);
    })
    .catch((e)=>{
      console.log(e); // 에러 메세지 출력
    })

    alert("저장했습니다.");
  }

  // 저장 버튼 클릭 : 새로운 화면 전환(버튼이 1개 있는 화면)
  // 3항 연산자의 다른 화면이 출력(submitted === true)
  const newDept = () => {
    // 역할 : 변수 초기화 (객체, submitted = false)
    setDept(initialDept);
    setSubmitted(false);
  }
  
  return (
    <div className="row">
      {/* 변수? 참: 거짓 */}
      {/* submitted 변수가 참이면 앞, 거짓이면 뒤의 코딩이 출력 */}
      {submitted ? (
        // submitted = true : "저장버튼을 클릭했을 경우"
        // newDept() 함수 실행되면 : 새로운 빈폼을 화면에 보여주고, submitted = false
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDept}>
            Add
          </button>
        </div>
      ) : (
        // <></>(빈꺾쇠) : 플래그멘테이션(flagmantation) - div사용이 많아지는 것을 방지
        <>
          {/* 제목 */}
          <div className="row">
            {/* 제목 시작 */}
            <div className="col-md-6 mb-5 mt-5 m-auto">
              <h1>Add Dept</h1>
            </div>
            {/* 제목 끝 */}
          </div>
          {/* 제목 끝 */}

          {/* form입력 양식 */}
          {/* 부서명 입력 */}
          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="dname" className="col-form-label">
                  Dname
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="dname"
                  required
                  className="form-control"
                  // 바인딩, 역바인딩
                  value={dept.dname}
                  onChange={handleInputChange}
                  placeholder="dname"
                  name="dname"
                />
              </div>
            </div>
            {/* 부서명 입력 끝*/}

            {/* 부서위치 시작 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="loc" className="col-form-label">
                  Loc
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="loc"
                  required
                  className="form-control"
                  value={dept.loc}
                  onChange={handleInputChange}
                  placeholder="loc"
                  name="loc"
                />
              </div>
            </div>
            {/* 부서위치 끝 */}

            {/* 버튼 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveDept}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
            {/* 버튼 끝 */}
          </div>
          {/* form입력 양식 끝*/}
        </>
      )}
    </div>
  );
}

export default AddDept;
