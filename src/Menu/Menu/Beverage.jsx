import React from "react";
import { useState } from "react";
import "./Style.css";

export default function Beverage() {
  const [isModalOpen, setIsModalOpen] = useState("modalId");

  const openModal = (modalId) => {
    setIsModalOpen(modalId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div className="b_div">
          <button
            onClick={() => openModal("b_modal1")}
            type="button"
            className="btnMenu"
            id="btn_b1"
          >
            <img src="img/b1.jpg" className="img" alt="Beverage" />
          </button>
          {setIsModalOpen === "b_modald5"}
          {isModalOpen === "b_modal1" && (
            <div className="containerMenu">
              <img src="img/b1.jpg" className="img" alt="Dessert" />
              <p>아이스티</p>
              <p>
                <text className="text">아이스티 맛 Zㅣ존이다</text>
              </p>
              <button className="btnMenu" onClick={closeModal}>
                닫기
              </button>
              <button className="btnMenu">Keep</button>
            </div>
          )}

          <button
            onClick={() => openModal("b_modal2")}
            type="button"
            className="btnMenu"
            id="btn_b2"
          >
            <img src="img/b2.jpg" className="img" alt="Beverage" />
          </button>
          {setIsModalOpen === "b_modald2"}
          {isModalOpen === "b_modal2" && (
            <div className="containerMenu">
              <img src="img/b2.jpg" className="img" alt="Dessert" />
              <p>초코버블티</p>
              <p>
                <text className="text">초코+버블=근본</text>
              </p>
              <button className="btnMenu" onClick={closeModal}>
                닫기
              </button>
              <button className="btnMenu">Keep</button>
            </div>
          )}

          <button
            onClick={() => openModal("b_modal3")}
            type="button"
            className="btnMenu"
            id="btn_b3"
          >
            <img src="img/b3.jpg" className="img" alt="Beverage" />
          </button>
          {setIsModalOpen === "b_modald3"}
          {isModalOpen === "b_modal3" && (
            <div className="containerMenu">
              <img src="img/b3.jpg" className="img" alt="Dessert" />
              <p>자몽에이드</p>
              <p>
                <text className="text">쓰지만 달다</text>
              </p>
              <button className="btnMenu" onClick={closeModal}>
                닫기
              </button>
              <button className="btnMenu">Keep</button>
            </div>
          )}
        </div>

        <div className="b_div">
          <button
            onClick={() => openModal("b_modal4")}
            type="button"
            className="btnMenu"
            id="btn_b4"
          >
            <img src="img/b4.png" className="img" alt="Beverage" />
          </button>
          {setIsModalOpen === "b_modald4"}
          {isModalOpen === "b_modal4" && (
            <div className="containerMenu">
              <img src="img/b4.png" className="img" alt="Dessert" />
              <p>LD스무디</p>
              <p>
                <text className="text">
                  LD만의 시!그!니!처! 스무디 폼미쳤다
                </text>
              </p>
              <button className="btnMenu" onClick={closeModal}>
                닫기
              </button>
              <button className="btnMenu">Keep</button>
            </div>
          )}

          <button
            onClick={() => openModal("b_modal5")}
            type="button"
            className="btnMenu"
            id="btn_b5"
          >
            <img src="img/b5.jpg" className="img" alt="Beverage" />
          </button>
          {setIsModalOpen === "b_modald5"}
          {isModalOpen === "b_modal5" && (
            <div className="containerMenu">
              <img src="img/b5.jpg" className="img" alt="Dessert" />
              <p>얼그레이 차</p>
              <p>
                <text className="text">얼그레이 마시러올래? 얼!그레이</text>
              </p>
              <button className="btnMenu" onClick={closeModal}>
                닫기
              </button>
              <button className="btnMenu">Keep</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
