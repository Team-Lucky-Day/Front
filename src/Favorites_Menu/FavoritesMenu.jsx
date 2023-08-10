import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import FavoritesComponent from "./FavoritesComponent";
import FavoritesCategory from "./FavoritesCategory";
import "../CSS/favorites.css";


const FavoriteMenu = () => {
  const [name, setName] = useState("");
  const [favoriteList, setFavoriteList] = useState([]);
  const [favCoffeeList, setFavCoffeeList] = useState([]);
  const [favBeverageList, setFavBeverageList] = useState([]);
  const [favDesertList, setFavDesertList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("authorization");
    console.log(data);

    axios({
      url: "http://localhost:8080/user/fav/enrollment",
      method: "post",
      baseURL: "http://localhost:3000/FavoritesMenu",
      headers: { Authorization: data },
    })
      .then(function (response) {
        // 성공적인 응답 (200 OK)
        console.log("요청이 성공했습니다!");
        console.log(response.data);

        setName(response.data[0].userName);
        console.log(response.data[0].userName);
        setFavoriteList(response.data);

        const favCoffee = [];
        const favBeverage = [];
        const favDesert = [];

        response.data.forEach((favInfo) => {
          if (favInfo.menuCategory === "coffee") {
            favCoffee.push(favInfo);
          } else if (favInfo.menuCategory === "beverage") {
            favBeverage.push(favInfo);
          } else if (favInfo.menuCategory === "dessert") {
            favDesert.push(favInfo);
          }
        });

        setFavCoffeeList(favCoffee);
        setFavBeverageList(favBeverage);
        setFavDesertList(favDesert);

        console.log(favCoffeeList);
      })
      .catch(function (response) {
        console.log("요청이 실패했습니다. 상태 코드:", response.status);
      });

      // 세가지 카테고리에 따른 배열을 만들어 값 분류하기

  },[]);
  
  const settings1 = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2={
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  }

  const settings3={
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  return (
    <>
      <Header />
      <div className="favorites-page-explanation">
        <div className="favorites-page-explanation-hr"></div>
        <div className="favorites-page-explanation-info">Favorite Menu</div>
        <div className="favorites-page-explanation-hr"></div>
      </div>
      <div className="favorites-page-explanation-detail">
        {name}님이 좋아하는 LD카페 메뉴를 모아놨어요!
        <br />
        여기서도 주문해보세요
      </div>
      <div className="favorites-category-container">
        <FavoritesCategory favoritesCategory="Coffee" />
      </div>
      <div className="favorites-Menu-container">
        <Slider {...(
          favCoffeeList.length === 1 ? settings1 
          :favCoffeeList.length === 2 ? settings2
          : settings3)}>
          {favCoffeeList.map( (menu) =>(
            <FavoritesComponent {...menu} cardclass="coffee"/>
          ))}
          
        </Slider>
      </div>
      <div className="favorites-category-container">
        <FavoritesCategory favoritesCategory="Beverage" />
      </div>
      <div className="favorites-Menu-container">
        <Slider {...(
          favBeverageList.length === 1 ? settings1 
          :favBeverageList.length === 2 ? settings2
          : settings3)}>
          {favBeverageList.map( (menu) => (
            <FavoritesComponent {...menu} cardclass="Beverage"/>
          ))}
         
        </Slider>
      </div>
      <div className="favorites-category-container">
        <FavoritesCategory favoritesCategory="Dessert" />
      </div>
      <div className="favorites-Menu-container">
        <Slider {...(
          favDesertList.length === 1 ? settings1 
          :favDesertList.length === 2 ? settings2
          : settings3)}>
          {favDesertList.map((menu) =>(
            <FavoritesComponent {...menu} cardclass="Desert"/>
          ))}
         
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default FavoriteMenu;
