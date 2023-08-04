import React, { useState, useEffect } from "react";
import MypageMenuBarContainer from "./MypageMenuBarContainer";
import SignUpInput from "../Login_SignUp/SignUp/SignUpInput";
import MyMenuChart from "./MyMenuChart";
import MyMenuElectronicReceipt from "./MypageElectronicReceipt";
import MypageCustomerCenter from "./MypageCustomerCenter";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const MypageMenuBar = () => {
  const [userInfo, setUserInfo] = useState([])

  useEffect( () => {
    const data = localStorage.getItem("authorization");
    axios({
      url: "http://localhost:8080/user/userInfo",
      method: "post",
      baseURL: "http://localhost:3000/Mypage",
      headers: { Authorization: data },
    }).then( response => {
      console.log("요청성공 !!");
      console.log(response.data);
      console.log(typeof(response.data));
      setUserInfo(response.data);
      setInputs(response.data)
    }).catch( error => {
      console.log("요청 실패..! >> " + error)
    })

    // const infoArray = [];

    // infoArray.push
  },[])

  

  const data = [
    {
      id: "japan",
      color: "hsl(34, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 123,
        },
        {
          x: "helicopter",
          y: 287,
        },
        {
          x: "boat",
          y: 44,
        },
        {
          x: "train",
          y: 1,
        },
        {
          x: "subway",
          y: 241,
        },
        {
          x: "bus",
          y: 63,
        },
        {
          x: "car",
          y: 77,
        },
        {
          x: "moto",
          y: 69,
        },
        {
          x: "bicycle",
          y: 256,
        },
        {
          x: "horse",
          y: 240,
        },
        {
          x: "skateboard",
          y: 95,
        },
        {
          x: "others",
          y: 60,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(55, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 133,
        },
        {
          x: "helicopter",
          y: 183,
        },
        {
          x: "boat",
          y: 286,
        },
        {
          x: "train",
          y: 283,
        },
        {
          x: "subway",
          y: 278,
        },
        {
          x: "bus",
          y: 4,
        },
        {
          x: "car",
          y: 298,
        },
        {
          x: "moto",
          y: 3,
        },
        {
          x: "bicycle",
          y: 75,
        },
        {
          x: "horse",
          y: 112,
        },
        {
          x: "skateboard",
          y: 22,
        },
        {
          x: "others",
          y: 192,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(248, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 78,
        },
        {
          x: "helicopter",
          y: 274,
        },
        {
          x: "boat",
          y: 181,
        },
        {
          x: "train",
          y: 281,
        },
        {
          x: "subway",
          y: 291,
        },
        {
          x: "bus",
          y: 247,
        },
        {
          x: "car",
          y: 36,
        },
        {
          x: "moto",
          y: 90,
        },
        {
          x: "bicycle",
          y: 284,
        },
        {
          x: "horse",
          y: 256,
        },
        {
          x: "skateboard",
          y: 13,
        },
        {
          x: "others",
          y: 242,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(293, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 24,
        },
        {
          x: "helicopter",
          y: 125,
        },
        {
          x: "boat",
          y: 277,
        },
        {
          x: "train",
          y: 97,
        },
        {
          x: "subway",
          y: 197,
        },
        {
          x: "bus",
          y: 252,
        },
        {
          x: "car",
          y: 7,
        },
        {
          x: "moto",
          y: 277,
        },
        {
          x: "bicycle",
          y: 27,
        },
        {
          x: "horse",
          y: 194,
        },
        {
          x: "skateboard",
          y: 273,
        },
        {
          x: "others",
          y: 166,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(324, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 142,
        },
        {
          x: "helicopter",
          y: 229,
        },
        {
          x: "boat",
          y: 143,
        },
        {
          x: "train",
          y: 102,
        },
        {
          x: "subway",
          y: 153,
        },
        {
          x: "bus",
          y: 87,
        },
        {
          x: "car",
          y: 181,
        },
        {
          x: "moto",
          y: 226,
        },
        {
          x: "bicycle",
          y: 6,
        },
        {
          x: "horse",
          y: 128,
        },
        {
          x: "skateboard",
          y: 293,
        },
        {
          x: "others",
          y: 176,
        },
      ],
    },
  ];

  const [personalInfo, setPersonalInfo] = React.useState(false);
  const [electronicReceipt, setElectronicReceipt] = React.useState(false);
  const [myMenu, setMyMenu] = React.useState(false);
  const [customerCenter, setCustomerCenter] = React.useState(false);
  const [memberWithdrawal, setMemberWithdrawal] = React.useState(false);
  const inputPlaceholder = [
    " Username",
    " email",
    " Password",
    " Phone Number",
    " Card Number",
    " Card Password",
    " CVC",
    " Validity (유효기간)",
  ];

  const [inputs, setInputs] = React.useState(Array(8).fill(""));
  const [pw_inputs, setPw_inputs] = useState(Array(2).fill(""));
  const navigate = useNavigate();
  const handleClick = (menu) => {
    switch (menu) {
      case "회원정보 수정":
        setPersonalInfo(true);
        setElectronicReceipt(false);
        setMyMenu(false);
        setCustomerCenter(false);
        setMemberWithdrawal(false);
        break;
      case "전자영수증":
        setPersonalInfo(false);
        setElectronicReceipt(true);
        setMyMenu(false);
        setCustomerCenter(false);
        setMemberWithdrawal(false);
        break;
      case "나의 메뉴":
        setPersonalInfo(false);
        setElectronicReceipt(false);
        setMyMenu(true);
        setCustomerCenter(false);
        setMemberWithdrawal(false);
        break;
      case "고객 센터":
        setPersonalInfo(false);
        setElectronicReceipt(false);
        setMyMenu(false);
        setCustomerCenter(true);
        setMemberWithdrawal(false);
        break;
      case "회원 탈퇴":
        setPersonalInfo(false);
        setElectronicReceipt(false);
        setMyMenu(false);
        setCustomerCenter(false);
        setMemberWithdrawal(true);
        break;
      default:
        break;
    }
  };
  const [reason, setReason] = useState("");
  const handleButtonClick = () => {

    Swal.fire({
      icons: "question",
      title : "",
      text : "정말 회원 탈퇴를 하시겠습니까?",
      denyButtonText : "취소",
      customClass: {
        confirmButton : "btn-color",
      },
    }).then( response =>{
      if ( response.isConfirmed){
        console.log(pw_inputs);
        console.log(pw_inputs[0]);
        console.log(pw_inputs[1]);

        if (pw_inputs[0] === pw_inputs[1]){

          const data = localStorage.getItem("authorization");
  
          axios({
            url: "http://localhost:8080/user/withdrawal",
            method: "post",
            baseURL : "http://localhost:3000/Mypage",
            headers : { Authorization : data},
            data : {
              reason : reason,
              password : pw_inputs[0],
            },
          }).then(response => {
            console.log(response.data);
            if (response.data === true){
              Swal.fire({
                icon: "success",
                title: "",
                text: "회원 탈퇴되었습니다.",
                customClass: {
                  confirmButton: "btn-color",
                },
              }).then( response => {
                localStorage.removeItem("authorization");
                navigate("/");
              });
    
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }else{
              Swal.fire({
                icon: "error",
                title: "Server Error",
                text: "탈퇴 처리중 문제가발생했습니다. 다시 시도해주세요.",
                customClass: {
                  confirmButton: "btn-color",
                },
              });
            }
            
  
          }).catch( error => {
            console.log("ERROR >>> " + error);
          });
  
        }else{
          Swal.fire({
            icon : "error",
            title: "비밀번호 불일치",
            text : "두 비밀번호가 서로 일치하지 않습니다. 다시 입력해주세요.",
          })
        }
      }
      
    })

    
  };
  const withdrawalOption = {
    option1: [
      {
        value: "",
        name: "선택해주세요.",
      },
      {
        value: "너무 많이 이용해요",
        name: "너무 많이 이용해요",
      },
      {
        value: "더 이용 하고 싶은 서비스가 없어요",
        name: "더 이용 하고 싶은 서비스가 없어요",
      },
      {
        value: "새 계정을 만들고 싶어요",
        name: "새 계정을 만들고 싶어요",
      },
      {
        value: "기타",
        name: "기타",
      },
    ],
  };

  const handleInputChange = (index, value) =>{
    const passwordInputs = [...pw_inputs];
    passwordInputs[index] = value;
    setPw_inputs(passwordInputs);
    console.log(pw_inputs[0]);
    console.log(pw_inputs[1]);
  }

  const handleSelectChange = (e) => {
    setReason(e.target.value);
  }

  const handleEditInput = (index, value) => {
    const newEditValue = [...inputs];
    newEditValue[index] = value;
    setInputs(newEditValue);
    console.log(inputs);
  }

  const editUserInfo = () => {
    Swal.fire({
      title : "이대로 수정하시겠습니까?",
      showDenyButton: true,
      confirmButtonText : "수정",
      denyButtonText : "취소",
    }).then( (result) => { // "수정"버튼을 눌렀을 때
      if (result.isConfirmed){
        const userCode = localStorage.getItem("authorization");
        axios({
          url: "http://localhost:8080/user/updateUserInfo",
          method: "post",
          data: {
            u_name: inputs[0],
            u_email: inputs[1],
            u_pw: inputs[2],
            u_phone: inputs[3],
            c_number : inputs[4],
            cardPassword : inputs[5],
            cardCvc : inputs[6],
            cardDate : inputs[7]
          },
          baseURL: "http://localhost:3000/Mypage",
          headers : { Authorization : userCode},
        }).then( response => {
          if (response.status === 200){
            Swal.fire({
              icon: "success",
              title: "수정완료",
            })
          }else{
            Swal.fire({
              icon : "error",
              title : "수정 실패..!",
            })
          }



        })
      }
    })
  }

  return (
    <>
      <div className="mypageMenuBar">
        <MypageMenuBarContainer
          menuName="회원정보 수정"
          onClick={() => handleClick("회원정보 수정")}
        />
        <MypageMenuBarContainer
          menuName="전자영수증"
          onClick={() => handleClick("전자영수증")}
        />
        <MypageMenuBarContainer
          menuName="나의 메뉴"
          onClick={() => handleClick("나의 메뉴")}
        />
        <MypageMenuBarContainer
          menuName="고객 센터"
          onClick={() => handleClick("고객 센터")}
        />
        <MypageMenuBarContainer
          menuName="회원 탈퇴"
          onClick={() => handleClick("회원 탈퇴")}
        />
      </div>
      {personalInfo && (
        <div className="mypageMenuBarpersonal">
          <h3>회원정보 수정</h3>
          <div
            className="mypageMenuBarContainerMain
        "
          >
            <div>
              <div className="personalInfoImg">
                <img src="/img/mypageuser.png" width={70} height={70} />
              </div>
              <div className="mypageMenuBarContainerMainInput">
                    {userInfo.map( (infoList, index) => (
                      <React.Fragment key={index}>
                        <span>{inputPlaceholder[index]}</span>
                        <div className="input-wrapper">
                          <input 
                          type="text"
                          className="mypage-input" 
                          value={inputs[index]}
                          onChange={ (e) => handleEditInput(index, e.target.value)}
                          />
                        </div>
                      </React.Fragment>
                    ))}
              </div>
              <button 
              className="mypage-personalInfo-button"
              onClick={editUserInfo}>
                회원정보 수정
              </button>
            </div>
          </div>
        </div>
      )}
      {electronicReceipt && (
        <div className="mypageMenuBarpersonal">
          <h3>전자 영수증</h3>
          <div className="mypageMenuBarContainerMain">
            <MyMenuElectronicReceipt />
          </div>
        </div>
      )}
      {myMenu && (
        <div className="mypageMenuBarpersonal">
          <h3>나의 메뉴</h3>
          <div className="mypageMenuBarMyMenu">
            <MyMenuChart />
          </div>
        </div>
      )}
      {customerCenter && (
        <div className="mypageMenuBarpersonal">
          <h3>고객 센터</h3>
          <div className="mypageMenuBarContainerMain">
            <MypageCustomerCenter />
          </div>
        </div>
      )}
      {memberWithdrawal && (
        <div className="mypageMenuBarpersonal">
          <h3>회원 탈퇴</h3>
          <div className="mypageMenuBarContainerMain">
            <h4 className="withdrawalCheck">LD 탈퇴 전 확인하세요</h4>
            <div
              style={{
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "GmarketSansMedium",
              }}
            >
              탈퇴하시면 이용 중인 모든 서비스 정보가 삭제됩니다.
              <br />
              <br />
              계정을 삭제하시려는 이유를 말씀해주세요. 제품 개선에 중요자료로
              활용하겠습니다.
              <br />
              <br />
            </div>
            <select className="select" onChange={handleSelectChange}>
              {withdrawalOption.option1.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
            <div className="mypageMenuBarWithdrawal">
              {inputs.slice(0, 2).map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <SignUpInput
                      type="password" // 패스워드 입력 타입
                      className="input"
                      value={inputs[index + 2]}
                      placeholder={inputPlaceholder[index + 2]}
                      onChange={e => handleEditInput(index, e.target.value)}
                    />
                  </React.Fragment>
                );
              })}
              <button
                className="mypageMenuBarWithdrawalButton"
                onClick={handleButtonClick}
              >
                회원탈퇴
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MypageMenuBar;
