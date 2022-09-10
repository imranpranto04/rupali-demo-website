import React from "react";
import { useState } from "react";
import AboutHome from "../AboutHome/AboutHome";
import Call from "../Call/Call";
import Events from "../Events/Events";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import Importance from "../Importance/Importance";
import Partners from "../Partners/Partners";
import ProcessCovered from "../ProcessCovered/ProcessCovered";
import Products from "../Products/Products";
import VisionHome from "../VisionHome/VisionHome";
import "./Home.scss";

const Home = () => {
  // const [isModal, setIsModal] = useState(true);

  // const handleModal = () => {
  //   setIsModal(true);
  // };
  // const closeModal = () => {
  //   setIsModal(false);
  // };

  return (
    <div className="home">
      <HeroCarousel></HeroCarousel>

      {/* <h3>Modal here</h3>
        {isModal ? (
          <div className="reactModal">
            <div class="">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" onClick={handleModal}></button>
            </div>
            <div class="">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary">
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={closeModal}
              >
                Save changes
              </button>
            </div>
          </div>
        ) : (
          ""
        )} */}

      <AboutHome></AboutHome>
      <Importance></Importance>
      <Products></Products>
      <ProcessCovered></ProcessCovered>
      <VisionHome></VisionHome>
      <Call></Call>
      <Events></Events>
      <Partners></Partners>
    </div>
  );
};

export default Home;
