import React, { useState } from "react";
//import axios from 'axios';
import Swal from "sweetalert2";
import "./seatChange.css";

export default function SheetChange() {
  const seatButton = 15;
  const [selectedSeat, setSelectedSeat] = useState({}); //초기값이 빈 객체 useState는  react의 상태를 관리하기 위한 훅

  const SeatClick = (seatNumber) => {
    const seatStatus = selectedSeat[seatNumber]; //객체에서 해당 좌석번호의 상태를 가져온다

    Swal.fire({
      icon: seatStatus ? "warning" : "info",
      title: seatStatus ? "승인 해제" : "승인",
      text: `${seatNumber}번 좌석을 ${seatStatus ? "승인 해제" : "승인"}하시겠습니까?`,
      showCancelButton: true,
      confirmButtonText: seatStatus ? "해제" : "승인",
      cancelButtonText: "취소",
    }).then((res) => {//결과
      if (res.isConfirmed) {
        setSelectedSeat((prevSelectedSeat) => ({
          ...prevSelectedSeat,//이전 상태를 나타내는 코드
          [seatNumber]: !prevSelectedSeat[seatNumber],//좌석번호에 해당하는 상태를 반전시킴
        }));
        alert(`${seatNumber}번 좌석이 ${seatStatus ? "승인 해제" : "승인"}되었습니다.`);//알림 표시
      } else {
        alert("취소되었습니다.");
      }
    });
  };

  // //좌석 정보 보내는 이벤트헨들리
  // const sendSeatInfo = () => {
  //   axios.post('/api/seats', selectedSeat)
  //     .then(response => {
  //       // 요청이 성공했을 때 처리할 로직
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       // 요청이 실패했을 때 처리할 로직
  //       console.error(error);
  //     });
  // };
  return (
    <div className="sheetChange">
      <span className="seatEditTitle">Seat Edit</span>
      <button className="frontTable">Order Table</button>
      <button className="Entrance">Entrance</button>
      <div className="seatContainer">
        {[...Array(seatButton)].map((_, seatNumber) => {//seatButton값만큼의 길이를 갖는 배열 생성->15만큼, ...Array 전개연산자로 생성된 배열을 새로운 배열로 변환4
        //map() 함수는 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 반환
          const btnIndex = seatNumber + 1;
          const btnClass = `btn btn${btnIndex}`;

          return (
            <button
              key={seatNumber}// 반복되는 요소의 고유 식별자를 설정
              value={btnIndex}// 버튼의 값-> 좌석번호
              className={btnClass + (selectedSeat[btnIndex] ? " active" : "")}// active 클래스가 동적으로 추가됨, selectedSeat에서 해당 좌석번호 상태를 확인하여 활성화된 상태의 경우 
              onClick={() => SeatClick(btnIndex)}// 버튼이 클릭되었을때 호출 ->Seatclick함수 호출 및 btnIndex가 함수에 값으로 전달
            >
              {/* 좌석번호로 표시 */}
              {btnIndex}
            </button>
          );
        })}
      </div>
    </div>
  );
}
