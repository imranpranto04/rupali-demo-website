import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../assets/logo.png";
import { routes } from "../../../menuItems";
import Menu from "../Menu/Menu";

const Navbar = ({ routes, toggleDrawer }) => {
  return (
    <>
      <div className="navbar_box">
        <div className="container">
          <div className="nav_content">
            <div className="drawerButton" onClick={toggleDrawer}>
              <i className="fa-solid fa-bars-staggered"></i>
            </div>

            <div className="nav_logo text-center d-block d-lg-none">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className="nav_right">
              <div className="navRoutes">
                {routes.map((route) => {
                  if (route.subRoutes) {
                    return <Menu route={route} key={route.name}></Menu>;
                  }

                  return (
                    <div className="navRoute" key={route.name}>
                      <Link to={route.link}>{route.name}</Link>
                    </div>
                  );
                })}

                {/* <div>
                  <button className="btn login_btn">Login</button>
                </div> */}
              </div>
              {/* <div className="d-block d-lg-none">
                <button className="btn login_btn">Login</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
