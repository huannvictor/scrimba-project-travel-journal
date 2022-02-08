import React from "react";
import headerIcon from "../assets/headerIcon.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={headerIcon}
        alt="header icon: an icon of a world"
        className="headerIcon"
      />
      <span className="headerTitle">my travel journal.</span>
    </header>
  );
}
