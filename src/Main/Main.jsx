import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainMenuButton from "./MainMenuButton";
import "../CSS/main.css";
import Card from "./Card";
import LuckydayInfoText from "./LuckydayInfoText";
import Footer from "../Footer/Footer";
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility of .headerGroup and MainHeaderBtn after .header animation
    const timeout = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, []);

  const [isScrollVisible, setScrollVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && isScrollVisible) {
        setScrollVisible(false);
      } else if (scrollTop === 0 && !isScrollVisible) {
        setScrollVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollVisible]);

  return (
    <>
      <div
        className={`main-header fadeRight ${
          isScrollVisible ? "main-fade-in" : "main-fade-out"
        }`}
        data-aos="fade-up"
      >
        {isHeaderVisible && (
          <div className="main-headerGroup">
            <div className="main-Luckyday">LuckyDay</div>
            <MainMenuButton />
          </div>
        )}

        <div className="main-scrolldown">
          <span>SCROLL DOWN</span>
          <div className="main-box_scroll">
            <div className="main-iconScroll"></div>
          </div>
        </div>
        {isHeaderVisible && <LuckydayInfoText />}
      </div>

      <Card />
      <Footer />
    </>
  );
};

export default Main;
