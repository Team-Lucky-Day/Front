import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import "./seatChange.css";
import { Info } from "@material-ui/icons";

export default function SheetChange() {
 const [selectedSeat, setSelectedSeat] = useState({});
 const [currentSituation, setCurrentSituation] = useState([]);


 useEffect(() => {
  console.log("renderinf start!")
  const data = localStorage.getItem("authorization");
  
  axios({
    url: "http://localhost:8080/admin/tableList",
    method: "post",
    baseURL : "http://localhost:3000/admin",
    headers : {Authorization : data},
  })
  .then( (response) => {
    console.log("요청 성공!!");
    console.log(response.data);
    setCurrentSituation(response.data);
  })
  .catch( (error) => {
    console.log("요청 실패!! >> 상태 : " + error);
  })
  
 }, []);

 
 const SeatClick = (seatNumber) => {
   const seatStatus = selectedSeat[seatNumber];
   Swal.fire({
     icon: seatStatus ? "warning" : "info",
     title: seatStatus ? "승인 해제" : "승인",
     text: `${seatNumber}번 좌석을 ${
       selectedSeat[seatNumber] ? "승인 해제" : "승인"
     }하시겠습니까?`,
     showCancelButton: true,
     confirmButtonText: seatStatus ? "해제" : "승인",
     cancelButtonText: "취소",
   }).then((res) => {
     if (res.isConfirmed) {
       setSelectedSeat((prevSelectedSeat) => ({
         ...prevSelectedSeat,
         [seatNumber]: !prevSelectedSeat[seatNumber],
       }));
       alert(
         `${seatNumber}번 좌석이 ${
           seatStatus ? "승인 해제" : "승인"
         }되었습니다.`
       );
       sendSeatInfo(seatNumber, !seatStatus);
     } else {
       alert("취소되었습니다.");
     }
   });
 };

//  const sendSeatInfo = (seatNumber, seatStatus) => {
//    const seatData = {
//      t_code: seatNumber,
//      t_use: seatStatus ? 1 : 0,
//    };
//    axios({
//      url: "http://localhost:8080/tables/change",
//      method: "post",
//      data: seatData,
//      baseURL: "http://localhost:3000/Admin",
//    })
//      .then(function (response) {})
//      .catch(function (error) {
//        alert("error");
//      });
//  };

 return (

   <div className="Admin-btnseat-container">
    <h3 className="Admin-seatEditTitle">Seat Edit</h3>
      <div className="Admin-btnseat-container-Table-body">
        <table className="Admin-seatContainer-Table">
          <tbody>
            <tr>
              <td
               rowSpan={2}
               className={`Admin-btnseat Admin-btnseat ${
                currentSituation[0]&&currentSituation[0].useTable ? "active" : ""}`}
               onClick={() => {
                 SeatClick(1);
               }}
             >
               1
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[2]&&currentSituation[2].useTable === true ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(3);
               }}
             >
               3
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat ${
                 currentSituation[3]&&currentSituation[3] ? "active" : ""
               }`}
               onClick={() => {
                 SeatClick(4);
               }}
             >
               4
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[4]&&currentSituation[4] === true ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(5);
               }}
             >
               5
             </td>
             <td
               rowSpan={4}
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[14]&&currentSituation[14] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(15);
               }}
             >
               15
             </td>
           </tr>
           <tr>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[5]&&currentSituation[5] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(6);
               }}
              
             >
               6
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[6]&&currentSituation[6] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(7);
               }}
              
             >
               7
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[7]&&currentSituation[7] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(8);
               }}
             >
               8
             </td>
           </tr>
           <tr>
             <td
               rowSpan={2}
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[1]&&currentSituation[1] ? "active" : ""
               }`}
               onClick={() => {
                 SeatClick(2);
               }}
             >
               2
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[8]&&currentSituation[8] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(9);
               }}
             >
               9
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[9]&&currentSituation[9] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(10);
               }}
             >
               10
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[10]&&currentSituation[10] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(11);
               }}
             >
               11
             </td>
           </tr>
           <tr>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[11]&&currentSituation[11] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(12);
               }}
             >
               12
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[12]&&currentSituation[12] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(13);
               }}
             >
               13
             </td>
             <td
               className={`Admin-btnseat Admin-btnseat${
                 currentSituation[13]&&currentSituation[13] ? " active" : ""
               }`}
               onClick={() => {
                 SeatClick(14);
               }}
             >
               14
             </td>
           </tr>
           <tr></tr>
         </tbody>
       </table>
      </div>
     
   </div>
   
 );
}
