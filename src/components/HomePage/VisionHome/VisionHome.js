import React from "react";
import "./VisionHome.scss";
import vision from "../../../assets/vision-bg.png";

const VisionHome = () => {
  return (
    <>
      <div className="vision_home">
        <div className="container">
          <div className="vision_home_content">
            <div className="row">
              <div className="col-lg-5">
                <img src={vision} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-7 right my-auto">
                <h2>Our Vision</h2>
                <h3>We are Committed to Help Clients to Reach The Goals</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis
                </p>
                <div className="d-flex justify-content-around">
                  <ul>
                    <li>Save Money</li>
                    <li>Flexible Insurance</li>
                    <li>Investment Planning</li>
                  </ul>
                  <ul>
                    <li>Save Money</li>
                    <li>Flexible Insurance</li>
                    <li>Investment Planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionHome;
