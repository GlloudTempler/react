import React, { useEffect, useState } from "react";
import DeptSercive from "../../services/DeptService"
import { Link } from "react-router-dom"; //메뉴 라이브러리

function DeptList() {

  // TODO 변수정의
  const [dept, setDept] = useState([]); // 벡엔드 부서 데이터를 받을 변수
  let [searchDname, setSearchDname] = useState(""); // 검색어 변수

  // TODO 함수정의
  // 벡엔드 데이터 조회 함수 : axios사용
  const retrieveDept = () => {
    // axios함수 : get()요청 : (js 공통 함수를 만들고 공통함수명으로 호출)
    // .then() : 성공(자동실행)
    // .catch(): 실패(자동실행)
    DeptSercive.getAll() // 벡엔드 모든 데이터 조회 함수 : axios
    .then((response)=>{
      setDept(response.data); // 실질적인 백엔드 데이터 저장(response.data)
      // 로그 찍기
      console.log(response.data);
    })       // 성공 자동실행
    .catch((e)=>{
      console.log(e); //에러메세지 콘솔로 출력

    })    // 실패 자동실행
  }

    // 화면이 뜰때 retrieveDept 실행
    // useEffect(()=>{실행문}, []);
    useEffect(()=>{
      retrieveDept();
    },[])

  // 검색어 조회 함수
  // axios : get(url) 공통함수 : DeptService.findByDname(검색어)
  const findByDname = () => {
    DeptSercive.findByDname(searchDname) // 검색어로 조회 요청
    // 비동기 코딩
    .then((response)=>{       // 성공하면 자동실행
      setDept(response.data); // 백엔드에서 전달해준 데이터를 저장
      // 로그 찍기
      console.log(response.data);
    })
    // 에러
    .catch((e)=>{
      console.log(e); // 에러메세지 출력
    })
  };

  // 역바인딩 함수 : 코딩
  const onChangeSearchDname = (event) => {
    setSearchDname(event.target.value);
  }
  return (
    <div>
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-12 mb-5 mt-5">
          <h1>Dept List</h1>
        </div>
        {/* 제목 끝 */}
      </div>

      {/* dname start */}
      {/* ==== 검색창 */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          {/* 검색어 입력창 */}
          <input
            type="text"
            className="form-control"
            placeholder="Search by dname"
            value={searchDname}
            onChange={onChangeSearchDname}
          />
          {/* 검색어 입력창끝 */}
          {/* 검색 버튼 */}
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByDname}
            >
              Search
            </button>
          </div>
          {/* 검색 버튼 끝 */}
        </div>
      </div>
      {/* 검색창 끝 ===== */}
      {/* dname end */}

      {/* table start */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          {/* 테이블 제목 */}
          <thead className="table-dark">
            <tr>
              <th scope="col">Dname</th>
              <th scope="col">Loc</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {/* 테이블 제목 끝 */}

          <tbody>
            {/* 반복문 시작 */}
            {dept &&
              dept.map((data, index) => (
                <tr key={index}>
                  <td>{data.dname}</td>
                  <td>{data.loc}</td>
                  <td>
                    {/* 상세페이지이동 */}
                    {/* 1) 사용법 : /url?변수명=변수값 (쿼리스트링 방식) */}
                    {/* 2) 사용법 : /url/변수값(파라메터 방식) -> 다른 페이지에서 값을 받을 수 있음 */}
                    {/* 클릭하면 상세페이지가 화면에 뜸(부서번호(data.id)도 넘겨줌) */}
                    <Link to={"/dept/" + data.id}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
            {/* 반복문 끝 */}
          </tbody>
        </table>
        {/* table end */}
      </div>
      {/* table end */}
    </div>
  );
}

export default DeptList;
