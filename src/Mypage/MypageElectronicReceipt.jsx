import React, { useState } from "react";
import "../CSS/mypage.css";
import MypageElectronicReceiptDetail from "./MypageElectronicReceiptDetail";

const MypageElectronicReceipt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
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
                <td className="receiptTable-td-2">시간</td>
                <td className="receiptTable-td-3">전자영수증</td>
              </tr>
              <tr className="receiptTable-tbody-tr">
                <td className="receiptTable-td-1">1</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-3">
                  <button onClick={openModal}>보기</button>
                </td>
              </tr>{" "}
              <tr className="receiptTable-tbody-tr">
                <td className="receiptTable-td-1">2</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-3">
                  <button onClick={openModal}>보기</button>
                </td>
              </tr>{" "}
              <tr className="receiptTable-tbody-tr">
                <td className="receiptTable-td-1">3</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-2">ssss</td>
                <td className="receiptTable-td-3">
                  <button onClick={openModal}>보기</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && <MypageElectronicReceiptDetail closeModal={closeModal} />}
    </>
  );
};

export default MypageElectronicReceipt;
