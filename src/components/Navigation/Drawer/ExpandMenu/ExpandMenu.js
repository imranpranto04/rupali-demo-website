import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./ExpandMenu.scss";

const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="drawerExpandMenu">
        <div className="expandToggleIcon" onClick={toggleMenu}>
          {route.name}{" "}
          {isMenuOpen ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </div>

        <SubRoutesContent isOpen={isMenuOpen}>
          {route.subRoutes.map((subRoute) => (
            <div className="subRoute" key={subRoute.name}>
              <Link to={subRoute.link}>{subRoute.name}</Link>
            </div>
          ))}
        </SubRoutesContent>
      </div>
    </>
  );
};

export default ExpandMenu;

const SubRoutesContent = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
`;
