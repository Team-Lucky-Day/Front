import React, { useState, useEffect } from "react";
import "../CSS/container.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";

const AdminLogin = (props) => {
  const inputPlaceholder = ["Admin Password"];
  const [isTokenCheck, setIsTokenCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인 상태 확인
    const isLoggedInStorage = localStorage.getItem("authorization");
    if (isLoggedInStorage && isLoggedInStorage !== null) {
      setIsTokenCheck(true);
    }
  }, []);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  const [inputs, setInputs] = useState(["", ""]);
  const password = inputs;
  const handleLogin = () => {
    const password = inputs[0];

    axios({
      url: "http://localhost:8080/admin/login",
      method: "post",
      data: {
        u_pw: password,
      },
      baseURL: "http://localhost:3000/adminLogin",
    })
      .then(function (response) {
        // 성공적인 응답 (200 OK)
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "",
          customClass: {
            confirmButton: "btn-color",
          },
        });

        console.log("요청이 성공했습니다!");

        const data = `Bearer ${response.data}`;
        // 로그인 성공 시 localStorage에 데이터 저장
        localStorage.setItem("authorization", data);
        navigate("/admin");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "warning",
          title: "",
          text: "비밀번호를 다시 확인하세요",
          customClass: {
            confirmButton: "btn-color",
          },
        });
        if (error.response) {
          console.log("요청이 실패했습니다. 상태 코드:", error.response.status);
        } else {
          console.log("요청이 실패했습니다. 응답이 없습니다.");
        }
      });
  };

  return (
    <div>
      <Header/>
    <div className="container_adminLogin">
      <React.Fragment>
        <input
          type="password"
          placeholder={inputPlaceholder[0]}
          className="adminLogin_input"
          value={inputs[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
        />
      </React.Fragment>
      <button className="adminLogin_btn" onClick={handleLogin}>
        Login
      </button>
    </div>
    </div>
  );
};

export default AdminLogin;
