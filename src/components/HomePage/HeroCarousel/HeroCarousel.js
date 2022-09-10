import React from "react";
import "./HeroCarousel.scss";
import slider1 from "../../../assets/slider1.png";
import property from "../../../assets/property.png";
import marine from "../../../assets/marine.png";
import marine2 from "../../../assets/marine2.png";
import motor from "../../../assets/motor.png";

const HeroCarousel = () => {
  return (
    <>
      <div className="heroCarousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider1} className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption">
                  <h1>
                    Reliable Insurance <br /> for Any Purpose
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor incididunt <br /> ut labore et
                    dolore magna aliqua
                  </p>

                  <button className="btn main_btn">Learn More</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={marine2} className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption d-none d-md-block">
                  <h1>
                    Reliable Insurance <br /> for Any Purpose
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor incididunt <br /> ut labore et
                    dolore magna aliqua
                  </p>

                  <button className="btn main_btn">Learn More</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={property} className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption d-none d-md-block">
                  <h1>
                    Reliable Insurance <br /> for Any Purpose
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor incididunt <br /> ut labore et
                    dolore magna aliqua
                  </p>

                  <button className="btn main_btn">Learn More</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src={motor} className="d-block w-100" alt="..." />
              <div className="container">
                <div className="carousel-caption d-none d-md-block">
                  <h1>
                    Reliable Insurance <br /> for Any Purpose
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor incididunt <br /> ut labore et
                    dolore magna aliqua
                  </p>

                  <button className="btn main_btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
