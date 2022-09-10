import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { routes } from "../../../menuItems";

import "./Navigation.scss";
import Drawer from "../Drawer/Drawer";
import TopBar from "../../TopBar/TopBar";

const Navigation = () => {
  console.log("routes is", routes);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="">
        <TopBar />
        <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Navbar routes={routes} toggleDrawer={toggleDrawer} />
      </div>
    </>
  );
};

export default Navigation;
