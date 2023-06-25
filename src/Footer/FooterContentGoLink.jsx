import React from "react";
import "../CSS/footer.css";
const FooterContentGoLink = ({ link, href }) => {
  return (
    <>
      <ul className="footer-ul">
        <li className="footer-li">
          <a href={href}>{link}</a>
        </li>
      </ul>
    </>
  );
};

export default FooterContentGoLink;
