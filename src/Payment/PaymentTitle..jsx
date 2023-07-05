import React from "react";

const PaymentTitle = ({ paymentTitle, paymentTitleInfo }) => {
  return (
    <div className="payment-main">
      <div className="payment-main-Title">{paymentTitle}</div>
      <p className="payment-Body-p">{paymentTitleInfo}</p>
    </div>
  );
};

export default PaymentTitle;
