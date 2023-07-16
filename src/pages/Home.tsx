import { DatePicker, Button } from "antd";
import dayjs from "dayjs";
import React, { useState, createContext } from "react";
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
import calendarImg from "../image/calendar.png";
import { useDispatch } from "react-redux";
import { HomeInput } from "../redux/slice/homeSlice";

import { useNavigate } from "react-router-dom";

export const FormDataContext = createContext<HomeInput | null>(null);

const Home = () => {
  const [date, setDate] = useState<string>("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState<HomeInput>({
    packages: "",
    name: "",
    quantity: "1",
    price: 90,
    email: "",
    phone: "",
    date: "",
  });
  const dispatch: any = useDispatch();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      // date: date,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    navigate(
      `/payment?packages=${encodeURIComponent(
        formData.packages
      )}&name=${encodeURIComponent(
        formData.name
      )}&quantity=${encodeURIComponent(
        formData.quantity
      )}&price=${encodeURIComponent(formData.price)}&email=${encodeURIComponent(
        formData.email
      )}&phone=${encodeURIComponent(formData.phone)}&date=${encodeURIComponent(
        formData.date || ""
      )}`
    );
  };

  // const handleDateChange = (e: any) => {
  //   setDate(dayjs(e).format("DD/MM/YYYY"));
  // };
  const handleDateChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("DD/MM/YYYY");
      setFormData({
        ...formData,
        date: formattedDate,
      });
    }
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
                      <form action="" onSubmit={handleSubmit}>
                        <div className="form-input1">
                          <select
                            className="input-rightbox-1"
                            onChange={handleChange}
                            required
                            name="packages"
                            value={formData.packages}
                          >
                            <option value="">Chọn gói</option>
                            <option value="Gói 1">Gói gia đình</option>
                          </select>
                          <img src={input1} alt="" className="icon1" />
                          <img src={arrowIcon} alt="" className="icon1-2" />
                        </div>

                        <div className="form-input2">
                          <input
                            type="number"
                            className="input-rightbox-2"
                            placeholder="Số lượng vé"
                            min={1}
                            onChange={handleChange}
                            name="quantity"
                            required
                            value={formData.quantity}
                          />
                          <input
                            type="text"
                            className="input-rightbox-2-2"
                            placeholder="Ngày sử dụng"
                            value={formData.date || ""}
                            onChange={handleChange}
                            name="date"
                            required
                          />
                          <div className="btn-date">
                            <Button className="btndate">
                              <img
                                src={calendarImg}
                                alt=""
                                className="calendar
                                "
                              />
                            </Button>

                            <DatePicker
                              picker="date"
                              className="date"
                              onChange={handleDateChange}
                              style={{
                                width: "80px",
                                height: "50px",
                                opacity: 0,
                                position: "absolute",
                                top: " 28%",
                              }}
                            />
                          </div>
                        </div>
                        <div className="form-input3">
                          <input
                            type="text"
                            className="input-rightbox-3"
                            placeholder="Họ và tên"
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                            required
                          />
                        </div>
                        <div className="form-input4">
                          <input
                            type="text"
                            className="input-rightbox-4"
                            placeholder="Số điện thoại"
                            onChange={handleChange}
                            name="phone"
                            value={formData.phone}
                            required
                          />
                        </div>
                        <div className="form-input5">
                          <input
                            type="text"
                            className="input-rightbox-5"
                            placeholder="Địa chỉ email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            required
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
