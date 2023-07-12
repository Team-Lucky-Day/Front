
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
        baseURL: "http://localhost:3000/Admin",
      })
        .then(function (response) {})
        .catch(function (error) {
          alert("error");
        });
    };

  
    return (
      <div className="sheetChange">
        <button className="orderTable">Order Table</button>
        <button className="adminEntrance">Entrance</button>
        <div className="seatContainer">
          <button
            className={`btnseat btnseat1${selectedSeat[1] ? " active" : ""}`}
            onClick={() => {
              SeatClick(1);
            }}
          >
            1번좌석
          </button>

          <button
            className={`btnseat btnseat2${selectedSeat[2] ? " active" : ""}`}
            onClick={() => SeatClick(2)}
          >
            2번좌석
          </button>

          <button
            className={`btnseat btnseat3${selectedSeat[3] ? " active" : ""}`}
            onClick={() => SeatClick(3)}
          >
            3번좌석
          </button>

          <button
            className={`btnseat btnseat4${selectedSeat[4] ? " active" : ""}`}
            onClick={() => SeatClick(4)}
          >
            4번좌석
          </button>

          <button
            className={`btnseat btnseat5${selectedSeat[5] ? " active" : ""}`}
            onClick={() => SeatClick(5)}
          >
            5번좌석
          </button>

          <button
            className={`btnseat btnseat6${selectedSeat[6] ? " active" : ""}`}
            onClick={() => SeatClick(6)}
          >
            6번좌석
          </button>

          <button
            className={`btnseat btnseat7${selectedSeat[7] ? " active" : ""}`}
            onClick={() => SeatClick(7)}
          >
            7번좌석
          </button>

          <button
            className={`btnseat btnseat8${selectedSeat[8] ? " active" : ""}`}
            onClick={() => SeatClick(8)}
          >
            8번좌석
          </button>

          <button
            className={`btnseat btnseat9${selectedSeat[9] ? " active" : ""}`}
            onClick={() => SeatClick(9)}
          >
            9번좌석
          </button>

          <button
            className={`btnseat btnseat10${selectedSeat[10] ? " active" : ""}`}
            onClick={() => SeatClick(10)}
          >
            10번좌석
          </button>

          <button
            className={`btnseat btnseat11${selectedSeat[11] ? " active" : ""}`}
            onClick={() => SeatClick(11)}
          >
            11번좌석
          </button>

          <button
            className={`btnseat btnseat12${selectedSeat[12] ? " active" : ""}`}
            onClick={() => SeatClick(12)}
          >
            12번좌석
          </button>

          <button
            className={`btnseat btnseat13${selectedSeat[13] ? " active" : ""}`}
            onClick={() => SeatClick(13)}
          >
            13번좌석
          </button>

          <button
            className={`btnseat btnseat14${selectedSeat[14] ? " active" : ""}`}
            onClick={() => SeatClick(14)}
          >
            14번좌석
          </button>

          <button
            className={`btnseat btnseat15${selectedSeat[15] ? " active" : ""}`}
            onClick={() => SeatClick(15)}
          >
            15번좌석
          </button>
        </div>
      </div>
    );
};

export default SeatContainer;