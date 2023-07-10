import React, { useState, useEffect } from "react";
import "./userInfo.css";
//import swImg from "./img/swImg.jpg"
// import jyImg from "./img/jyImg.jpg"
// import syImg from "./img/syImg.jpg"
// import sbImg from "./img/sbImg.jpg"
// import jhImg from "./img/jhImg.jpg"
// import isImg from "./img/isImg.jpg"
import ManIcon from "@mui/icons-material/Man";
// import WomanIcon from '@mui/icons-material/Woman';
import Swal from "sweetalert2";
import axios from "axios";
import { Details } from "@material-ui/icons";

export default function UserInfo() {
  const [admin, setAdmin] = useState([]);

  // axios 통신
  useEffect(() => {
    const data = localStorage.getItem("authorization");
    console.log(data);
    axios({
      url: "http://localhost:8080/admin/users",
      method: "post",
      baseURL: "http://localhost:3000/admin",
      headers: { Authorization: data },
    })
      .then(function (response) {
        // 성공적인 응답 (200 OK)
        console.log("요청이 성공했습니다!");
        console.log(response.data);
        setAdmin(response.data);
      })
      .catch(function (response) {
        console.log("요청이 실패했습니다. 상태 코드:", response.status);
      });
  }, []);

  // 유저 정보 삭제 메서드
  const handleDeleteUser = (name) => {
    Swal.fire({
      icon: "warning",
      title: "삭제",
      text: `${name}을(를) 삭제하시겠습니까?`,
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((res) => {
      //확인 버튼 클릭한 이후
      if (res.isConfirmed) {
        console.log(name);
        // 삭제 요청 처리

        axios
          .delete("http://localhost:8080/admin/users/delete/" + name)
          .then((response) => {
            alert(name + "님이 삭제되었습니다.");
            window.location.reload();
          })
          .catch((error) => {
            console.error("에러메세지 => ", error);
            alert("삭제에 실패했습니다.");
          });
      } else {
        // 취소버튼을 눌렀을 때
        // 취소
        alert("취소되었습니다.");
      }
    });
  };

  return (
    <div className="userInfo">
      <span className="userListTitle">Cafe User Member</span>
      <ul className="userList">
        {/* 정석원 */}
        {/* {admin.map(item => (
                    <li className="userListItem">
                        <img src={swImg} alt="" className="userImg" />
                        <div className="userName">
                            <span className="userInfoName">UserName<ManIcon /></span>
                            <span className="userInfoMajor" key={item}>{item}</span>
                        </div>
                        <button className="userEditButton" onClick={() => handleDeleteUser({item})}>Delete</button>
                    </li>
                ))} */}

        <table className="UserTable">
          <thead>
            <tr>
              <th className="userName">Name</th>
              <th className="userInfoItem">Phone</th>
              <th className="userInfoEmail">Email</th>
              <th className="userInfoCardNumber">Card Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((userName, index) => (
              <tr key={userName}>
                <td className="userNameList">{userName}</td>
                <td className="userInfoItem">01055555555d</td>
                <td className="userInfoEmail">hanahahn@gmail.com</td>
                <td className="userInfoCardNumber">123456789456126545</td>
                <td>
                  <button
                    className="userEditButton"
                    onClick={() => handleDeleteUser(userName)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
}
