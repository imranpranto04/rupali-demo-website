import React from "react";
import "./AboutHome.scss";
import abtExp from "../../../assets/abt-exp.png";

const AboutHome = () => {
  return (
    <>
      <div className="about_home">
        <div className="container">
          <h2>ABOUT COMPANY</h2>
          <div className="about_home_content">
            <div className="row">
              <div className="col-lg-6 left">
                <h3>BETTER INSURANCE FOR EVERYONE</h3>
                <p>
                  To make the company healthy in all respects we firmly believe
                  to exhibit absolute transparency, honesty and open
                  communication with our stake holders and clients.
                </p>
                <p>
                  To receive our individual cordially and believe in team spirit
                  and encourage & support business decisions through experience
                  and good judgment.
                </p>

                <button className="btn main_btn mt-3">Get To Know Us</button>
              </div>
              <div className="col-lg-6 my-auto">
                <img src={abtExp} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
