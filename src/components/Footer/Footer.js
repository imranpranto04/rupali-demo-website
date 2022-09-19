import React from "react";
import "./Footer.scss";
import fLogo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_content">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3">
                <img src={fLogo} alt="" className="img-fluid " />
                <h6>
                  Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod
                  te incididunt ut labore et dolore Lorem ipsum dolor
                  sitamet,cons adipiscing dolore Lorem ipsum dolor.
                </h6>
              </div>
              <div className="col-lg-3">
                <div className="footer_header">SERVICES</div>
                <ul>
                  <li>
                    <Link to="">Fire Insurance</Link>
                  </li>
                  <li>
                    <Link to="">Marine Insurance</Link>
                  </li>
                  <li>
                    <Link to="">Motor Insurance</Link>
                  </li>
                  <li>
                    <Link to="">Engineering Insurance</Link>
                  </li>
                  <li>
                    <Link to="">Miscellaneous Insurance</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <div className="footer_header">Important Links</div>
                <ul>
                  <li>
                    <Link to="">IDRA</Link>
                  </li>
                  <li>
                    <Link to="">BSEC</Link>
                  </li>
                  <li>
                    <Link to="">DSE</Link>
                  </li>
                  <li>
                    <Link to="">CSE</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 contact">
                <div className="footer_header">Contact</div>
                <div className="d-flex">
                  <div className="footer_icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>{" "}
                  <p>
                    <b>Email:</b> <br /> info@rupaliinsurance.com
                    rupaliinsurance@gmail.com
                  </p>
                </div>

                <div className="d-flex">
                  <div className="footer_icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>{" "}
                  <p>
                    <b>Phone:</b> +02223385625-6, rupaliinsurance@gmail.com
                  </p>
                </div>

                <div className="d-flex">
                  <div className="footer_icon">
                    <i className="fa-solid fa-fax"></i>
                  </div>{" "}
                  <p>
                    <b>Fax:</b> 02222223385629
                  </p>
                </div>

                <div className="d-flex">
                  <div className="footer_icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>{" "}
                  <p>
                    <b>Address:</b> <br /> Rupali Bima Bhaban 7, Rajuk Avenue,
                    Dhaka - 1000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            © 2022 - All Rights Reserved | Developed by{" "}
            <span>
              <Link to="">
                Dragon Information Technology and Communication Limited
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
