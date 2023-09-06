import React, { useState } from "react";
import "../assets/chapter15.css"

function Add_Emp() {
  // 변수 정의
  const initialEmp = {
    ename: "",
    job: "",
    manager: "",
    hiredate: "",
    salary: "",
    commission: "",
    dno: "",
  }

  let [emp, setEmp] = useState(initialEmp);

  // 함수 정의
  const handleChange = (event) => {
    let attrValue = event.target.value;
    let attrName = event.target.name;
    setEmp({...emp, [attrName]:attrValue});
  };

  const saveEmp = () => {
    alert("저장완료");
  };


  return (
    <div className="submit-form">
      <div className="form-group mb-3">
        <label htmlFor="ename">Ename</label>
        <input
          type="text"
          className="form-control"
          id="ename"
          required
          value={emp.ename}
          onChange={handleChange}
          name="ename"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="job">Job</label>
        <input
          type="text"
          className="form-control"
          id="job"
          required
          value={emp.job}
          onChange={handleChange}
          name="job"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="manager">manager</label>
        <input
          type="number"
          className="form-control"
          id="manager"
          required
          value={emp.manager}
          onChange={handleChange}
          name="manager"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="hiredate">hiredate</label>
        <input
          type="number"
          className="form-control"
          id="hiredate"
          required
          value={emp.hiredate}
          onChange={handleChange}
          name="hiredate"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="salary">salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          required
          value={emp.salary}
          onChange={handleChange}
          name="salary"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="commission">commission</label>
        <input
          type="number"
          className="form-control"
          id="commission"
          required
          value={emp.commission}
          onChange={handleChange}
          name="commission"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="dno">dno</label>
        <input
          type="number"
          className="form-control"
          id="dno"
          required
          value={emp.dno}
          onChange={handleChange}
          name="dno"
        />
      </div>

      <button onClick={saveEmp} className="btn btn-success mt-3">
        Submit
      </button>
    </div>
  );
}

export default Add_Emp;
