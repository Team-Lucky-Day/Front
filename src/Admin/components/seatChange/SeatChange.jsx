import axios from "axios";
import React, {useState, useEffect} from "react";
import "./seatChange.css";
import Swal from "sweetalert2";

const SeatChange =() => {
    const [currentSituation, setCurrentSituation] = useState([]);
    const [tableNumber, setTableNumber] = useState(0);
    useEffect( () => {
        console.log("rendering start!!");
        const data = localStorage.getItem("authorization");
        

        axios({
            url : "http://localhost:8080/admin/tableList",
            method : "post",
            baseURL : "http://localhost:3000/admin",
            headers : { Authorization : data}
        }).then( (response) => {
            console.log("요청 성공!!");
            console.log(response.data);
            setCurrentSituation(response.data);
        }).catch( (error) => {
            console.log("요청 실패!! >> 상태메세지 : " + error);
        })
    }, []);

    const changeTableState = (seatNumber) =>{
      Swal.fire({
        icon : "warning",
        title : currentSituation[seatNumber -1].useTable ? "체크아웃" : "체크인" ,
        text : `${seatNumber}번 ${currentSituation[seatNumber - 1].useTable ? "좌석을 사용하시겠습니까?" : "좌석의 사용을 취소하기겠습니까?"} `,
        showCancelButton : true,
        confirmButtonText : currentSituation[seatNumber -1].useTable ? "해제" : "사용",
        cancelButtonText : "취소",
      }).then( (response) => {
        if (response.isConfirmed) {
          const data = localStorage.getItem("authorization");
          setTableNumber(seatNumber);

          // const formData = new FormData();

          // formData.append("seatNum", seatNumber);
          // formData.append("seatState",currentSituation[seatNumber-1].useTable );

          axios({
            url : "http://localhost:8080/table/update",
            method : "put",
            data : {
              seatNum : seatNumber,
              seatState : currentSituation[seatNumber-1].useTable
            },
            baseURL : "http://localhost:3000/Admin",
            headers : { Authorization : data},
          }).then( response => {
            if (response.data === true){
              window.location.reload();
            }else{
              alert("서버에서 좌석상태 변경을 실패하였습니다.");
            }
          }).catch( error => {
            console.log("자리사용 변경 실패 >> " + error);
            alert("자리사용 변경에 실패하였습니다.");
          })
          
        }else{
          alert("취소되었습니다.");
        }
      })
    };

    return(
        <div className="Admin-btnseat-container">
            <h3 className="Admin-seatEditTitle">
                Seat Edit
            </h3>
            <div className="Admin-btnseat-container-Table-body">
                <table className="Admin-seatContainer-Table">
                    <tbody>
                        <tr>
                            <td
                            rowSpan={2}
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[0] && currentSituation[0].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(1)}}>
                                1
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[2] && currentSituation[2].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(3)}}>
                                3
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[3] && currentSituation[3].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(4)}}>
                                4
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[4] && currentSituation[4].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(5)}}>
                                5
                            </td>
                            <td
                            rowSpan={4}
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[14] && currentSituation[14].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(15)}}>
                                15
                            </td>
                        </tr>

                        <tr>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[5] && currentSituation[5].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(6)}}>
                                6
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[6] && currentSituation[6].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(7)}}>
                                7
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[7] && currentSituation[7].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(8)}}>
                                8
                            </td>
                        </tr>

                        <tr>
                            <td
                            rowSpan={2}
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[1] && currentSituation[1].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(2)}}>
                                2
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[8] && currentSituation[8].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(9)}}>
                                9
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[9] && currentSituation[9].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(10)}}>
                                10
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[10] && currentSituation[10].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(11)}}>
                                11
                            </td>
                        </tr>
                        <tr>
                        <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[11] && currentSituation[11].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(12)}}>
                                12
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[12] && currentSituation[12].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(13)}}>
                                13
                            </td>
                            <td
                            className={`Admin-btnseat Admin-btnseat ${
                                currentSituation[13] && currentSituation[13].useTable ? "active" : " "
                            }`}
                            onClick={() => 
                            {changeTableState(14)}}>
                                14
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SeatChange;