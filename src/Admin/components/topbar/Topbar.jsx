import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <a href="/">
            <span className="logo">LuckyCafeAdmin</span>
          </a>
        </div>
        <div className="topRight">Admin</div>
      </div>
    </div>
  );
}
