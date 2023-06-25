import React, { useState } from "react";
import Swal from "sweetalert2";
const MypageCustomerCenter = () => {
  const [textareaValue, setTextareaValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const byteLength = new Blob([inputValue]).size;

    if (byteLength <= 2500) {
      setTextareaValue(inputValue);
    }
  };
  const handleButtonClick = () => {
    Swal.fire({
      icon: "success",
      title: "",
      text: "의견을 남겨주셔서 감사합니다.",
      customClass: {
        confirmButton: "btn-color",
      },
    });
  };
  return (
    <>
      <div className="receiptMypageCustomerCenterMain">
        <div className="receiptMypageCustomerCenterMain-Header">
          LD Cafe는 고객님의 즐겁고 행복한 시간을 위해 정성을 다하고 있습니다.
          <br />
          이용하시면서 불편한 점이나 개선이 필요한 점이 있다면 알려주세요. 좀 더
          나은 서비스로 보답하겠습니다.
        </div>
        <hr />
        <div className="receiptMypageCustomerCenterMain-Body">
          <table className="receiptMypageCustomerCenterMain-Body-table">
            <tr>
              <td>문의 분류</td>
              <td>
                <select className="receiptMypageCustomerCenterMain-Body-table-select">
                  <optgroup label="회원">
                    <option>회원정보</option>
                  </optgroup>
                  <optgroup label="결제/환불">
                    <option>결제수단</option>
                    <option>결제내역</option>
                    <option>취소/교환/환불</option>
                  </optgroup>
                  <optgroup label="음료/푸드/상품">
                    <option>제품/상품</option>
                  </optgroup>
                  <optgroup label="매장">
                    <option>매장 정보</option>
                  </optgroup>
                  <optgroup label="기타">
                    <option>기타</option>
                  </optgroup>
                </select>
              </td>
            </tr>
            <tr>
              <td>휴대폰 번호</td>
              <td>
                <input
                  type="text"
                  className="receiptMypageCustomerCenterMain-Body-table-input"
                />
                <br />{" "}
                <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                  입력된 연락처를 우선으로 고객센터(또는 매장)에서 연락드릴 수
                  있습니다.
                </div>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  className="receiptMypageCustomerCenterMain-Body-table-textarea"
                  value={textareaValue}
                  onChange={handleChange}
                  style={{ width: "400px", height: "200px", resize: "none" }}
                  placeholder="의견을 등록해주세요. 등록된 의견은 처리가 시작되면 수정이 불가하오니 이 점 양지하여 주시기 바랍니다."
                />
                <div>{`${new Blob([textareaValue]).size} / 2500 bytes`}</div>
              </td>
            </tr>
          </table>
          <div className="receiptMypageCustomerCenterMain-Body-submit">
            <button onClick={handleButtonClick}>등록하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageCustomerCenter;
