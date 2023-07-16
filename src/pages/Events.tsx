import React, { useEffect } from "react";
import { UseAppSelector, useAppDispatch } from "../redux/store/store";
import { fetchData } from "../redux/slice/eventSlice";
import { useNavigate } from "react-router-dom";
import background from "../image/bg.png";
import backgroun2 from "../image/bg-2.png";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import calendarImg from "../image/calendar-events.png";
import arrowLeft from "../image/arrow-left.png";
import arrowRight from "../image/arrow-right.png";

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
            <img src={background} alt="" className="img-bg" />
            <img src={backgroun2} alt="" className="img-bg2" />
          </div>

          <img src={img1} alt="" className="img1-events" />
          <img src={img2} alt="" className="img2-events" />
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
                      <img src={calendarImg} alt="" className="img-calendar" />
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
                <img src={arrowLeft} alt="" className="icon-left-events" />
              </button>
              <button className="arrow-right-events" type="submit">
                <img src={arrowRight} alt="" className="icon-right-events" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
