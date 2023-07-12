import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import { Event } from "../redux/slice/eventSlice";

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
              <img src="bg.png" alt="" className="img-bg" />
              <img src="bg-2.png" alt="" className="img-bg2" />
            </div>

            <img src="1.png" alt="" className="img1-events" />
            <img src="2.png" alt="" className="img2-events" />
            <div className="title-events">
              <p className="text-title-events">{events?.name}</p>
            </div>
            {/* <div className="content-main">
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
                          src="calendar-events.png"
                          alt=""
                          className="img-calendar"
                        />
                        <p className="date-event">{events?.date}</p>
                        <p className="des-event">{events?.description}</p>
                        <p className="price-event">
                          {events?.price.toFixed(3)}VNĐ
                        </p>

                        <p className="text-1">
                          <span>Lorem Ipsum </span> is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic sdsd typesetting, remaining cssa
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, of Lorem Ipsum.
                        </p>

                        <div className="column-2">
                          <img
                            src="events1.png"
                            alt=""
                            className="img-events"
                          />
                          <p className="text-2">
                            Lorem Ipsum is not simply random text. It has roots
                            in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. words, consectetur,
                            from a Lorem Ipsum passage, and going through the
                            cites of the word in classical literature,
                          </p>
                        </div>

                        <div className="column-3">
                          <p className="text-3">
                            Lorem Ipsum is not simply random text. It has roots
                            in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. words, consectetur,
                            from a Lorem Ipsum passage, and going through the
                            cites of the word in classical literature,
                          </p>
                          <img
                            src="events1.png"
                            alt=""
                            className="img-events"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
