import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="Admin-topbar">
      <div className="Admin-topbarWrapper">
        <div className="Admin-topLeft">
          <a href="/">
            <span className="Admin-logo">LuckyCafeAdmin</span>
          </a>
        </div>
        <div className="Admin-topRight">Admin</div>
      </div>
    </div>
  );
}
