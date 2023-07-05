import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu";
const MainMenuButton = () => {
  const linkProps = {
    login: {
      href: "/Login",
      text: "Login",
    },
    menu: {
      href: "/Menu",
      text: "Menu",
    },
    signup: {
      href: "/Seat",
      text: "Seat",
    },
    payment: {
      href: "/Payment",
      text: "Payment",
    },
    favorites: {
      href: "/FavoritesMenu",
      text: "Favorites",
    },
    mypage: {
      href: "/Mypage",
      text: "Mypage",
    },
  };
  const toggleMenu = () => {
    document.body.classList.toggle("open");
  };
  const navigate = useNavigate();
  var getValue = localStorage.getItem("authorization");
  const handleLogout = () => {
    localStorage.removeItem("authorization");
    navigate("/");
  };

  return (
    <>
      <div className="main-menu-container">
        <div className="main-menu-button" onClick={toggleMenu}>
          <svg
            className="main-menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 72 72"
          >
            <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
          </svg>
        </div>
        <div className="main-menu-background"></div>
        <div className="main-menuGroup">
          {getValue !== null ? (
            <>
              <nav>
                <a href="/" className="main-menulink" onClick={handleLogout}>
                  Logout
                </a>
              </nav>
              <MainMenu href={linkProps.menu.href} text={linkProps.menu.text} />
              <MainMenu
                href={linkProps.favorites.href}
                text={linkProps.favorites.text}
              />
              <MainMenu
                href={linkProps.payment.href}
                text={linkProps.payment.text}
              />
              <MainMenu
                href={linkProps.mypage.href}
                text={linkProps.mypage.text}
              />
            </>
          ) : (
            <>
              <MainMenu
                href={linkProps.login.href}
                text={linkProps.login.text}
              />
              <MainMenu href={linkProps.menu.href} text={linkProps.menu.text} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainMenuButton;
