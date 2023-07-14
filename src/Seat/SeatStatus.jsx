import React from "react";

const SeatStatus = () => {
  return (
    <>
      <div className="Seat-seatStatus-container">
        <h3>좌석 현황</h3>
        <div className="Seat-seatStatus-Box">
          <table className="Seat-seatStatus-Box-table">
            <tr>
              <td
                style={{
                  width: "2rem",
                  height: "1rem",
                  backgroundColor: "#ccc",
                  borderRadius: "7px",
                  margin: "1rem",
                }}
              ></td>
              <td>사용가능 좌석</td>
            </tr>
            <tr>
              <td
                style={{
                  width: "2rem",
                  height: "1rem",
                  backgroundColor: "#ff0000",
                  borderRadius: "7px",
                  margin: "0px 1rem",
                }}
              ></td>
              <td>사용불가 좌석</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default SeatStatus;