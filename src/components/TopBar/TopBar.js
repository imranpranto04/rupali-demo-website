import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./TopBar.scss";

const TopBar = () => {
  return (
    <>
      <div className="topBar">
        <div className="container">
          <div className="topBarContent">
            <div className="top_logo">
              <Link to="/">
                <img src={logo} className="img-fluid" alt="" />
              </Link>
            </div>

            <div className="helpLine">
              <p className="m-0">
                Hotline:{" "}
                <span>
                  <b>16130</b>
                </span>
              </p>
            </div>

            <div className="loginPart">
              <Link className="btn ripple_btn" to="">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
