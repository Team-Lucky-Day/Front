import React from "react";
import "../CSS/footer.css";
import FooterContentGoLink from "./FooterContentGoLink";
const FooterContent = (props) => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <h3>Connect</h3>
          <ul className="footer-socials">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            <p>Copyright &copy;2023 LD all rights reserved. </p>
          </div>
        </div>
      </footer>
      <div className="footer-column footer-link">
        <h3>Links</h3>
        <FooterContentGoLink link="Team" href="/Team" />
        <FooterContentGoLink link="Menu" href="/Menu" />
        <FooterContentGoLink link="Seat" href="/Seat" />
        <FooterContentGoLink link="Favorites Menu" href="/FavoritesMenu" />
        <FooterContentGoLink link="AdminLogin" href="/AdminLogin" />
      </div>
    </>
  );
};

export default FooterContent;
