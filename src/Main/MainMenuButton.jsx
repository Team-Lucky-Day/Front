import React from "react";
import MainMenu from "./MainMenu";
import "../CSS/main.css";
const MainMenuButton = () => {
  const linkProps = {
    about: {
      href: "/Login",
      text: "Login",
    },
    login: {
      href: "/Menu",
      text: "Menu",
    },
    signup: {
      href: "/Seat",
      text: "Seat",
    },
    admin: {
      href: "/Admin",
      text: "Admin",
    },
    favorites: {
      href: "/FavoritesMenu",
      text: "Favorites",
    },
  };
  const toggleMenu = () => {
    document.body.classList.toggle("open");
  };
  return (
    <>
      <div className="main-menu-button" onClick={toggleMenu}>
        <svg
          className="menu-icon"
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
      <div className="menu-background"></div>
      <div className="menuGroup">
        <MainMenu href={linkProps.about.href} text={linkProps.about.text} />
        <MainMenu href={linkProps.login.href} text={linkProps.login.text} />
        <MainMenu href={linkProps.admin.href} text={linkProps.admin.text} />
        <MainMenu
          href={linkProps.favorites.href}
          text={linkProps.favorites.text}
        />
      </div>
    </>
  );
};

export default MainMenuButton;
