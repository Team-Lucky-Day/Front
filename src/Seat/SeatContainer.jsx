
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../CSS/seat.css";
const SeatContainer = () => {
    const [selectedSeat, setSelectedSeat] = useState({});

    useEffect(() => {
      getTableList();
    }, []);

    const getTableList = () => {
      axios({
        url: "http://localhost:8080/table/list",
        method: "get",
      })
        .then((response) => {
          const tableData = response.data;
          const tableListSeat = {};
          for (const table of tableData) {
            tableListSeat[table.t_code] = table.t_use === 1 ? true : false;
          }
          setSelectedSeat(tableListSeat);
        })
        .catch((error) => {
          console.error(error);
        });
    };

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

    const sendSeatInfo = (seatNumber, seatStatus) => {
      const seatData = {
        t_code: seatNumber,
        t_use: seatStatus ? 1 : 0,
      };
      axios({
        url: "http://localhost:8080/tables/change",
        method: "post",
        data: seatData,
        baseURL: "http://localhost:3000/Seat",
      })
        .then(function (response) {})
        .catch(function (error) {
          alert("error");
        });
    };

  
    return (
      <div className="Seat-btnseat-container">
        <div className="Seat-btnseat-container-Table-body">
          <table className="Seat-seatContainer-Table">
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[1] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(1);
                  }}
                >
                  1
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[3] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(3);
                  }}
                >
                  3
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[4] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(4);
                  }}
                >
                  4
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[5] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(5);
                  }}
                >
                  5
                </td>
                <td
                  rowSpan={4}
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[15] ? " active" : ""
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
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[6] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(6);
                  }}
                >
                  6
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[7] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(7);
                  }}
                >
                  7
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[8] ? " active" : ""
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
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[2] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(2);
                  }}
                >
                  2
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[9] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(9);
                  }}
                >
                  9
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[10] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(10);
                  }}
                >
                  10
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[11] ? " active" : ""
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
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[12] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(12);
                  }}
                >
                  12
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[13] ? " active" : ""
                  }`}
                  onClick={() => {
                    SeatClick(13);
                  }}
                >
                  13
                </td>
                <td
                  className={`Seat-btnseat Seat-btnseat${
                    selectedSeat[14] ? " active" : ""
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
        <SeatStatus />
      </div>
    );
  };
  
  export default SeatContainer;