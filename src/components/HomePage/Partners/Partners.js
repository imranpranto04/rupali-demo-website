import React from "react";
import "./Partners.scss";
import { Link } from "react-router-dom";
import ditcl from "../../../assets/ditcl.png";
import sli from "../../../assets/sli.png";
import dragon from "../../../assets/dragon.png";
import dragonTex from "../../../assets/dragon-tex.png";

const Partners = () => {
  return (
    <>
      <div className="partners">
        <h2>Our Partners</h2>
        <div className="my-auto">
          <div className="d-flex justify-content-around align-items-center">
            <Link to="">
              <img src={ditcl} className="img-fluid" alt="" />
            </Link>
            <Link to="">
              <img src={sli} className="img-fluid" alt="" />
            </Link>
            <Link to="">
              <img src={dragon} className="img-fluid" alt="" />
            </Link>
            <Link to="">
              <img src={dragonTex} className="img-fluid" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
