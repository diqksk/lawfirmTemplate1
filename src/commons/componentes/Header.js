import React from "react";
import "./css/header.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={"header-container"}>
      <div className={"header-logo"}>
        <Link to={"/"}>
          <img src={logo} alt={"logo"} />
        </Link>
      </div>
      <div className={"header-contents-container"}>
        <div className={"header-menu"}>
          <div>
            <Link to={"/about"}>About?</Link>
          </div>
          <div>
            <Link to={"/members"}>Members</Link>
          </div>
          <div>
            <Link to={"/fields"}>Fields</Link>
          </div>
          <div>
            <Link to={"/news"}>News</Link>
          </div>
        </div>
        <div className={"header-icons"}>
          <div>📞 상담문의 | 1577-0844</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
