import React from "react";
import { useState } from "react";
import './Style.css'

export default function Dessert() {

    const [isModalOpen, setIsModalOpen] = useState('modalId');

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
                    <button onClick={() => openModal('d_modal1')} type="button" className="btnMenu" id="btn_d1">
                        < img src="img/d1.jpg" className="img" alt="Dessert" /></button>
                        {setIsModalOpen === 'd_modald1'}
          {isModalOpen==='d_modal1' && (
            <div className="container">
              < img src="img/d1.jpg" className="img" alt="Dessert" />
              <p>마카롱</p>
              <p><text className="text">마카롱 맛있읍니다.</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}


                    <button onClick={() => openModal('d_modal2')} type="button" className="btnMenu" id="btn_d2">
                        < img src="img/d2.jpg" className="img" alt="Dessert" /></button>
                        {setIsModalOpen === 'd_modald2'}
          {isModalOpen==='d_modal2' && (
            <div className="container">
             < img src="img/d2.jpg" className="img" alt="Dessert" />
              <p>허니브레드</p>
              <p><text className="text">JYP의 허니 아니고 LD의 허니브레드입니다</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}


                    <button onClick={() => openModal('d_modal3')} type="button" className="btnMenu" id="btn_d3">
                        < img src="img/d3.jpg" className="img" alt="Dessert" /></button>
                        {setIsModalOpen === 'd_modald3'}
          {isModalOpen==='d_modal3' && (
            <div className="container">
             < img src="img/d3.jpg" className="img" alt="Dessert" />
              <p>치즈케이크</p>
              <p><text className="text">치즈버거 말고 띠뜨케이크 사듀뗴여</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}

                </div>


                <div className="b_div">
                    <button onClick={() => openModal('d_modal4')} type="button" className="btnMenu" id="btn_d4">
                        < img src="img/d4.jpg" className="img" alt="Dessert" /></button>
                        {setIsModalOpen === 'd_modald4'}
          {isModalOpen==='d_modal4' && (
            <div className="container">
              < img src="img/d4.jpg" className="img" alt="Dessert" />
              <p>크로플</p>
              <p><text className="text">크롱도 먹다 기절한 크로플</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}


                    <button onClick={() => openModal('d_modal5')} type="button" className="btnMenu" id="btn_d">
                        < img src="img/d5.jpg" className="img" alt="Dessert" /></button>
                        {setIsModalOpen === 'd_modald5'}
          {isModalOpen==='d_modal5' && (
            <div className="container">
              < img src="img/d5.jpg" className="img" alt="Dessert" />
              <p>센드위치</p>
              <p><text className="text">아침에 센드위치 먹으면 멋임음 점수 +10점</text></p>
              <button className="btn" onClick={closeModal}>닫기</button>
              <button className="btn">Keep</button>
            </div>
          )}

                </div>
            </div>
        </>)

};