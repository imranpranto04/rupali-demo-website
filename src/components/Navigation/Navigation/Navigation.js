import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { routes } from "../../../menuItems";

import "./Navigation.scss";
import Drawer from "../Drawer/Drawer";
import TopBar from "../../TopBar/TopBar";
import { useEffect } from "react";

const Navigation = () => {
  console.log("routes is", routes);

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset >= 168) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="">
        <TopBar />
        <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Navbar
          scrolling={scrolling}
          routes={routes}
          toggleDrawer={toggleDrawer}
        />
      </div>
    </>
  );
};

export default Navigation;
