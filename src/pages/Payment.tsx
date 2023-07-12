import { CalendarOutlined } from "@ant-design/icons";
import { Button, DatePicker } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";

const Payment = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
    console.log(date);
  };
  return (
    <div>
      <div className="content">
        <div className="main-home">
          <div className="payment">
            <img src="bg.png" alt="" className="img-bg" />
            <div className="title">
              <p className="text-title-payment">Thanh toán</p>
              <img src="img-payment.png" alt="" className="img6" />
            </div>

            <div className="content-main">
              <div className="left-box1">
                <div className="left-box2">
                  <div className="left-box3">
                    <div className="left-box4">
                      <div className="form-input-left-1">
                        <p className="label">Số tiền thanh toán</p>
                        <input type="text" className="input-leftbox-1"/>
                      </div>

                      <div className="form-input-left-2">
                        <p className="label">Số lượng vé</p>
                        <input type="text" className="input-leftbox-2" />
                        <p className="ticket">vé</p>
                      </div>

                      <div className="form-input-left-3">
                        <p className="label">Ngày sử dụng</p>
                        <input type="text" className="input-leftbox-3" />
                      </div>

                      <div className="form-input-left-4">
                        <p className="label">Thông tin liên hệ</p>
                        <input type="text" className="input-leftbox-4" />
                      </div>

                      <div className="form-input-left-5">
                        <p className="label">Điện thoại</p>
                        <input type="text" className="input-leftbox-5"/>
                      </div>

                      <div className="form-input-left-6">
                        <p className="label">Email</p>
                        <input type="text" className="input-leftbox-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-title-left">
                <p className="text">VÉ CỔNG - VÉ GIA ĐÌNH</p>

                <div className="box-title-left2"></div>
              </div>
              <div className="midle-col">
                <img src="Vector.png" alt="" className="img-vector" />
              </div>
              <div className="right-box1">
                <div className="right-box2">
                  <div className="right-box3">
                    <div className="right-box4">
                      <form action="">
                        <div className="form-input1">
                          <p className="label">Số thẻ</p>
                          <input type="text" className="input-rightbox-1" />
                        </div>

                        <div className="form-input2">
                          <p className="label">Họ và tên chủ thẻ</p>
                          <input type="text" className="input-rightbox-2" />
                        </div>

                        <div className="form-input3">
                          <p className="label">Ngày hết hạn</p>

                          <input
                            type="text"
                            className="input-rightbox-3"
                            value={date}
                          />
                          <div className="btn-date">
                            <Button className="btndate">
                              <img
                                src="calendar.png"
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
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-input4">
                          <p className="label">CVV/CVC</p>
                          <input type="password" className="input-rightbox-4" />
                        </div>

                        <div className="box-btn-book">
                          <button className="btn-book" type="submit">
                            THANH TOÁN
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-title-right">
                <p className="text">THÔNG TIN THANH TOÁN</p>

                <div className="box-title-right2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
