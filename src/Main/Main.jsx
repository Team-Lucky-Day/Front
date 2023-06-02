import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import MainMenuButton from "./MainMenuButton";
import "../CSS/mainheader.css";
import MainContainer from "./CardComponent";
import Card from "./Card";
import LuckydayInfoText from "./LuckydayInfoText";
import Footer from "../Footer/Footer";
const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const text = "Login";
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
        className={`header fadeRight ${
          isScrollVisible ? "fade-in" : "fade-out"
        }`}
        data-aos="fade-up"
      >
        {isHeaderVisible && (
          <div className="headerGroup">
            <div className="Luckyday">LuckyDay</div>
            <MainMenuButton />
          </div>
        )}

        <div className="scrolldown">
          <span>SCROLL DOWN</span>
          <div className="box_scroll">
            <div className="iconScroll"></div>
          </div>
        </div>
        {isHeaderVisible && <LuckydayInfoText />}
        {/*MainHeaderBtn의 className={`${mainstyle.button} ${mainstyle.fast} ${mainstyle.white} */}
      </div>

      <Card />
      <Footer />
    </>
  );
};

export default Main;
