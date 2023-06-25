import React from "react";

const MypageElectronicReceiptDetail = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="receiptdetail-wrap">
        <div className="receiptdetail-head">
          <div className="receiptdetail-head-logo">LuckyDay</div>
          <div className="receiptdetail-head-detail">
            <div className="receiptdetail-head-date">2023-06-22</div>
            <div className="receiptdetail-head-number">No.1</div>
          </div>
        </div>
        <div className="receiptdetail-body">
          <div className="receiptdetail-body-header">
            <div className="receiptdetail-body-header-detail">
              <div className="receiptdetail-body-header-detail-name">
                염진희
              </div>
              <table className="receiptdetail-body-header-detail-menu">
                <tr>
                  <td>LD라떼</td>
                  <td>4500</td>
                  <td>1</td>
                  <td>4500</td>
                </tr>
                <tr>
                  <td>솔트 카라멜 휘낭시에</td>
                  <td>6500</td>
                  <td>2</td>
                  <td>13000</td>
                </tr>
                <tr className="receiptdetail-body-header-detail-sumPrice">
                  <td>결제금액</td>
                  <td></td>
                  <td></td>
                  <td>17500</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="close-area" onClick={closeModal}>
          <button>close</button>
        </div>
      </div>
    </div>
  );
};

export default MypageElectronicReceiptDetail;
