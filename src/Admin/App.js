import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import UserInfo from "./components/userInfo/UserInfo";
import SeatChange from "./components/seatChange/SeatChange";
import EditMenu from "./components/editMenu/EditMenu";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  


  // useState 훅을 사용하여 activeTab 상태와 setActiveTab 상태를 초기화
  // activeTab은 현재 선택된 탭의 인덱스를 나타내며, setActiveTab은 선택된 탭을 업데이트하는 함수
  const [activeTab, setActiveTab] = useState(0);

  // handleTabClick 함수는 index를 매개변수로 받아와서 setActiveTab을 호출하여 activeTab 상태를 업데이트
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="App">
      <Topbar />
      <div className="containerAdmin">
        {/* sidetab 컴포넌트에서 탭클릭시 handleTabClick 함수를 호출하여 인덱스를 전달 */}
        <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
        <div className="tabContent">
          {/* App 컴포넌트에서 activeTab 상태를 업데이트하고, 해당하는 탭 콘텐츠가 렌더링 */}
          {activeTab === 0 && <UserInfo />}
          {activeTab === 1 && <SeatChange />}
          {activeTab === 2 && <EditMenu />}
        </div>
      </div>
    </div>
  );
}

export default App;
