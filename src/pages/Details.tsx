import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import { Event } from "../redux/slice/eventSlice";
import background1 from "../image/bg.png";
import background2 from "../image/bg-2.png";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import imgCalendar from "../image/calendar-events.png";
const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [events, setEvents] = useState<Event | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const eventRef = firestore.collection("events").doc(id);
        const dataRef = await eventRef.get();
        if (dataRef.exists) {
          const data = dataRef.data() as Event;
          setEvents(data);
          console.log(id);
        } else {
          console.log("error");
        }
      } catch (err) {}
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="content">
        <div className="main">
          <div className="details">
            <div className="bg-1">
              <img src={background1} alt="" className="img-bg" />
              <img src={background2} alt="" className="img-bg2" />
            </div>

            <img src={img1} alt="" className="img1-events" />
            <img src={img2} alt="" className="img2-events" />
            <div className="title-events">
              <p className="text-title-events">{events?.name}</p>
            </div>
            <div className="content-main">
              <div className="box-events">
                <div className="left-box1">
                  <div className="left-box2">
                    <div className="left-box3">
                      <div className="left-box4">
                        <img
                          src={events?.img}
                          alt=""
                          className="img-details-1"
                        />
                        <img
                          src={imgCalendar}
                          alt=""
                          className="img-calendar"
                        />
                        <p className="date-event">{events?.date}</p>
                        <p className="des-event">{events?.description}</p>
                        <p className="price-event">
                          {events?.price.toFixed(3)} VNĐ
                        </p>

                        <p className="text-1" id="changeText">
                          {events?.description2 && (
                            <>
                              <span style={{ color: "orange" , fontWeight: "700"}}>
                                {events.description2.slice(0, 11)}
                              </span>
                              {events.description2.slice(11)}
                            </>
                          )}
                        </p>

                        <div className="column-2">
                          <img
                            src={events?.img2}
                            alt=""
                            className="img-events"
                          />
                          <p className="text-2">{events?.description3}</p>
                        </div>

                        <div className="column-3">
                          <p className="text-3">{events?.description4}</p>
                          <img
                            src={events?.img3}
                            alt=""
                            className="img-events"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
