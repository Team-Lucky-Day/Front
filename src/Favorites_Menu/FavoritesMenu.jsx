import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import FavoritesComponent from "./FavoritesComponent";
import FavoritesCategory from "./FavoritesCategory";
import "../CSS/favorites.css";
const FavoriteMenu = ({ user }) => {
  const username = "염진희";
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const favorites = {
    coffee: {
      card1: {
        favoritesImg: "IceAmericano.jpg",
        favoritesAlt: "c1",
        favoritesTitle: "ICE 아메리카노",
        favoritesTitleEng: "ICE Americano",
      },
      card2: {
        favoritesImg: "c2.jpg",
        favoritesAlt: "c2",
        favoritesTitle: "HOT 아메리카노",
        favoritesTitleEng: "HOT Americano",
      },
      card3: {
        favoritesImg: "c3.jpg",
        favoritesAlt: "c3",
        favoritesTitle: "LD라떼",
        favoritesTitleEng: "LD Latte",
      },
      card4: {
        favoritesImg: "c4.jpg",
        favoritesAlt: "c4",
        favoritesTitle: "카라멜 마키아또",
        favoritesTitleEng: "Caramel Macchiato",
      },
      card5: {
        favoritesImg: "VanillaLatte.jpg",
        favoritesAlt: "c5",
        favoritesTitle: "바닐라 라떼",
        favoritesTitleEng: "Vanilla Latte",
      },
    },
    Beverage: {
      card1: {
        favoritesImg: "b1.jpg",
        favoritesAlt: "b1",
        favoritesTitle: "아이스티",
        favoritesTitleEng: "ICE Tea",
      },
      card2: {
        favoritesImg: "b2.jpg",
        favoritesAlt: "b2",
        favoritesTitle: "더블 초코펄",
        favoritesTitleEng: "Double Choco Bubble",
      },
      card3: {
        favoritesImg: "b3.jpg",
        favoritesAlt: "b3",
        favoritesTitle: "LD 스무디",
        favoritesTitleEng: "LD Smoothie",
      },
      card4: {
        favoritesImg: "b4.jpg",
        favoritesAlt: "b4",
        favoritesTitle: "자몽 에이드",
        favoritesTitleEng: "Grapefruit Ade",
      },
      card5: {
        favoritesImg: "EarlGreyTea.jpg",
        favoritesAlt: "b5",
        favoritesTitle: "얼그레이 티",
        favoritesTitleEng: "Earl Grey Tea",
      },
    },
    Dessert: {
      card1: {
        favoritesImg: "Nuneddine.jpg",
        favoritesAlt: "b1",
        favoritesTitle: "누네띠네",
        favoritesTitleEng: "Nuneddine",
      },
      card2: {
        favoritesImg: "HoneyBread.jpg",
        favoritesAlt: "HoneyBread",
        favoritesTitle: "허니브레드",
        favoritesTitleEng: "Honey Bread",
      },
      card3: {
        favoritesImg: "d4.jpg",
        favoritesAlt: "b3",
        favoritesTitle: "LD 크로플",
        favoritesTitleEng: "LD Croffle",
      },
      card4: {
        favoritesImg: "SaltCaramelFinancier.jpg",
        favoritesAlt: "b4",
        favoritesTitle: "솔트 카라멜 휘낭시에",
        favoritesTitleEng: "Salt Caramel Financier",
      },
      card5: {
        favoritesImg: "AppleCinnamonRoll.jpg",
        favoritesAlt: "b5",
        favoritesTitle: "애플 시나몬 롤",
        favoritesTitleEng: "Apple Cinnamon Roll",
      },
    },
  };
  return (
    <>
      <Header />
      <div className="favorites-page-explanation">
        <div className="favorites-page-explanation-hr"></div>
        <div className="favorites-page-explanation-info">Favorite Menu</div>
        <div className="favorites-page-explanation-hr"></div>
      </div>
      <div className="favorites-page-explanation-detail">
        {username}님이 좋아하는 LD카페 메뉴를 모아놨어요!
        <br />
        여기서도 주문해보세요
      </div>
      <div className="category-container">
        <FavoritesCategory favoritesCategory="Coffee" />
      </div>
      <div className="favoritesMenu-container">
        <Slider {...settings}>
          <FavoritesComponent {...favorites.coffee.card1} cardclass="coffee" />
          <FavoritesComponent {...favorites.coffee.card2} cardclass="coffee" />
          <FavoritesComponent {...favorites.coffee.card3} cardclass="coffee" />
          <FavoritesComponent {...favorites.coffee.card4} cardclass="coffee" />
          <FavoritesComponent {...favorites.coffee.card5} cardclass="coffee" />
        </Slider>
      </div>
      <div className="category-container">
        <FavoritesCategory favoritesCategory="Beverage" />
      </div>
      <div className="favoritesMenu-container">
        <Slider {...settings}>
          <FavoritesComponent
            {...favorites.Beverage.card1}
            cardclass="Beverage"
          />
          <FavoritesComponent
            {...favorites.Beverage.card2}
            cardclass="Beverage"
          />
          <FavoritesComponent
            {...favorites.Beverage.card3}
            cardclass="Beverage"
          />
          <FavoritesComponent
            {...favorites.Beverage.card4}
            cardclass="Beverage"
          />
          <FavoritesComponent
            {...favorites.Beverage.card5}
            cardclass="Beverage"
          />
        </Slider>
      </div>
      <div className="category-container">
        <FavoritesCategory favoritesCategory="Dessert" />
      </div>
      <div className="favoritesMenu-container">
        <Slider {...settings}>
          <FavoritesComponent
            {...favorites.Dessert.card1}
            cardclass="Dessert"
          />
          <FavoritesComponent
            {...favorites.Dessert.card2}
            cardclass="Dessert"
          />
          <FavoritesComponent
            {...favorites.Dessert.card3}
            cardclass="Dessert"
          />
          <FavoritesComponent
            {...favorites.Dessert.card4}
            cardclass="Dessert"
          />
          <FavoritesComponent
            {...favorites.Dessert.card5}
            cardclass="Dessert"
          />
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default FavoriteMenu;
