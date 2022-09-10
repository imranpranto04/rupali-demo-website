import React from "react";
import "./Events.scss";
import eventImg from "../../../assets/event-img.png";

const Events = () => {
  return (
    <>
      <div className="events">
        <div className="container">
          <div className="events_content">
            <h2>Latest Event and Photos</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="event_box">
                  <img src={eventImg} alt="" className="img-fluid" />
                  <div className="p-4">
                    <div className="date_text">10 April 2020By Admin</div>
                    <p>2020 Insurance Trends And Possible Challenge</p>
                    <div className="text-end">
                      <button className="btn read_more_btn">
                        Read More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="event_box">
                  <img src={eventImg} alt="" className="img-fluid" />
                  <div className="p-4">
                    <div className="date_text">10 April 2020By Admin</div>
                    <p>2020 Insurance Trends And Possible Challenge</p>
                    <div className="text-end">
                      <button className="btn read_more_btn">
                        Read More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="event_box">
                  <img src={eventImg} alt="" className="img-fluid" />
                  <div className="p-4">
                    <div className="date_text">10 April 2020By Admin</div>
                    <p>2020 Insurance Trends And Possible Challenge</p>
                    <div className="text-end">
                      <button className="btn read_more_btn">
                        Read More...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto left">
                <h3>LATEST NEWS</h3>
              </div>
              <div className="col-lg-6">
                <div className="news_box">
                  <h4>31st Annual General Meeting</h4>
                  <hr />
                  <h4>31st Annual General Meeting</h4>
                  <hr />
                  <h4>31st Annual General Meeting</h4>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
