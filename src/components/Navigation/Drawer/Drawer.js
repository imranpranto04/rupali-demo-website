import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Drawer.scss";
import logo from "../../../assets/logo.png";
import ExpandMenu from "./ExpandMenu/ExpandMenu";

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <BackdropMenu onClick={toggleDrawer} />}

      <DrawerMenu isOpen={isOpen}>
        <div className="container">
          <div className="drawer_nav_menu">
            <div className="nav_logo " onClick={toggleDrawer}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className="drawer_nav_routes">
              {routes.map((route) => {
                if (route.subRoutes) {
                  return (
                    <ExpandMenu
                      route={route}
                      key={route.name}
                      toggleDrawer={toggleDrawer}
                    />
                  );
                }

                return (
                  <div
                    className="drawer_nav_route"
                    onClick={toggleDrawer}
                    key={route.name}
                  >
                    <Link to={route.link}>{route.name}</Link>
                  </div>
                );
              })}

              {/* <div>
              <button className="btn login_btn">Login</button>
            </div> */}
            </div>

            <div className="d-block d-lg-none ">
              <button className="btn login_btn">Login</button>
            </div>
          </div>
        </div>
      </DrawerMenu>
    </>
  );
};

export default Drawer;

const BackdropMenu = styled.div`
  height: 100%;
  width: 100%;
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.2);
`;

const DrawerMenu = styled.div`
  z-index: 210;
  position: fixed;
  top: 0;
  min-height: 100vh;
  width: 70%;
  background-color: white;
  transition: 0.3s ease;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;
