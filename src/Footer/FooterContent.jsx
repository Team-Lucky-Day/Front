import React from "react";
import "../CSS/footer.css";
import FooterContentGoLink from "./FooterContentGoLink";
const FooterContent = (props) => {
  return (
    <>
      <footer>
        <div className="footer">
          <h3>Connect</h3>
          <ul className="socials">
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
      <div className="column link">
        <h3>Links</h3>
        <FooterContentGoLink link="Team" />
        <FooterContentGoLink link="Menu" />
        <FooterContentGoLink link="Seat" />
        <FooterContentGoLink link="Favorites Menu" />
      </div>
    </>
  );
};

export default FooterContent;
