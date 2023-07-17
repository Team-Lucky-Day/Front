import React, { useEffect, useState } from "react";
import "./editMenu.css";

import axios from "axios";
import Swal from "sweetalert2";

export default function EditMenu() {//훅은 함수형 컴포넌트에서 다양한 기능을 사용하게 해주는 라이브러리

    const [menuList, setMenuList] = useState([]);

    // <-------------------------------------------------->
    const [editTab, editActiveTab] = useState(0);//상태값 관리

    const [coffeeTitle, setCoffeeTitle] = useState('');
    const [coffeeDetail, setCoffeeDetail] = useState('');
    const [coffeePrice, setCoffeePrice] = useState('');
    const [imgFile, setImgFile] = useState(null);

// <-------------------------------------------------->
    const [beverageTitle, setBeverageTitle] = useState('');
    const [beverageDetail, setBeverageDetail] = useState('');
    const [beveragePrice, setBeveragePrice] = useState('');

// <-------------------------------------------------->
    const [desertTitle, setDesertTitle] = useState('');
    const [desertDetail, setDesertDetail] = useState('');
    const [desertPrice, setDesertPrice] = useState('');
    
// <-------------------------------------------------->
    useEffect(() => {// 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
        console.log('render');
        
        const getMenuList = async () => {
            try{
                const response = await axios.get('http://localhost:8080/admin/menuList');
                setMenuList(response.data);
                // console.log(response);
            }catch(error){
                console.error("에러메세지 : " + error);
            }
        };
        


        getMenuList();
     }, []);

     
// <------------------------ editTabClick Method -------------------------->
    const editTabClick = (editIdx) => {
        editActiveTab(editIdx);
    };

    // << CoffeeMenu Post Request>>
    const submitCoffeeMenu = (event) => {
        event.preventDefault();

        const formData = new FormData();
        
        formData.append("category", "coffee");
        formData.append("name", coffeeTitle);
        formData.append("content", coffeeDetail);
        formData.append("price", coffeePrice);
        formData.append("image", imgFile);

        console.log("음료 이름 : "+coffeeTitle)
        console.log("음료 설명 : "+coffeeDetail)
        console.log("음료 설명 : "+coffeePrice)

        const token = localStorage.getItem("authorization");
        console.log("토큰 : ", token)
        //Post 요청
        axios.post('http://localhost:8080/admin/menu', 
        formData, {
            headers : {
                "Content-Type": "multipart/form-data",
                Authorization : token

            },
        }
        )
            .then( response => {
                alert("메뉴 추가 성공");
                console.log(response.data);
            })
            .catch( error => {
                alert("메뉴 추가 실패");
                console.log('메뉴 추가 실패', error);
            })
    }

    // << Beverage Post Request>>
    const submitBeverageMenu = (event) =>{
        event.preventDefault();

        const formData = new FormData();
        
        formData.append("category", "beverage");
        formData.append("name", beverageTitle);
        formData.append("content", beverageDetail);
        formData.append("price", beveragePrice);
        formData.append("image", imgFile);

        console.log("음료 이름 : "+beverageTitle)
        console.log("음료 설명 : "+beverageDetail)
        console.log("음료 설명 : "+beveragePrice)

        const token = localStorage.getItem("authorization");
        console.log("토큰 : ", token)
        //Post 요청
        axios.post('http://localhost:8080/admin/menu', 
        formData, {
            headers : {
                "Content-Type": "multipart/form-data",
                Authorization : token

            },
        }
        )
            .then( response => {
                alert("메뉴 추가 성공");
                console.log(response.data);
            })
            .catch( error => {
                alert("메뉴 추가 실패");
                console.log('메뉴 추가 실패', error);
            })
    }
// << Desert Menu Post Request >>
    const submitDesertMenu = (event) =>{
        event.preventDefault();

        const formData = new FormData();
        
        formData.append("category", "dessert");
        formData.append("name", desertTitle);
        formData.append("content", desertDetail);
        formData.append("price", desertPrice);
        formData.append("image", imgFile);

        console.log("음료 이름 : "+desertTitle)
        console.log("음료 설명 : "+desertDetail)
        console.log("음료 설명 : "+desertPrice)

        const token = localStorage.getItem("authorization");
        console.log("토큰 : ", token)
        //Post 요청
        axios.post('http://localhost:8080/admin/menu', 
        formData, {
            headers : {
                "Content-Type": "multipart/form-data",
                Authorization : token

            },
        }
        )
            .then( response => {
                alert("메뉴 추가 성공");
                console.log(response.data);
            })
            .catch( error => {
                alert("메뉴 추가 실패");
                console.log('메뉴 추가 실패', error);
            })
        
    }

// <----------------------< Modal Open/Close >------------------------->
    const [isModalOpen, setIsModalOpen] = useState('');

    const [editImage, setEditImage] = useState("null");
    const [imageBytes, setImageBytes] = useState("");
    const [menuName, setMenuName] = useState("");
    const [menuContent, setMenuContent] = useState("");
    const [menuPrice, setMenuPrice] = useState("");
    const [currentMenuName, setCurrentMenuName] = useState("");

    const openModal = (menuInfo) =>{
        setImageBytes(menuInfo.imageBytes);
        setMenuName(menuInfo.name);
        setMenuContent(menuInfo.content);
        setMenuPrice(menuInfo.price);
        setIsModalOpen(true);
        setCurrentMenuName(menuInfo.name);
        // console.log("현재 메뉴 명 : " + currentMenuName);

    }
    const closeModal = () => {
        setIsModalOpen(false);

    }
// <---------------------< 메뉴 수정 및 삭제 >-------------------------->
    

    const editMenu = () => {

        Swal.fire({
            title : '이대로 수정하시겠습니까?',
            showDenyButton : true,
            confirmButtonText : '저장',
            denyButtonText : '취소',
        }).then( (result) => {

            if (result.isConfirmed){

                console.log(menuName);
                console.log(menuPrice);
                console.log(menuContent);
                console.log("수정하려고 하는 메뉴 이름 : " + currentMenuName);

                const formData =  new FormData();

                formData.append("editImage", editImage);
                formData.append("editName", menuName);
                formData.append("editPrice", menuPrice);
                formData.append("editContent", menuContent);

                try{

                    axios.put(
                        'http://localhost:8080/admin/menu/update/' + currentMenuName,
                        formData,
                        {
                            headers: {
                                'Content-Type' : 'multipart/form-data',
                            },
                        })
                        .then( response => {
                            if (response.status === 200){
                                Swal.fire(
                                    '수정완료!',
                                    '메뉴가 성공적으로 수정되었습니다.',
                                    'success'
                                ).then( result => {
                                    window.location.reload();
                                })
                            }
                        }).catch( error =>{
                            console.log("axios 에러 =>"+error.message)
                        })
                
                }catch(error) {
                    console.log("이미지 정보 업데이트 중 에러 방생 => ", error.message);
                }

            }else if (result.isDenied){
                alert("수정이 취소되었습니다.");
            }
            
           
        })

    }

    const deleteMenu = () => {

        Swal.fire({
            icon: 'warning',
            title: '삭제',
            text: `${menuName}을(를) 삭제하시겠습니까?`,
            showCancelButton: true,
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
        }).then((res) => {//확인 버튼 클릭한 이후
            if (res.isConfirmed) {
                // 삭제 요청 처리

                axios.delete('http://localhost:8080/admin/menu/delete/' + menuName)
                    .then(response => {
                        console.log(response.status);
                        if(response.status === 200){
                            Swal.fire(
                                '삭제완료!',
                                '메뉴가 성공적으로 삭제되었습니다.',
                                'success'
                            ).then((res) => {
                                window.location.reload();
                            })
                        }
                    })
                    .catch(error => {
                        console.error("에러메세지 => ", error);
                        alert('삭제에 실패했습니다.')
                    })

            } else {// 취소버튼을 눌렀을 때
                // 취소
                alert('삭제 취소.');
            }
        });
    }
// <-----------------------< Return >------------------------>

    return (
      <div className="Admin-editMenuContent">
        <h3 className="Admin-menuEditTitle">Edit Menu</h3>
        <div className="Admin-editMenu-Body">
          <div className="Admin-editMenu">
            <div className="Admin-editTabButtons">
              <button
                className={editTab === 0 ? "CoffeeActive" : ""}
                onClick={() => editTabClick(0)}
              >
                Coffee
              </button>
              <button
                className={editTab === 1 ? "BeverageActive" : ""}
                onClick={() => editTabClick(1)}
              >
                Beverage{" "}
              </button>
              <button
                className={editTab === 2 ? "DesertaActive" : ""}
                onClick={() => editTabClick(2)}
              >
                Desert{" "}
              </button>
            </div>

            <div className="Admin-editTabContent">
              {editTab === 0 && (
                // Tab 1 content
                <div>
                  <form
                    onSubmit={submitCoffeeMenu}
                    className="Admin-formSubmit"
                  >
                    <input
                      type="text"
                      value={coffeeTitle}
                      placeholder="커피명"
                      onChange={(e) => setCoffeeTitle(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      value={coffeePrice}
                      placeholder="가격(원)"
                      onChange={(e) => setCoffeePrice(e.target.value)}
                    />
                    <br />
                    <textarea
                      type="text"
                      value={coffeeDetail}
                      placeholder="상세설명"
                      onChange={(e) => setCoffeeDetail(e.target.value)}
                    />
                    <br />
                    <input
                      type="file"
                      onChange={(e) => setImgFile(e.target.files[0])}
                    />

                    <button className="Admin-addButton" type="submit">
                      메뉴 추가
                    </button>
                  </form>
                </div>
              )}

              {editTab === 1 && (
                // Tab 2 content
                <div>
                  <form
                    onSubmit={submitBeverageMenu}
                    className="Admin-formSubmit"
                  >
                    <input
                      type="text"
                      value={beverageTitle}
                      placeholder="음료명"
                      onChange={(e) => setBeverageTitle(e.target.value)}
                    />
                    <br />

                    <input
                      type="text"
                      value={beveragePrice}
                      placeholder="가격(원)"
                      onChange={(e) => setBeveragePrice(e.target.value)}
                    />
                    <br />
                    <textarea
                      type="text"
                      value={beverageDetail}
                      placeholder="상세설명"
                      onChange={(e) => setBeverageDetail(e.target.value)}
                    />
                    <br />
                    <input
                      type="file"
                      onChange={(e) => setImgFile(e.target.files[0])}
                    />
                    <button className="Admin-addButton" type="submit">
                      메뉴 추가
                    </button>
                  </form>
                </div>
              )}
              {editTab === 2 && (
                // Tab 3 content
                <div>
                  <form
                    onSubmit={submitDesertMenu}
                    className="Admin-formSubmit"
                  >
                    <input
                      type="text"
                      value={desertTitle}
                      placeholder="디저트명"
                      onChange={(e) => setDesertTitle(e.target.value)}
                    />
                    <br />

                    <input
                      type="text"
                      value={desertPrice}
                      placeholder="가격(원)"
                      onChange={(e) => setDesertPrice(e.target.value)}
                    />
                    <br />
                    <textarea
                      type="text"
                      value={desertDetail}
                      placeholder="상세설명"
                      onChange={(e) => setDesertDetail(e.target.value)}
                    />
                    <br />
                    <input
                      type="file"
                      onChange={(e) => setImgFile(e.target.files[0])}
                    />
                    <button className="Admin-addButton" type="submit">
                      메뉴 추가
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="Admin-menuList">
            <h1>메뉴 리스트</h1>
            <div className="Admin-menu_container">
              {menuList.map((menu) => (
                <div
                  key={menu.code}
                  onClick={() => openModal(menu)}
                  className="Admin-list"
                >
                  <p>Category : {menu.category}</p>
                  <p>상품명: {menu.name}</p>
                  <p>설명 : {menu.content}</p>
                  <p>가격 : {menu.price}</p>
                  <div className="Admin-menuImageDiv">
                    <img
                      src={`data:img/jpeg;base64,${menu.imageBytes}`}
                      className="Admin-menuImage"
                      alt={menu.name}
                    />
                  </div>
                  <br />
                </div>
              ))}
              {/* Modal */}
              {isModalOpen && (
                <div className="Admin-modal">
                  <div className="Admin-modal_content">
                    <div id="image">
                      <img
                        src={`data:image/jpeg;base64,${imageBytes}`}
                        alt="example_image"
                        className="Admin-menuImage"
                      />
                    </div>
                    <hr />
                    <div className="Admin-editContent" id="editImage">
                      <span> 이미지 </span>
                      <input
                        type="file"
                        onChange={(e) => setEditImage(e.target.files[0])}
                      />
                    </div>
                    <hr />
                    <div className="Admin-editContent" id="editName">
                      <span>상품명 : </span>
                      <input
                        type="text"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className="Admin-editContent" id="editPrice">
                      <span>가격 : </span>
                      <input
                        type="text"
                        value={menuPrice}
                        onChange={(e) => setMenuPrice(e.target.value)}
                      />
                    </div>
                    <hr />
                    <div className="Admin-editContent" id="editDetail">
                      <span>상품 설명</span>
                      <textarea
                        value={menuContent}
                        cols="30"
                        rows="10"
                        onChange={(e) => setMenuContent(e.target.value)}
                      ></textarea>
                    </div>
                    <div id="menu_DeleteEdit">
                      <button onClick={editMenu}>수정하기</button>
                      <button onClick={deleteMenu}>메뉴 삭제</button>
                    </div>
                    <button
                      onClick={closeModal}
                      className="Admin-closeModalBtn"
                    >
                      닫기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
