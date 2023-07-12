import React, { useState, useEffect } from "react";
import "./userInfo.css";
//import swImg from "./img/swImg.jpg"
// import jyImg from "./img/jyImg.jpg"
// import syImg from "./img/syImg.jpg"
// import sbImg from "./img/sbImg.jpg"
// import jhImg from "./img/jhImg.jpg"
// import isImg from "./img/isImg.jpg"
import ManIcon from '@mui/icons-material/Man';
// import WomanIcon from '@mui/icons-material/Woman';
import Swal from "sweetalert2";
import axios from "axios";
import { Details } from "@material-ui/icons";


export default function UserInfo() {
    const [data, setData] = useState([]);

    // axios 통신
    useEffect(() => {
        axios.get('http://localhost:8080/admin/users')
            .then(response => {
                setData(response.data);
            });
    }, []);





    // 유저 정보 삭제 메서드
    const handleDeleteUser = (name) => {

        Swal.fire({
            icon: 'warning',
            title: '삭제',
            text: `${name}을(를) 삭제하시겠습니까?`,
            showCancelButton: true,
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
        }).then((res) => {//확인 버튼 클릭한 이후
            if (res.isConfirmed) {
                console.log(name)
                // 삭제 요청 처리

                axios.delete('http://localhost:8080/admin/users/delete/' + name)
                    .then(response => {
                        alert(name + '님이 삭제되었습니다.');
                        window.location.reload();
                    })
                    .catch(error => {
                        console.error("에러메세지 => ", error);
                        alert('삭제에 실패했습니다.')
                    })

            } else {// 취소버튼을 눌렀을 때
                // 취소
                alert('취소되었습니다.');
            }
        });
    };

    return (
        <div className="userInfo">
            <span className="userListTitle">Cafe User Member</span>
            <ul className="userList">

                {/* 정석원 */}
                {/* {data.map(item => (
                    <li className="userListItem">
                        <img src={swImg} alt="" className="userImg" />
                        <div className="userName">
                            <span className="userInfoName">UserName<ManIcon /></span>
                            <span className="userInfoMajor" key={item}>{item}</span>
                        </div>
                        <button className="userEditButton" onClick={() => handleDeleteUser({item})}>Delete</button>
                    </li>
                ))} */}


<table className="UserInfo-userTable">
  <thead>
    <tr id="UserInfo-userInfoListHead">
      <td className="hUserName">Name</td>
      <td className="hUserInfoItem">Phone</td>
      <td className="hUserInfoEmail">Email</td>
      <td className="hUserInfoCardNumber">Card Number</td>
      <td>Delete</td>
    </tr>
  </thead>
  <tbody>
    {data.map((userName, index) => (
      <tr key={userName} className="UserInfo-userInfoListContent">
        <td className="userNameList"><span>{userName.u_name}</span></td>
        <td className="userInfoItem"><span>{userName.u_phone}</span></td>
        <td className="userInfoEmail"><span>{userName.u_email}</span></td>
        <td className="userInfoCardNumber"><span>{userName.c_number}</span></td>
        <td>
          <button className="userEditButton" onClick={() => handleDeleteUser(userName)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

            
            </ul>
        </div>


    )
}