import React, { useState, useEffect } from "react";
import "../CSS/mypage.css";
import MypageElectronicReceiptDetail from "./MypageElectronicReceiptDetail";
import axios from "axios";

const MypageElectronicReceipt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseList, setPurchaseList] = useState([]);
  const [detailInfo, setDetailInfo] = useState([]);
  const [detailDate, setDetailDate] = useState("");

  useEffect( () => {
    const data = localStorage.getItem("authorization");
    
    axios({
      url : "http://localhost:8080/user/orderHistories",
      method : "post",
      baseURL : "http://localhost:3000/Mypage",
      headers : { Authorization : data},
    }).then( (res) => {
      console.log("요청 성공!!");
      setPurchaseList(res.data);
    }).catch( error => {
      console.log("요청 실패..!");
      console.log("오류!! >> " + error)
    })
  },[])

  const openModal = (info, date) => {
    setDetailInfo(info);
    setDetailDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="receiptMain">
        <div className="receiptHeader">
          매장에 방문하여 거래하신 건에 한하여 전자 영수증을 확인하실 수
          있습니다.
        </div>
        <div className="receiptBody">
          <table className="receiptTable">
            <tbody className="receiptTable-tbody">
              <tr className="receiptTable-thead">
                <td className="receiptTable-td-1">No</td>
                <td className="receiptTable-td-2">날짜</td>
                <td className="receiptTable-td-2">주문번호</td>
                <td className="receiptTable-td-3">전자영수증</td>
              </tr>
              <tr className="receiptTable-tbody-tr">
                <td className="receiptTable-td-1">1</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-3">
                  <button onClick={openModal}>보기</button>
                </td>
              </tr>
              {purchaseList.map( (purchaseInfo, index) => {
              <tr className="receiptTable-tbody-tr">
                <td className="receiptTable-td-1">{index + 1}</td>
                <td className="receiptTable-td-2">{purchaseInfo.orderDate}</td>
                <td className="receiptTable-td-2">{purchaseInfo.orderCode}</td>
                <td className="receiptTable-td-3">
                  <button onClick={openModal(purchaseInfo.details, purchaseInfo.orderDate)}>보기</button>
                </td>
              </tr>
              })}
              {/* <tr className="receiptTable-tbody-tr">
                <td className="receiptTable-td-1">2</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-3">
                  <button onClick={openModal}>보기</button>
                </td>
              </tr>
              <tr className="receiptTable-tbody-tr">
                <td className="receiptTable-td-1">3</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-3">
                  <button onClick={openModal}>보기</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && <MypageElectronicReceiptDetail 
      closeModal={closeModal} 
      detailInfo = {detailInfo} 
      dateInfo = {detailDate} 
      orderDate = {purchaseList.orderCode}/>}
    </>
  );
};

export default MypageElectronicReceipt;
