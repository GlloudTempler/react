// 상세페이지(수정 / 삭제)
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeptService from "../../services/DeptService";

function Dept() {
    // TODO 변수정의
    // 이전 페이지에서 변수의 값을 전송 -> 받아오는 것
    const { id } = useParams(); // ! 전송된 값을 받는 함수 호출 : useParams
    let navigate = useNavigate(); // ! 페이지 강제 이동 함수 : useNAvigate();
    
    // 바인딩 변수
    // 임시 객체 : 초기화
    // 추가페이지 - 상세페이지 같은 객체 사용
    const initialDept = {
        id : null,
        dname : "",
        loc : "",
    }
    
    let [dept, setDept] = useState(initialDept);
    let [message, setMessage] = useState(""); // 수정 버튼 클릭 시 성공/실패 여부 확인

    // TODO 함수정의
    // 최초 화면이 뜰때 부서번호에 해당하는 데이터를 화면에 표시하는 함수
    // 1건 조회 함수(상세조회)
    // 백엔드에 부서번호에 해당되는 부서객체를 요청(1건 리턴)
    // axios 함수 : get() 함수 [저장요청 : post()]
    const getDept = (id) => { 
        // DeptService
        DeptService.get(id) // 상세조회
        .then((response)=>{ // 성공시 자동실행
            setDept(response.data); // 백엔드에서 보내준 결과 저장
            console.log(response.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    // 화면이 뜰 때 실행되는 함수 + id값이 수정되었을때도 자동실행
    // 사용법(수정) : useEffect(()=>{실행문}, [감시할 변수명])
    useEffect(()=>{
        if(id) {
            getDept(id); // 상세조회 함수 실행
        }
    },[id])

    // 역바인딩 함수
    const handleInputChange = (event) => {
        let attrValue = event.target.value
        let attrName = event.target.name
        setDept({...dept, [attrName]:attrValue});
    }

    // 삭제함수 : 클릭이벤트
    // axios 공통함수 : axios.delete(/dept/부서번호)
    const deleteDept = () => {
        DeptService.remove(dept.id) //삭제요청 (id)
        .then((response)=>{
            console.log(response.data);
            // 삭제 성공 후 자동으로 첫페이지 이동
            // navigate(이동 페이지 주소);
            navigate("/dept"); // 강제페이지 이동함수 실행
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    
    // 수정함수 : 클릭이벤트
    const updateDept = () => {
        DeptService.update(dept, dept.id)
        .then((response) => {
            console.log(response.data)
            setMessage("부서 수정을 성공하였습니다.")
            // navigate("/dept")
        })
        .catch((e) => {
            console.log(e);
        })
    }

  return (
    <>
      {/* 제목 start */}
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-6 mb-5 mt-5 mx-auto">
          <h1>Dept Detail</h1>
        </div>
        {/* 제목 끝 */}
      </div>
      {/* 제목 end */}

      <>
        {dept ? (
            // 상세화면 홈
          <div className="col-6 mx-auto">
            <form>
                {/* 부서명 시작 */}
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
                    value={dept.dname}
                    onChange={handleInputChange}
                    placeholder="dname"
                    name="dname"
                  />
                </div>
              </div>
              {/* 부서명 시작 */}
                
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
            </form>

                {/* 버튼 시작 : 삭제/수정버튼 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteDept}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateDept}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>
            {/* 버튼끝  : 삭제/수정버튼 */}
            
            {/* 수정버튼 작동시 성공/실패 메세지 출력*/}
            <p>{message}</p>
          </div>
            // 상세화면 홈 끝
        ) : (
            // 오류발생시 표시
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a Dept...</p>
          </div>
            //  오류 발생시 표시 끝
        )}
      </>
    </>
  );
}

export default Dept;
