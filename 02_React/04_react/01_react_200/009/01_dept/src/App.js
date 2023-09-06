import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import NotFound from './components/NotFound';

import DeptList from './pages/Dept/DeptList';
import AddDept from './pages/Dept/AddDept';
import Dept from "./pages/Dept/Dept";

import EmpList from "./pages/Emp/EmpList";
import AddEmp from "./pages/Emp/AddEmp";
import Emp from "./pages/Emp/Emp";

import "./assets/Style.css"

function App() {
  return (
    <div className="App">
      {/* 메뉴 컴포넌트 */}
      <Header />

      {/* 본문 : 라우팅 설정 */}

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* (path='*' ===지정되지 않은 모든 url) */}
          <Route path="*" element={<NotFound />} />

          {/* 부서메뉴 */}
          <Route path="/dept" element={<DeptList />} />
          <Route path="/add-dept" element={<AddDept />} />
          <Route path="/dept/:id" element={<Dept />} />

          {/* 사원메뉴 */}
          <Route path="/emp" element={<EmpList />} />
          <Route path="/add-emp" element={<AddEmp />} />
          <Route path="/emp/:id" element={<Emp />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;