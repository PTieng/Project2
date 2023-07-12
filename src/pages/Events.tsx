import React, { useEffect, useState } from "react";
import { UseAppSelector, useAppDispatch } from "../redux/store/store";
import { fetchData } from "../redux/slice/eventSlice";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const dispatch = useAppDispatch();
  const data = UseAppSelector((state) => state.events.events);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data);

  const handleEdit = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <div className="content">
        <div className="main">
          <div className="bg-1">
            <img src="bg.png" alt="" className="img-bg" />
            <img src="bg-2.png" alt="" className="img-bg2" />
          </div>

          <img src="1.png" alt="" className="img1-events" />
          <img src="2.png" alt="" className="img2-events" />
          <div className="title-events">
            <p className="text-title-events">Sự kiện nổi bật</p>
          </div>
          <div className="content-main">
            <div className="events">
              <div className="box-events">
                <div className="row">
                  {data.map((item) => (
                    <div className="col-3">
                      <img src={item.img} alt="" className="img-events" />
                      <p className="name-event">{item.name}</p>
                      <p className="des-event">{item.description}</p>
                      <img
                        src="calendar-events.png"
                        alt=""
                        className="img-calendar"
                      />
                      <p className="date-event">{item.date}</p>
                      <p className="price-event">{item.price.toFixed(3)} VNĐ</p>
                      <button
                        className="btn-detail-events"
                        type="submit"
                        onClick={() => handleEdit(item.id)}
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button className="arrow-left-events" type="submit">
                <img src="arrow-left.png" alt="" className="icon-left-events" />
              </button>
              <button className="arrow-right-events" type="submit">
                <img
                  src="arrow-right.png"
                  alt=""
                  className="icon-right-events"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
