import { CalendarOutlined } from "@ant-design/icons";
import { DatePicker, Button } from "antd";
import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import ballon1 from "../image/img_ballon1.png";
import ballon2 from "../image/img_ballon2.png";
import img3 from "../image/img3.png";
import ballon3 from "../image/img_ballon3.png";
import img2 from "../image/image 2.png";
import background from "../image/bg.png";
import ballon4 from "../image/ballon4.png";
import ballon5 from "../image/ballon5.png";
import ballon6 from "../image/ballon6.png";
import img6 from "../image/img6.png";
import vector from "../image/Vector.png";
import input1 from "../image/icon-input1.png";
import arrowIcon from "../image/arrowIcon.png";
import start from "../image/star.png";
const Home = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
  };
  return (
    <div>
      <div className="content">
        <div className="main-home">
          <img src={background} alt="" className="img-bg" />
          <div className="title">
            <img src={img2} alt="" className="img2" />
            <p className="text-title-top">ĐẦM SEN</p>
            <p className="text-title-bot">PARK</p>
            <img src={ballon1} alt="" className="img3" />
            <img src={ballon2} alt="" className="img4" />
            <img src={img3} alt="" className="img5" />
            <img src={ballon3} alt="" className="img7" />
            <img src={ballon4} alt="" className="img-ballon4" />
            <img src={ballon5} alt="" className="img-ballon5" />
            <img src={ballon6} alt="" className="img-ballon6" />
          </div>

          <div className="content-main">
            <div className="home">
              <div className="left-box1">
                <div className="left-box2">
                  <div className="left-box3">
                    <div className="left-box4">
                      <div className="text-top">
                        <p className="mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sucpendisse ac mollis justo. Etiam volutpat
                          tellus quis risus volutpat tellus quis volutpat, ut
                          posuere ex facilisis.
                        </p>{" "}
                        <p>
                          Suspendisse iaculis libero lobortis condimetum
                          gravida. Aenean auctor iaculis risus, lobortis
                          molestie lectus consequat a.
                        </p>
                      </div>
                      <div className="text-box">
                        <img src={start} alt="" className="star-img" />
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="text-box">
                        <img src={start} alt="" className="star-img2" />
                        <p className="text2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="text-box">
                        <img src={start} alt="" className="star-img3" />
                        <p className="text3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <div className="text-box">
                        <img src={start} alt="" className="star-img4" />
                        <p className="text4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-6">
                <img src={img6} alt="" className="img6" />
              </div>

              <div className="midle-col">
                <img src={vector} alt="" className="img-vector" />
              </div>

              <div className="right-box1">
                <div className="right-box2">
                  <div className="right-box3">
                    <div className="right-box4">
                      <form action="">
                        <div className="form-input1">
                          <input type="text" className="input-rightbox-1" />
                          <img src={input1} alt="" className="icon1" />
                          <img src={arrowIcon} alt="" className="icon1-2" />
                        </div>

                        <div className="form-input2">
                          <input
                            type="number"
                            className="input-rightbox-2"
                            placeholder="Số lượng vé"
                            min={1}
                          />
                          <input
                            type="text"
                            className="input-rightbox-2-2"
                            placeholder="Ngày sử dụng"
                            value={date}
                          />
                          <div className="btn-date">
                            <Button
                              className="btndate"
                              icon={<CalendarOutlined />}
                            ></Button>

                            <DatePicker
                              picker="date"
                              className="date"
                              onChange={handleDateChange}
                              style={{
                                width: "80px",
                                height: "50px",
                                opacity: 0,
                              }}
                            />
                          </div>
                        </div>
                        <div className="form-input3">
                          <input
                            type="text"
                            className="input-rightbox-3"
                            placeholder="Họ và tên"
                          />
                        </div>
                        <div className="form-input4">
                          <input
                            type="text"
                            className="input-rightbox-4"
                            placeholder="Số điện thoại"
                          />
                        </div>
                        <div className="form-input5">
                          <input
                            type="text"
                            className="input-rightbox-5"
                            placeholder="Địa chỉ email"
                          />
                        </div>

                        <div className="box-btn-book">
                          <button className="btn-book" type="submit">
                            Đặt vé
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-title-right">
                <p className="text">VÉ CỦA BẠN</p>
                <div className="box-title-right2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
