import React from "react";
import "./ProcessCovered.scss";
import badgeIcon from "../../../assets/badge.svg";

const ProcessCovered = () => {
  return (
    <>
      <div className="process_covered">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>The Importance of Being Covered</h3>
            </div>
            <div className="col-lg-6">
              <p>
                Starting from August, 2013 Sonali Life Insurance established
                itself by setting a milestone through transparent and value
                addition service and thus gain the trust of policy holders. The
                number of agents, policy holders and well wishers are growing in
                a daily basis.
              </p>
            </div>
          </div>
          <div className="process_covered_content">
            <div className="row justify-content-around">
              <div className="col-lg-2 col-6">
                <div className="circle_box_content">
                  <img src={badgeIcon} alt="" />
                  <h5>2493</h5>
                  <h6>Total Group Claims Processed</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                <div className="circle_box_content">
                  <img src={badgeIcon} alt="" />
                  <h5>2493</h5>
                  <h6>Total Group Claims Processed</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                <div className="circle_box_content">
                  <img src={badgeIcon} alt="" />
                  <h5>15387</h5>
                  <h6>Active Agents</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 ">
                <div className="circle_box_content">
                  <img src={badgeIcon} alt="" />
                  <h5>127</h5>
                  <h6>
                    Total Branch <br /> Offices
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessCovered;
