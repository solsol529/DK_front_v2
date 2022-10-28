import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import "./style/reset.css";

import JoinTermPage from "./pages/JoinTermPage";
import JoinPage from "./pages/JoinPage";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import MemberInfoPage from "./pages/MemberInfoPage";
import MyWritePage from "./pages/MyWritePage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    // className={`app ${darkMode ? "dark" : ""}`}
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/jointerm' element={<JoinTermPage/>}/>
          <Route path='/join' element={<JoinPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/board' element={<BoardPage/>}/>
          <Route path='/write' element={<WritePage/>}/>
          <Route path='/memberinfo' element={<MemberInfoPage/>}/>
          <Route path='/mywrite' element={<MyWritePage/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
