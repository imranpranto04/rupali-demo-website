import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ route }) => {
  return (
    <>
      <div className="nav_menu">
        <div className="nav_menu_name">
          {route.name} <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="sub_routes_menu">
          {route.subRoutes.map((subRoute) => (
            <div className="subRoute" key={subRoute.name}>
              <Link to={subRoute.link}>{subRoute.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
