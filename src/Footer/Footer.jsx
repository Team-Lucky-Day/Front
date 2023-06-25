import React from "react";
import "../CSS/footer.css";
import FooterContent from "./FooterContent";
import FooterContentGoLink from "./FooterContentGoLink";
const Footer = (props) => {
  return (
    <div className="footer-Body">
      <FooterContent />
      <FooterContentGoLink />
    </div>
  );
};

export default Footer;
