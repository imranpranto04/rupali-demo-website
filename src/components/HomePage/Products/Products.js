import React from "react";
import "./Products.scss";
import enginePd from "../../../assets/engineering-pd.png";
import marinePd from "../../../assets/marine-pd.png";
import motorPd from "../../../assets/motor-pd.png";
import propertyPd from "../../../assets/property-pd.png";
import otherPd from "../../../assets/others-pd.png";

const Products = () => {
  return (
    <>
      <div className="products">
        <div className="product_content">
          <div className="container">
            <h2 data-aos="zoom-out-left">OUR PRODUCTS</h2>
            <div className="product_details">
              <div className="row">
                <div className="col-lg-6 " data-aos="fade-right">
                  <div className="product_details_card">
                    <img src={enginePd} alt="" className="img-fluid" />
                    <div className="p-4">
                      <h3>ENGINEERING INSURANCES</h3>
                      <p>
                        Marine insurance covers the loss or damage of ships,
                        cargo, terminals, and any transport by which the
                        property is transferred, acquired, or held between the
                        points of origin and the final destination
                      </p>
                      <button className="btn main_btn">View Details</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="product_details_card">
                    <img src={marinePd} alt="" className="img-fluid" />
                    <div className="p-4">
                      <h3>MARINE INSURANCES</h3>
                      <p>
                        Marine insurance covers the loss or damage of ships,
                        cargo, terminals, and any transport by which the
                        property is transferred, acquired, or held between the
                        points of origin and the final destination
                      </p>
                      <button className="btn main_btn">View Details</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 ">
                  <div className="product_details_card">
                    <img src={motorPd} alt="" className="img-fluid" />
                    <div className="p-4">
                      <h3>MOTOR INSURANCES</h3>
                      <p>
                        Marine insurance covers the loss or damage of ships,
                        cargo, terminals, and any transport by which the
                        property is transferred, acquired, or held between the
                        points of origin and the final destination
                      </p>
                      <button className="btn main_btn">View Details</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="product_details_card">
                    <img src={propertyPd} alt="" className="img-fluid" />
                    <div className="p-4">
                      <h3>PROPERTY INSURANCES</h3>
                      <p>
                        Marine insurance covers the loss or damage of ships,
                        cargo, terminals, and any transport by which the
                        property is transferred, acquired, or held between the
                        points of origin and the final destination
                      </p>
                      <button className="btn main_btn">View Details</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 ">
                  <div className="product_details_card">
                    <img src={marinePd} alt="" className="img-fluid" />
                    <div className="p-4">
                      <h3>MISCELLANEOUS INSURANCES</h3>
                      <p>
                        Marine insurance covers the loss or damage of ships,
                        cargo, terminals, and any transport by which the
                        property is transferred, acquired, or held between the
                        points of origin and the final destination
                      </p>
                      <button className="btn main_btn">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
