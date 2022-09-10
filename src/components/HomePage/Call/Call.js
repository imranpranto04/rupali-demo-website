import React from "react";
import "./Call.scss";

const Call = () => {
  return (
    <>
      <div className="call">
        <div className="container">
          <h2>
            NOT SURE WHAT YOU NEED? <br /> FIND AN AGENT NOW
          </h2>
          <p>
            If you are looking for more information about the choices available
            to you, <br /> our friendly team is here to answer any questions you
            may have.
          </p>
          <div className="number_box btn w-50">
            <h5>Call Now:</h5>
            <h4>+02223385625-6</h4>
          </div>

          <div>
            <button className="btn main_btn w-25">contAct US</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Call;
