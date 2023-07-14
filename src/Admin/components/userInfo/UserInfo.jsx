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
  },[]);
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
    <div className="Admin-userInfo">
      <h3 className="Admin-userListTitle">Cafe User Member</h3>
      <ul className="Admin-userList-Container">
        <table className="UserInfo-userTable">
          <tbody>
            <tr className="UserInfo-userTable-thead">
              <td className="Admin-userName">Name</td>
              <td className="Admin-userInfoItem">Phone</td>
              <td className="Admin-userInfoEmail">Email</td>
              <td className="Admin-userInfoCardNumber">Card Number</td>
              <td>Delete</td>
            </tr>
            {admin.map((userInfo) => (
                <tr key={userInfo.u_name} className="UserInfo-userTable-tbody">
                  <td className="Admin-userNameList">{userInfo.u_name}</td>
                  <td className="Admin-userInfoItem">{userInfo.u_phone}</td>
                  <td className="Admin-userInfoEmail">{userInfo.u_email}</td>
                  <td className="Admin-userInfoCardNumber">{userInfo.c_number}</td>
                  <td>
                    <button
                      className="Admin-userEditButton"
                      onClick={() => handleDeleteUser(userInfo.u_name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </ul>
    </div>
  );
}
