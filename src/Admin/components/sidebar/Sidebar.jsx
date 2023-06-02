import React from "react";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import PersonIcon from "@mui/icons-material/Person";
import "./sidebar.css";

// activeTab은 현재 선택된 탭의 인덱스를 나타내는 props
// handleTabClick은 탭을 클릭했을 때 호출되는 함수로, 선택된 탭의 인덱스를 업데이트하는 props
// props란 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용하는 속성
export default function Sidebar({ activeTab, handleTabClick }) {
  return (
    <div className="sidebaradmin">
      <div className="sideWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">AdminList</h3>
          <ul className="sidebarList">
            {/* 클릭할 때 handleTabClick(0) 함수가 호출 */}
            <li
              className={`sidebarListItem ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              {/* <PersonIcon /> */}
              UserInfo
            </li>
            <li
              className={`sidebarListItem ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              {/* <ChairAltIcon /> */}
              SeatChange
            </li>
            <li
              className={`sidebarListItem ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              {/* <CoffeeIcon /> */}
              EditMenu
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
