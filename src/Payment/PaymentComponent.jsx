import React, { useState } from "react";
import PaymentTitle from "./PaymentTitle.";
const PaymentComponent = () => {
  const Title = {
    title1: {
      paymentTitle: "주문 내역",
      paymentTitleInfo: "주문 내역을 확인해주세요.",
    },
    title2: {
      paymentTitle: "결제 수단",
      paymentTitleInfo: "결제 방식을 선택해주세요.",
    },
  };
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <>
      <div className="payment-Title">결제</div>
      <div className="payment-Body">
        <PaymentTitle {...Title.title1} />
        <div className="payment-OrderHistory">
          <table className="payment-Table">
            <tr>
              <td>주문 상품</td>
              {/* 주문 음료 명*/}
              <td>(ice)아메리카노</td>
              {/* 주문 음료 개수*/}
              <td>1개</td>
            </tr>
            <tr className="payment-Table-lastChild">
              <td>결제 금액</td>
              <td></td>
              {/* 주문 음료 개수*/}
              <td>4500 원</td>
            </tr>
          </table>
        </div>
        <hr />
        <div>
          <PaymentTitle {...Title.title2} />
          <div className="payment-Method">
            <label>
              <input
                type="radio"
                value="card"
                name="paymentMethod"
                checked={paymentMethod === "card"}
                onChange={handlePaymentMethodChange}
              />
              신용카드
            </label>
            <label>
              <input
                type="radio"
                value="easyCard"
                name="paymentMethod"
                checked={paymentMethod === "easyCard"}
                onChange={handlePaymentMethodChange}
              />
              간편카드 결제
            </label>
            {paymentMethod === "easyCard" && <button>카드 정보 입력</button>}
          </div>
        </div>
        <button className="paymentComponent-button">결제하기</button>
      </div>
    </>
  );
};

export default PaymentComponent;
