import React, { useEffect, useState } from "react";
import "./editMenu.css";
import EditCoffeeMenuList from '../EditCoffeeMenuList.js'
import EditBeverageMenuList from '../EditBeverageMenuList.js'
export default function EditMenu() {//훅은 함수형 컴포넌트에서 다양한 기능을 사용하게 해주는 라이브러리
    const [editTab, editActiveTab] = useState(0);//상태값 관리
    const [coffeeTitle, setCoffeeTitle] = useState(''   );
    const [coffeeDetail, setCoffeeDetail] = useState('');
    const [CoffeeMenuList, setCoffeeMenuList] = useState([
        { title: 'Americano', detail: "가나다" },
        { title: 'latte', detail: "가나다" },
        { title: 's', detail: "가나다" }])

    const [beverageTitle, setBeverageTitle] = useState('');
    const [beverageDetail, setBeverageDetail] = useState('');
    const [beverageMenuList, setBeverageMenuList] = useState([
        { title: 'MilkTea', detail: "가나다" },
        { title: '얼그레이', detail: "가나다" },
        { title: '아이스티', detail: "가나다" }])


    useEffect(() => {// 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook
        console.log('render');
    })

    const editTabClick = (editIdx) => {
        editActiveTab(editIdx);
    };


    const renderCoffeeMenus = CoffeeMenuList.map(coffee => {//map은 반복문의 한 종류
        return (
            <EditCoffeeMenuList coffee={coffee} key={coffee.title} />
        );
    })
    const addCoffeeMenu = (event) => {
        event.preventDefault();//form태그를 쓸시 페이지가 리프레시되는 것을 방지
        setCoffeeMenuList([//메뉴 추가 
            ...CoffeeMenuList,// usestate에서 기존 값을 유지하면서 새로운 값 추가할때 
            //
            {
                title: coffeeTitle,
                detail: coffeeDetail,
            }
        ]);
        //초기화
        setCoffeeTitle('');
        setCoffeeDetail('');
    };

    const renderBeverageMenus = beverageMenuList.map(beverage => {//map은 반복문의 한 종류
        return (
            <EditBeverageMenuList beverage={beverage} key={beverage.title} />
        );
    })
    const addBeverageMenu = (event) => {
        event.preventDefault();//form태그를 쓸시 페이지가 리프레시되는 것을 방지
        setBeverageMenuList([//메뉴 추가 
            ...beverageMenuList,// usestate에서 기존 값을 유지하면서 새로운 값 추가할때 
            //
            {
                title: beverageTitle,
                detail: beverageDetail,
            }
        ]);
        //초기화
        setBeverageTitle('');
        setBeverageDetail('');
    };
    return (
        <div className="editMenu">
            <span className="menuEditTitle">Menu Edit</span>
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
                        <form onSubmit={addCoffeeMenu}>
                            <input type="text"
                                value={coffeeTitle}
                                placeholder="커피명"
                                onChange={e => setCoffeeTitle(e.target.value)} />
                            <br />
                            <input type="text"
                                value={coffeeDetail}
                                placeholder="상세설명"
                                onChange={e => setCoffeeDetail(e.target.value)} />
                            <br />
                            <button className="addButton" type="submit">메뉴 추가</button>
                        </form>
                        {renderCoffeeMenus}
                    </div>
                )}

                {editTab === 1 && (
                    // Tab 2 content
                    <div>
                        <form onSubmit={addBeverageMenu}>
                            <input type="text"
                                value={beverageTitle}
                                placeholder="음료명"
                                onChange={e => setBeverageTitle(e.target.value)} />
                            <br />
                            <input type="text"
                                value={beverageDetail}
                                placeholder="상세설명"
                                onChange={e => setBeverageDetail(e.target.value)} />
                            <br />
                            <button className="addButton" type="submit">메뉴 추가</button>
                        </form>
                        {renderBeverageMenus}
                    </div>
                )}
                {editTab === 2 && (
                    // Tab 3 content
                    <div>
                        <h2>Tab 3</h2>
                        {/* Add your table content for Tab 3 here */}
                    </div>
                )}
            </div>
        </div>
    );
}
