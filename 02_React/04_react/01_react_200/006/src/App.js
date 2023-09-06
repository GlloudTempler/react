import "./App.css";
import Add_Dept from "./pages/Add_Dept";
import Dept from "./pages/Dept";
import Home from "./pages/Home";
import Add_Emp from './pages/Add_Emp';
import Emp from './pages/Emp';
// 메뉴 라이브러리 추가
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          {/* start Main */}
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          {/* end Main */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* start home */}
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              {/* end home */}
              {/* start features */}
              <li class="nav-item">
                <Link to="/dept" class="nav-link">
                  Dept
                </Link>
              </li>
              {/* end features */}
              {/* start features2 */}
              <li class="nav-item">
                <Link to="/Add_Dept" class="nav-link">
                  Add Dept
                </Link>
              </li>
              {/* end features2 */}
              {/* start features2 */}
              <li class="nav-item">
                <Link to="/Emp" class="nav-link">
                  Emp
                </Link>
              </li>
              {/* end features2 */}
              <li class="nav-item">
                <Link to="/Add_Emp" class="nav-link">
                  Add Emp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 본문 */}
      <div>
        <Routes>
          {/* / : 첫화면 url -> <Home/> 띄워라 */}
          <Route path="/" element={<Home />} />
          <Route path="/dept" element={<Dept />} />
          <Route path="/Add_Dept" element={<Add_Dept />} />
          <Route path="/Emp" element={<Emp />} />
          <Route path="/Add_Emp" element={<Add_Emp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
