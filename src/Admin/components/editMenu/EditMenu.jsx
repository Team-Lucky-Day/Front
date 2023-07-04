import React, { useEffect, useState } from "react";
import "./editMenu.css";

import axios from "axios";

export default function EditMenu() {//훅은 함수형 컴포넌트에서 다양한 기능을 사용하게 해주는 라이브러리

    const [menuList, setMenuList] = useState([]);

    // <-------------------------------------------------->
    const [editTab, editActiveTab] = useState(0);//상태값 관리
    const [coffeeTitle, setCoffeeTitle] = useState(''   );
    const [coffeeDetail, setCoffeeDetail] = useState('');
    const [coffeePrice, setCoffeePrice] = useState('');


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


        console.log("음료 이름 : "+coffeeTitle)
        console.log("음료 설명 : "+coffeeDetail)
        console.log("음료 설명 : "+coffeePrice)
        //Post 요청
        axios.post('http://localhost:8080/admin/menu',
        {
            category : "coffee",
            name : coffeeTitle,
            content : coffeeDetail,
            price : coffeePrice
        })
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

        axios.post('http://localhost:8080/admin/menu',
        {
            category : "beverage",
            name : beverageTitle,
            content : beverageDetail,
            price : beveragePrice
        })
            .then( response => {
                alert("메뉴 추가 성공");
                console.log('메뉴추가 성공', response.data);
            })
            .catch( error => {
                alert("메뉴 추가 실패");
                console.log('메뉴 추가 실패', error);
            })
        
    }
// << Desert Menu Post Request >>
    const submitDesertMenu = (event) =>{
        event.preventDefault();

        axios.post('http://localhost:8080/admin/menu',
        {
            category : "Desert",
            name : desertTitle,
            content : desertDetail,
            price : desertPrice
        })
            .then( response => {
                alert("메뉴 추가 성공");
                console.log('메뉴추가 성공', response.data);
            })
            .catch( error => {
                alert("메뉴 추가 실패");
                console.log('메뉴 추가 실패', error);
            })
        
    }

    return (
        <div className="editMenu">
            <span className="menuEditTitle">메뉴 수정</span>
            <div className="editMenu">
                <div className="editTabButtons">
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
                        Beverage                </button>
                    <button
                        className={editTab === 2 ? "DesertaActive" : ""}
                        onClick={() => editTabClick(2)}
                    >
                        Desert                </button>
                </div>

                <div className="editTabContent">
                    {editTab === 0 && (
                        // Tab 1 content
                        <div>
                            <form onSubmit={submitCoffeeMenu} className="formSubmit">
                                <input type="text"
                                    value={coffeeTitle}
                                    placeholder="커피명"
                                    onChange={e => setCoffeeTitle(e.target.value)} 
                                    />
                                <br />
                                <input type="text"
                                    value={coffeePrice}
                                    placeholder="가격(원)"
                                    onChange={e => setCoffeePrice(e.target.value)} 
                                    />
                                <br />
                                <textarea type="text"
                                    value={coffeeDetail}
                                    placeholder="상세설명"
                                    onChange={e => setCoffeeDetail(e.target.value)} 
                                    />
                                <br />

                            
                                <button className="addButton" type="submit">메뉴 추가</button>
                                    
                            </form>
                            
                        </div>
                    )}

                    {editTab === 1 && (
                        // Tab 2 content
                        <div>
                            <form onSubmit={submitBeverageMenu} className="formSubmit">
                                <input type="text"
                                    value={beverageTitle}
                                    placeholder="음료명"
                                    onChange={e => setBeverageTitle(e.target.value)} />
                                <br />
                                
                                <input type="text"
                                    value={beveragePrice}
                                    placeholder="가격(원)"
                                    onChange={e => setBeveragePrice(e.target.value)} />
                                <br />
                                <textarea type="text"
                                    value={beverageDetail}
                                    placeholder="상세설명"
                                    onChange={e => setBeverageDetail(e.target.value)} />
                                <br />
                                <button className="addButton" type="submit">메뉴 추가</button>
                            </form>
                        </div>
                    )}
                    {editTab === 2 && (
                        // Tab 3 content
                        <div>
                            <form onSubmit={submitDesertMenu } className="formSubmit">
                                <input type="text"
                                    value={desertTitle}
                                    placeholder="디저트명"
                                    onChange={e => setDesertTitle(e.target.value)} />
                                <br />
                                
                                <input type="text"
                                    value={desertPrice}
                                    placeholder="가격(원)"
                                    onChange={e => setDesertPrice(e.target.value)} />
                                <br />
                                <textarea type="text"
                                    value={desertDetail}
                                    placeholder="상세설명"
                                    onChange={e => setDesertDetail(e.target.value)} />
                                <br />
                                <button className="addButton" type="submit">메뉴 추가</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="menuList">
                <h1>메뉴 리스트</h1>
                <div className="menu_container">
                {menuList.map( menu => (
                    <div key={menu.code} >
                        <p>Category : {menu.category}</p>
                        <p>상품명: {menu.name}</p>
                        <p>설명 : {menu.content}</p>
                        <p>가격 : {menu.price}</p>
                        <div className="menuImageDiv">
                            <img src={`data:img/jpeg;base64,${menu.imageBytes}`} className="menuImage" alt={menu.name} />
                        </div>
                        <br />
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
}
