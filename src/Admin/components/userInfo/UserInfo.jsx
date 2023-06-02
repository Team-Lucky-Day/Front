import React from "react";
import "./userInfo.css";
import swImg from "./img/swImg.jpg"
import jyImg from "./img/jyImg.jpg"
import syImg from "./img/syImg.jpg"
import sbImg from "./img/sbImg.jpg"
import jhImg from "./img/jhImg.jpg"
import isImg from "./img/isImg.jpg"
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import Swal from "sweetalert2";
export default function UserInfo() {
    const handleDeleteUser = (name) => {
        Swal.fire({
            icon: 'warning',
            title: '삭제',
            text: `${name}을(를) 삭제하시겠습니까?`,
            showCancelButton: true,
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
        }).then((res) => {
            if (res.isConfirmed) {
                // 삭제 요청 처리
                alert(`${name}이(가) 삭제되었습니다.`);
            } else {
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
                <li className="userListItem">
                    <img src={swImg} alt="" className="userImg" />
                    <div className="userName">
                        <span className="userInfoName">Jeong Seokwon<ManIcon /></span>
                        <span className="userInfoMajor">Computer</span>
                    </div>
                    <button className="userEditButton" onClick={() => handleDeleteUser('정석원')}>Delete</button>
                </li>

                {/* 주재영 */}
                <li className="userListItem">
                    <img src={jyImg} alt="" className="userImg" />
                    <div className="userName">
                        <span className="userInfoName">Joo Jaeyoung<ManIcon /></span>
                        <span className="userInfoMajor">Computer</span>
                    </div>
                    <button className="userEditButton" onClick={() => handleDeleteUser('주재영')}>Delete</button>
                </li>

                {/* 이소용 */}
                <li className="userListItem">
                    <img src={syImg} alt="" className="userImg" />
                    <div className="userName">
                        <span className="userInfoName">Lee Soyong<ManIcon /></span>
                        <span className="userInfoMajor">Computer</span>
                    </div>
                    <button className="userEditButton" onClick={() => handleDeleteUser('이소용')}>Delete</button>
                </li>

                {/* 이수빈 */}
                <li className="userListItem">
                    <img src={sbImg} alt="" className="userImg" />
                    <div className="userName">
                        <span className="userInfoName">Lee Soobin<ManIcon /></span>
                        <span className="userInfoMajor">Sport</span>
                    </div>
                    <button className="userEditButton" onClick={() => handleDeleteUser('이수빈')}>Delete</button>
                </li>

                {/* 박인서 */}
                <li className="userListItem">
                    <img src={isImg} alt="" className="userImg" />
                    <div className="userName">
                        <span className="userInfoName">Park Inseo<WomanIcon /></span>
                        <span className="userInfoMajor">Computer</span>
                    </div>
                    <button className="userEditButton" onClick={() => handleDeleteUser('박인서')}>Delete</button>
                </li>

                {/* 염진희 */}
                <li className="userListItem">
                    <img src={jhImg} alt="" className="userImg" />
                    <div className="userName">
                        <span className="userInfoName">Yeom Jinhee<WomanIcon /></span>
                        <span className="userInfoMajor">Computer</span>
                    </div>
                    <button className="userEditButton" onClick={() => handleDeleteUser('염진희')}>Delete</button>
                </li>
            </ul>
        </div>


    )
}