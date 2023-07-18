import React, {useState, useEffect}  from "react";

const MypageElectronicReceiptDetail = (props) => {
  const [totalPrice, setTotalPrice] = useState();

  useEffect( () => {
    let price = 0;

    props.detailInfo.forEach( detailInfoList => {
      price = price + detailInfoList.detailPrice;
    })

    setTotalPrice(price)

  },[])

  return (
    <div className="modal-overlay">
      <div className="receiptdetail-wrap">
        <div className="receiptdetail-head">
          <div className="receiptdetail-head-logo">LuckyDay</div>
          <div className="receiptdetail-head-detail">
            <div className="receiptdetail-head-date">{props.dateInfo}</div>
            <div className="receiptdetail-head-number">{props.orderDate}</div>
          </div>
        </div>
        <div className="receiptdetail-body">
          <div className="receiptdetail-body-header">
            <div className="receiptdetail-body-header-detail">
              <div className="receiptdetail-body-header-detail-name">
                {props.detailInfo[0].userName}
              </div>
              <table className="receiptdetail-body-header-detail-menu">
                {props.detailInfo.map( detailInfo => {
                  <tr>
                    <td>{detailInfo.menuName}</td>
                    <td>{detailInfo.detailPrice / detailInfo.detailCount}</td>
                    <td>{detailInfo.detailCount}</td>
                    <td>{detailInfo.detailPrice}</td>
                  </tr>
                })}
                <tr className="receiptdetail-body-header-detail-sumPrice">
                  <td>결제금액</td>
                  <td></td>
                  <td></td>
                  <td>{totalPrice}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="close-area" onClick={props.closeModal}>
          <button>close</button>
        </div>
      </div>
    </div>
  );
};

export default MypageElectronicReceiptDetail;
